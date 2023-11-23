# Experiment purpose
Dynamic remote component loaded at runtime with SSR using VM

# Limitations
- Host and remotes in plain javascript, not React/NextJS

# Installation
To install and start this repository locally, you need to follow these steps:

1. Clone the repository to your local machine.
2. Navigate to this directory of the project in your terminal: `cd webcrumbs/core/experiment-3`
3. Run `yarn reinstall:wc` to install the dependencies for the project and for all the packages.
4. Run `yarn start` to build and serve all packages in their respective ports.

After following these steps, you should be able to access the following URLs in your browser:

- `localhost:3000` (HOST in EXPRESS)
- `localhost:3001` (REMOTE)
- `localhost:3002` (REMOTE)