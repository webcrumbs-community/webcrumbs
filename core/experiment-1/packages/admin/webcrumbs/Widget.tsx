import React, { useState, useEffect, lazy, Suspense, FC } from 'react';

type Factory = () => any;

interface Container {
  init(shareScope: any): void;
  get(module: string): Factory;
}

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: any };

const loadComponent = async (scope: string, module: string): Promise<any> => {
  console.log(`loadComponent called with scope: ${scope} and module: ${module}`);
  await __webpack_init_sharing__('default');
  const container = (window as any)[scope] as Container;
  console.log('Container initialized:', container);
  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(module);
  console.log('Factory retrieved:', factory);
  const Module = factory();
  console.log('Module created:', Module);
  return Module;
};

const urlCache = new Set<string>();

const useDynamicScript = (url: string | null) => {
  console.log(`useDynamicScript called with URL: ${url}`);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    console.log(`useEffect in useDynamicScript: URL = ${url}`);
    if (!url) return;
    if (urlCache.has(url)) {
      setReady(true);
      setFailed(false);
      return;
    }
    setReady(false);
    setFailed(false);

    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      urlCache.add(url);
      setReady(true);
      setFailed(false);
    };
    script.onerror = () => {
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(script);

    return () => {
      urlCache.delete(url);
      document.head.removeChild(script);
    }
  }, [url]);

  return { ready, failed };
};

const componentCache = new Map();

export const useFederatedComponent = (url: string, scope: string, module: string) => {
  console.log(`useFederatedComponent called with URL: ${url}, scope: ${scope}, module: ${module}`);
  const key = `${url}-${scope}-${module}`;
  const [Component, setComponent] = useState<FC | null>(null);
  const { ready, failed } = useDynamicScript(url);

  useEffect(() => {
    if (Component) setComponent(null);
  }, [key]);

  useEffect(() => {
    if (ready && !Component) {
      const Comp = lazy(() => loadComponent(scope, module));
      componentCache.set(key, Comp);
      setComponent(Comp);
    }
  }, [Component, ready, key]);

  return { Component, failed };
};

interface WidgetProps {
  scope: string;
}

const Widget: FC<WidgetProps> = ({ scope }) => {
  console.log(`Widget component rendering with scope: ${scope}`);

  const available_plugins: { [key: string]: { url: string, module: string, scope: string } } = {
    wc_plugin1: { url: 'http://localhost:3001/remoteEntry.js', module: './Widget', scope: 'wc_plugin1' },
    wc_plugin2: { url: 'http://localhost:3002/remoteEntry.js', module: './Widget', scope: 'wc_plugin2' },
  }

  const url = available_plugins[scope]?.url || '';
  const module = available_plugins[scope]?.module || '';

  const { Component, failed } = useFederatedComponent(url, scope, module);

  return (
    <Suspense fallback="Loading...">
      {failed ? `Error loading ${module}` : Component && <Component />}
    </Suspense>
  );
};

export default Widget;
