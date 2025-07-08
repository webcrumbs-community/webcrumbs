# Squarespace Tutorial

## Add Webcrumbs Plugin to Squarespace

1. Open your website in Squarespace
2. In the Website Config, search for **Inject Code**
3. Add this code to the footer:
   ```html
   <script src="https://cdn.webcrumbs.dev/@latest"></script>
   ```
4. Go back and open the page where you want to include your plugin
5. Click **Edit** on the top-left
6. Select a section and click **Add Block** on the top-left
7. Select **Code**
8. Click the pencil icon and paste this code:
   ```html
   <webcrumbs-plugin uri="https://plugins.webcrumbs.dev/demo-component/"></webcrumbs-plugin>
   ```
9. Position the plugin where you want it to appear
10. Click **Preview**
11. When you're ready, click **Publish**