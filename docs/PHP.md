# PHP Tutorial

## Add Webcrumbs Plugin to a PHP Page

1. Open your `.php` file in a code editor  
2. Locate the `<body>` tag in your HTML file
3. Paste the following code where you want the plugin to appear:
   ```html
   <webcrumbs-plugin uri="https://plugins.webcrumbs.dev/demo-component/"></webcrumbs-plugin>
   <script src="https://cdn.webcrumbs.dev/@latest"></script>
   ```
   > _Replace `demo-component` with your plugin name published through [app.webcrumbs.ai](https://app.webcrumbs.ai) or with your own uri if self-hosted._
4. Save the file
5. Load the PHP page in your browser to see the plugin working

Note: Works just like in HTML — just make sure you’re editing a `.php` file with standard HTML structure.