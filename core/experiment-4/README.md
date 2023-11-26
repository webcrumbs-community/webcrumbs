# Experiment purpose
Dynamic remote component loaded at runtime with SSR using VM with plugins in React

# Limitations
- Dependencies are in the admin, not in the plugin bundle, so the host must know about the modules that the remote is going to use.
- There's no communication back and forth between the admin and the plugin.
- The plugin is not being hydrated on the client side.
- The plugin must be a React component.
- VM security.

# Installation

To install and start this repository locally, you need to follow these steps:

1. Clone the repository to your local machine.
2. Navigate to this directory of the project in your terminal: `cd webcrumbs/core/experiment-4`
3. Run `yarn reinstall:wc` to install the dependencies for the project and for all the packages.
4. Run `yarn build:wc` to build all the plugins.
5. Run `yarn start` to build and serve all packages in their respective ports.

After following these steps, you should be able to access the following URLs in your browser:

- `localhost:3000` (HOST in EXPRESS)
- `localhost:3001` (REMOTES in EXPRESS and REACT)