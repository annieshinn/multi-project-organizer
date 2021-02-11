# multi-project-organizer
Solo Project -- a multi-project-organizer to keep track of where you left off on various projects.

## TO DO LIST:
- [X] Create repository on github, and clone down to my machine
- [X] Run `npm init -y` to create a package.json. [Docs](https://docs.npmjs.com/cli/v6/commands/npm-init)
- [X] Install/add other dependencies (affects package.json)
  - [X] [express](https://www.npmjs.com/package/express)
  - [X] [mongoose](https://www.npmjs.com/package/mongoose)
  - [X] [nodemon](https://www.npmjs.com/package/nodemon)
  - [X] [react](https://www.npmjs.com/package/react)
  - [X] [react-dom](https://www.npmjs.com/package/react-dom)
  - [X] [webpack and webpack-cli](https://webpack.js.org/guides/getting-started/)
  - [X] [react-redux and redux](https://www.npmjs.com/package/react-redux)
- [X] Create basic folders and files
  - [X] Client folder
    - [X] index.js, components folder -> App.js
      - this is where i need to use react & redux!
    - [X] css would go here
  - [X] Server folder
    - [X] server.js
      - this is where i need to use express!
--- commit 1 ---
- [X] Hand draw front-end React Components and back-end

---- MF FINALLY GOT WEBPACK-DEV-SERVER TO WORK BEFORE DINNER!!!! ----

- [X] [Webpack](https://webpack.js.org/concepts/).. stuff
  - [X] Follow along unit instructions to get basic properties on module.exports
  - [X] Finalize compatiblity with css, react, 
  - [X] use nodemon and webpack-dev-server

## FRONTEND: REACT/REDUX 
- [X] Get something to show on localhost:3000
- [X] Connect React/Redux components in client folder
  - [X] createStore -> connect redux extension
  - [X] Create reducers: combiner, projects, and task
  - [X] Create container
  - [X] Create components: Project, Task
  - [X] Connect components
- [X] Setup a basic CSS file

## BACKEND/SERVER:
  - [X] Get localhost:3000 connected
  - [X] Get mongoDB connected
  - [X] Set up file structure for server side (controllers, models, routes)
  - Using postman.. (mimic the assessment...?) -- for PROJECTS
    - [X] C create new project
    - [X] R read project (in return body)
    - [X] U edit a project
    - [X] D delete a project
  - [X] Now repeat for TASKS :D

## CONNECT FRONTEND BACKEND:
- [X] Try to get the database info to transfer to react state
  - was a struggle but I DID IT!!
  - use "proxy" for webpack-dev-server to work
  - used a fetch request in "container"

## FRONTEND PT 2:
- [X] Complete components
- [X] Pass down data as props

## BACKEND PT 2:
- [X] Add "task" functionality
- [X] Connect and test -- see it on the webpage

## FRONTEND PT 3:
- [X] CSS styling -- make distinct project/task components
    ... tried and failed to use sass/.scss files
- [X] Make buttons!

--- commiting here to end day2 02/10 ---

## FRONTEND: BUCKLE DOWN
- [X] Narrow down buttons for now... focus on "Add Project"
- [X] Create modal for "add project"
- [X] Get "Add Project" button to open modal! (+closing buttons)

## CONNECT FRONTEND BACKEND:
- [X] From modal, get submit button to work! -> send data to DB