# Webcrumbs Database

This application is configured to utilize MongoDB as the default database system. In this article, we will elucidate the proposed schema for the Content Management System (CMS) and the Plugin Registry.

## Database Schema

The proposed schema resides in the `./schema` folder and comprises JSON objects for mapping the MongoDB schema.

We maintain the following document collections:

- Users (`./schema/users.json`)
- Sites (`./schema/sites.json`)
- Posts (`./schema/posts.json`)
- Plugins (`./schema/plugins.json`)
- Options (`./schema/options.json`)

### Users Collection

The Users Collection is the central repository of documents within our database. It contains registered users and encompasses fundamental user attributes such as `login details`, `role`, and associated `site IDs`.

Several considerations regarding users and their authentications are worth noting:

- Presently, we contemplate username/password authentication, but this is not an exclusive constraint. We are prepared to accommodate other authentication methods as needed. Accordingly, we may need to modify the user document structure or establish a distinct collection to manage these authentications.

- To streamline post-login operations, we associate users with specific sites. This facilitates a more efficient way of determining which sites to load within the portal and how to manage their content.

- For security reasons, passwords are stored in a hashed form with salt. This approach ensures a unidirectional process, mitigating security risks associated with storing passwords in plain text.

### Sites Collection

The Sites Collection comprises a catalog of sites created by or for the currently authenticated user. It includes essential information, such as `url`, `status`, `name`, `plugins`, and `themes`.

Key features of the Sites Collection include:

- A site may incorporate multiple plugins, each having its own `status` denoting whether it is `active` or `deactivated`.

- While a site can support various themes, only one theme can be active at any given time. The active theme dictates the visual styling when the site is loaded.

### Posts Collection

The Posts Collection offers comprehensive documentation for each individual post. It includes all the essential information required from the site to which it is linked, encompassing post metadata like title, name, type, and status.

Additionally, posts contain pertinent information about their authors (linked to user IDs). The Posts Collection also houses collections for post comments, tags, and meta-information, including key/value pairs used for SEO and other purposes.

### Plugins Collection

The Plugins Collection operates as a stand-alone repository that encompasses all available plugins. These plugins can be either published, provided by the community, or furnished by the Webcrumbs team. Users have the freedom to install and activate plugins of their choice on any site.

Each plugin document features metadata, including name, author, descriptions, version, category, and filepath/URL. Furthermore, plugins maintain supplementary collections for `tags`, `ratings`, and `comments` to regulate the plugin ecosystem and offer recommendations based on user feedback.

### Options Collection

The Options Collection is a straightforward key-value pair storage system designed to house various settings, such as the default path for user setup and other information required or utilized by plugins. This collection bears a direct resemblance to WordPress' `wp_options` tables.

## Database Recommendations

Based on the proposed database schema, we recommend the adoption of two distinct databases:

1. **CMS Database**: This database will encompass collections related to the CMS, including `users`, `sites`, `posts`, and `options`.

2. **Registry Database**: The second database is designated as the Registry Database, initially housing the `plugins` collection.

The rationale behind maintaining two databases is as follows:

- CMS-related collections or tables are intended to be hosted locally by users in their respective environments, granting them control and flexibility over these components.

- The Registry Database, on the other hand, functions as a centralized plugin repository. It allows individuals to submit, host, and make their plugins accessible to the broader community, promoting a centralized management approach.
