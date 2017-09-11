# Recommended Project Structure
## Controllers  ~/controllers
Controllers should be responsible for backend application logic. They should
handle:
  * rendering pages
  * making post/get requests
  * pass data to/from db through a repo module

## DB Models ~/models
Models should contain information related to the db. This includes:
* db connections (connection string should be passed as process.env.VARIABLE.
  NO HARD CODED DB VALUES UNLESS IT IS A THROW AWAY DB (testing))
* sequalize models for table structure/columns to be built when app connects to db
* repo files which are called by controllers to send/return paramas to db

### Model Repo ~/models/repo
Contains all queries made to db.

### Model Sequalize ~/models/sequalize
Include db model structure for generating db structure. Sample included

## Client Side Resources ~/public
This folder contains all client side assets. This includes:
* images
* styling
* custom fonts
* scripts
* dependencies (jquery, bootstrap, etc)

We do NOT include html here unless we want a modal to pop up on an event

### Routes ~/routes
These contain all routes which handle GET/POST, as well as do some simple
server-side validation (check if isEmpty(), etc). They can query data from
db, render an asset in the views, etc. These are the start point of user
interaction for a service

### Views ~/views
Views are what get rendered to the client when they make a request for a resource.
The layout is the main structure of the UI. It brings all common elements together.

## View Partials ~/views/partials
Partials contain common elements found accross all pages. It is our base template.
Most commonly, they include:
* footer
* header
* sidebars/navigation bar
* all your client side sources for js files
* all you client side references for css files that are used for all sites

## View Forms ~/views/forms
This will be most important for the project. We include all template forms for
the surveys in this folder. We choose which form to render by matching user
selected input and rendering the respective survey

## View Other ~/views/*
Another good thing to have in the app is a 404 redirect so that if an error
comes up (user selects a survey that doesn't exist), the app renders a nice 404
page explaining the issue in common language instead of throwing error logs
clientside
