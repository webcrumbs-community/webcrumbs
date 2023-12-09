# Experiment purpose
[x] Dynamic remote component

[x] Loaded at runtime 

[x] With SSR using VM and Babel

[x] Hydrated on the client using Webpack

# Next steps
- Experiment with dependencies so that the host do not need to know about the plugin.
- Experiment with communication back and forth between the admin and the plugin.
- Experiment with plugins in other JavaScript frameworks.
- Improve VM security.

# Installation

To install and start this repository locally, you need to follow these steps:

1. Clone the repository to your local machine.
2. Navigate to this directory of the project in your terminal: `cd webcrumbs/core/experiment-5`
3. Run `yarn reinstall:wc` to install the dependencies for the project and for all the packages.
4. Run `yarn build:wc` to build all the plugins.
5. Run `yarn start` to build and serve all packages in their respective ports.

After following these steps, you should be able to access the following URLs in your browser:

- `localhost:3000` (HOST in EXPRESS)
- `localhost:3001` (REMOTES in EXPRESS and REACT)