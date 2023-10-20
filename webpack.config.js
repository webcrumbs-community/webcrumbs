const path = require("path");

module.exports = {
  entry: "/src/admin/admin-panel.js", // The entry point of your admin panel code.
  output: {
    filename: "admin-panel.js",
     path: path.resolve(__dirname, 'demo'), // Output to the /demo directory.
  },
};
