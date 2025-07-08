# Webflow Tutorial

## Add Webcrumbs Plugin to Webflow

1. Open your website in the Webflow Design Editor
2. Click **Add Elements** on the left menu
3. Choose **Code Embed**
4. Paste this:
   ```html
   <webcrumbs-plugin uri="https://plugins.webcrumbs.dev/demo-component/"></webcrumbs-plugin>
   <script src="https://cdn.webcrumbs.dev/@latest"></script>
   ```
   > _Replace `demo-component` with your plugin name published through [app.webcrumbs.ai](https://app.webcrumbs.ai) or with your own uri if self-hosted._
5. Position the plugin where you want it to appear
6. When you're ready, click **Publish**