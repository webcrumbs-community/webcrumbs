https://github.com/webcrumbs-community/webcrumbs/issues/9

# Issue: API Endpoints #9

Hello good people! If you're interested in helping WebCrumbs communicate seamlessly with WordPress, this task is for you. And don't worry if you're a beginner; you're more than welcome here!

## The Task

1. Research WordPress API: 
Just a quick skim to understand the basics of how WordPress sets up its API endpoints.

2. Draft a Markdown File: 
Summarize your findings and create a list of potential API endpoints that WebCrumbs could implement to align with WordPress. Your list can be simple, no need for any tech jargon.

3. Save it: 
Place your Markdown file in the /research directory in our GitHub repository.

That's it! By doing this, you're contributing valuable information that will help shape WebCrumbs' compatibility with WordPress. We're starting fresh, and every contribution counts.

Ready to take on the task? Here's your portal to the WebCrumbs GitHub repo. Go make history.

## TODOS
### Step 1 -> Read 
https://developer.wordpress.org/rest-api/

### Step 2 -> Write Summary about What I've read
Helpful Terms

Wordpress - Popular and Open Source content management System that help creates websites and website related services i.e. commerce, blog, etc.

API - Application Programming Interface - the bridge between two different applications, allowing them to communicate with one another.

CRUD - Create, Read, Update, Delete functionalities. These are bread and butter to many interactive websites with backends today.

REST - REpresentational State Transfer is popular way to structure and fetch data across APIs.

JSON - JavaScript Object Notation is an open standard format for storing and exchanging data. It has wide use cases for data exchange in frontend, mobile, command line but most notably, web applications with servers. This format is lightweight and easy to read for both humans and machines. It's syntax is derived from JavaScript's object syntax. However, JSON itself can be used in many other programming languages.

The Wordpress API enables developers to build incredible features on top of WordPress. It grants them the power to customize, extend, and interact with WordPress. This API has been used by renown companies like Facebook, Twitter and Google!

Wordpress API comes in two flavors, REST API and the XML-RPC API. The XML-RPC API is older and has limited functionality but is used for remote controlling Wordpress websites. The REST API is the modern and suggested one to use.

REST API allows you to use CRUD functionalities from the provider's server. It uses 5 types of http requests or routes: GET, POST, PUT, PATCH and DELETE for respective CRUD operations. With these requests there are unlimited ways to manipulate data from Wordpress. 

Requests can to sent to the REST endpoints for content and the API will respond back with data in JSON format.

Extensibility is allowed for the Wordpress API. 

### Step 3 -> List potential API endpoints that WebCrumbs could implement to align with WordPress. (Simple)

Let's Explore some potential WordPress API endpoints that WebCrumbs can leverage.

URI http://example.com/wp-json

Example http://example.com/wp-json/<endpoint>

## Endpoints 

Full list of Endpoints -> https://developer.wordpress.org/rest-api/reference/#rest-api-developer-endpoint-reference

### GET /wp-json (root endpoint)
-> returns in JSON what routes are availble and their available endpoints.

### Application Password
Retrieve a Application Password
GET /wp/v2/users/<user_id>)/application-passwords

Create a Application Password
POST /wp/v2/users/<user_id>)/application-passwords

Delete a Application Password
DELETE /wp/v2/users/<user_id>)/application-passwords

Retrieve a Specific Application Password
GET /wp/v2/users/<user_id>)/application-passwords/introspect

Retrieve a Specific Application Password with UUID
GET /wp/v2/users/<user_id>)/application-passwords/<uuid>

Update a Application Password
POST /wp/v2/users/<user_id>)/application-passwords/<uuid>

Delete a Application Password
DELETE /wp/v2/users/<user_id>)/application-passwords/<uuid>

### Posts
List Posts
GET /wp/v2/posts

Create a Post
POST /wp/v2/posts

Retrieve a Post
GET /wp/v2/posts/<id>

Update a Post
POST /wp/v2/posts/<id>

Delete a Post
DELETE /wp/v2/posts/<id>

### Media
List Media
GET /wp/v2/media

Create a Media Item
POST /wp/v2/media

Retrieve a Media Item
GET /wp/v2/media/<id>

Update a Media Item
POST /wp/v2/media/<id>

Delete a Media Item
DELETE /wp/v2/media/<id>

### Navigations
List Navigations
GET /wp/v2/navigation

Create a Navigation
POST /wp/v2/navigation

Retrieve a Navigation
GET /wp/v2/navigation/<id>

Update a Navigation
POST /wp/v2/navigation/<id>

Delete a Navigation
DELETE /wp/v2/navigation/<id>

### Pages
List Pages
GET /wp/v2/pages

Create a Page
POST /wp/v2/pages

Retrieve a Page
GET /wp/v2/pages/<id>

Update a Page
POST /wp/v2/pages/<id>

Delete a Page
DELETE /wp/v2/pages/<id>

### Search Results
List Search Results
GET /wp/v2/search

### Plugin
Retrieve Plugins
GET /wp/v2/plugins

Create a Plugin
POST /wp/v2/plugins

Retrieve a Plugin
GET /wp/v2/plugins/<plugin>?)

Update a Plugin
POST /wp/v2/plugins/<plugin>?)

Delete a Plugin
DELETE /wp/v2/plugins/<plugin>?)

### Site Settings
Retrieve a Site Setting
GET /wp/v2/settings

Update a Site Setting
POST /wp/v2/settings


