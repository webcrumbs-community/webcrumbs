# Shopify Tutorial

## Add Webcrumbs Plugin to Shopify

1. Open your shop in Shopify
2. Click to **Personalize theme**
3. Click **Add section**
4. Choose **Personalized Liquid**
5. Paste this inside the Liquid Code textarea:
   ```html
   <webcrumbs-plugin uri="https://plugins.webcrumbs.dev/demo-component/"></webcrumbs-plugin>
   <script src="https://cdn.webcrumbs.dev/@latest"></script>
   ```
   > _Replace `demo-component` with your plugin name published through [app.webcrumbs.ai](https://app.webcrumbs.ai) or with your own uri if self-hosted._
9. Position the plugin where you want it to appear
10. Preview in multiple devices
11. Click **Save**