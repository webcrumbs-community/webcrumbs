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
