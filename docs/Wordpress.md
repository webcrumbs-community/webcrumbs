# Wordpress Tutorial

## Add Webcrumbs Plugin to WordPress

1. Go to your Wordpress website or [https://playground.wordpress.net](https://playground.wordpress.net)
2. Click **Edit Site** on the top-left  
3. Click the **+** button on the top-left
4. Search for **HTML** and select select **Custom HTML**
5. Paste this code inside the new block:
   ```html
   <webcrumbs-plugin uri="https://plugins.webcrumbs.dev/demo-component/"></webcrumbs-plugin>
   <script src="https://cdn.webcrumbs.dev/@latest"></script>
   ```
   > _Replace `demo-component` with your plugin name published through [app.webcrumbs.ai](https://app.webcrumbs.ai) or with your own uri if self-hosted._
6. Position the new block where you want your plugin to appear
7. Click **Save**
8. Click the desktop icon (bottom left) → **View Site**
