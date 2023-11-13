import React, { FC, lazy, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
// import Plugin1 from "plugins/Plugin1";
// import Plugin2 from "plugins/Plugin2";
import dynamic from "next/dynamic";
import { injectScript } from "@module-federation/nextjs-mf/utils";

const loadComponent = async ({ modulePath }: { modulePath: string }) => {
  const container = await injectScript({
    global: "inject",
    url: "http://localhost:3002/_next/static/chunks/remoteEntry.js",
  });
  const factory = await container.get(modulePath);
  const Module = factory();
  return Module;
};

const HomePage = () => {
  const [plugin, setPlugin] = useState("Plugin1");
  const [injectPluginModuleName, setInjectPluginModuleName] =
    useState<string>();
  const [Component, setComponent] = useState<FC | null>(null);

  const Plugin1 = dynamic(() => import("plugins/Plugin1"), { ssr: true });
  const Plugin2 = dynamic(() => import("plugins/Plugin2"), { ssr: true });
  const Widget = plugin === "Plugin1" ? Plugin1 : Plugin2;

  useEffect(() => {
    if (injectPluginModuleName) {
      const Comp = lazy(() =>
        loadComponent({ modulePath: injectPluginModuleName })
      );
      setComponent(Comp);
    }
  }, [injectPluginModuleName]);
  return (
    <Box p={4}>
      <Typography variant="h4">WebCrumbs</Typography>
      <Typography variant="h5" marginBottom={8}>
        Unlock, extend and customize your website
      </Typography>
      <Typography variant="body1" paragraph>
        Think of this as the admin panel we've been working on at the admin
        folder. Soon enough, you'll be able to load and import plugins in a
        snap. Just one click and boom, they're in! Right now, this page is here
        to show you that it's entirely possible to load plugins dynamically from
        remote addresses. For the time being, we're running things off localhost
        on different ports, but down the road, keep an eye out for plugins
        loading from https://registry.webcrumbs.org/.
      </Typography>
      <Typography variant="body1" paragraph>
        Choose a plugin to dynamically load from a remote source:
      </Typography>
      <Tooltip title="Loads from https://localhost:3001" arrow>
        <>
          <Box mb={2}>
            <Button variant="outlined" onClick={() => setPlugin("Plugin1")}>
              Load Plugin 1
            </Button>
          </Box>
          <Box mb={2}>
            <Button variant="outlined" onClick={() => setPlugin("Plugin2")}>
              Load Plugin 2
            </Button>
          </Box>
        </>
      </Tooltip>

      <Box p={4}>
        <Widget />
      </Box>
      <Tooltip title="Loads from https://localhost:3002" arrow>
        <Box mt={2}>
          <Button
            variant="outlined"
            onClick={() => setInjectPluginModuleName("./Plugin1")}
          >
            Inject Plugin 1
          </Button>
          {Component && <Component />}
        </Box>
      </Tooltip>
    </Box>
  );
};

export async function getServerSideProps() {
  const isInject = await new Promise((resolve, reject) => {
    injectScript({
      global: "inject",
      url: "http://localhost:3002/_next/static/ssr/remoteEntry.js",
    })
      .then((res) => {
        resolve(true);
      })
      .catch((err) => {
        reject(false);
      });
  });
  return {
    props: {
      isInject,
    },
  };
}
export default HomePage;
