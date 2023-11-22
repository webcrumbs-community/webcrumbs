**WebCrumbs will be a worldwide framework for micro frontends**

## Books on Micro Frontends

- The Art of Micro Frontends: Build websites using compositional UIs that grow naturally as your application scales ([Amazon](https://a.co/d/8VL2h1b))
- Micro Frontends in Action ([Amazon](https://a.co/d/dFPzm0p))
- Building Micro-Frontends: Scaling Teams and Projects, Empowering Developers ([Amazon](https://a.co/d/302ulFH))
- Practical Module Federation ([ebook](https://module-federation.myshopify.com/a/downloads/-/2def891e764b6690/1b6a9f65378feb85))

## Courses on Micro Frontends

- Microfrontends with React: A Complete Developer's Guide ([Udemy](https://www.udemy.com/course/microfrontend-course/) - ask me for a discount code)

## Documentation

- Webpack 5.0 documentation ([here](https://webpack.js.org/blog/2020-10-10-webpack-5-release/))

## Repositories 
- Module Federation ([examples](https://github.com/module-federation/module-federation-examples))

If you have old examples of module federation with lerna, you can use the following steps to update them to the latest version:
1. Create a packages directory in the root of your project and move all your plugins into this directory.
2. Exclude the workspace key from your package.json file and add a private key with a value of true.
3. Exclude the useWorkspaces key from your lerna.js file.
4. Add a workspaces key to your package.json file and set it to ["packages/*"].

- https://github.com/efoxTeam/emp

## Articles 
https://martinfowler.com/articles/micro-frontends.html
https://itnext.io/setup-a-micro-frontend-architecture-with-vue-and-single-spa-2c89528bf72f
https://blog.bitsrc.io/how-we-build-micro-front-ends-d3eeeac0acfc
https://dev.to/marais/webpack-5-and-module-federation-4j1i
https://github.com/escalon/microfrontends/blob/e3bfc39e12e4fce7376036ca56ac4393e93896f6/README.asciidoc#server-side-rendering
https://github.com/Ensono/amido.github.io/blob/c98872b700212d1db02b055d10563d75b9f6ffd2/asciidoc/workloads/azure/frontend/nextjs_plugin.adoc#L15
