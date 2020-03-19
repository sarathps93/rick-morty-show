# Rick & Morty show
This application shows catalogue from the famour Rick & Morty show. This application has been developed using React Server Side Rendering

## Pre -requisites
1. `Node` version > 10 installed
2. A suitable package manager `yarn` or `npm`
3. Any IDE (Eg: Visual Studio Code)
4. A terminal to clone the project from GitHub

## Steps to install
1. Clone the repository from `https://github.com/sarathps93/rick-morty-show`
2. Open the repository in an IDE and do a `yarn` or `npm install`
3. Build the production application build using `yarn build`
4. Start the application using `yarn start`. By default the application starts in port **8080**. You can change it by altering the environment variable named **PORT**
5. For development purposes, you can build the development version of the application and start it using `yarn start:dev`. Make sure to watch the webpack files for easy reloading. I am yet to implement the hot reload functionality

## Salient features

1. React Server Side Rendering application. Express Js application has been used as the server
2. Redux for state managment
3. Redux thunk for async state updates
4. Post css loader and cssnano for css minification

## Important works to complete
In the interest of time, I have skipped few features which I will be implementing soon (Within this week).

1. JavaScript minification and image compression
2. Image lazy loading using Intersection Observer
3. Usage of service workers for offline access
4. Creating docker image of the application
5. Implementation of a loader
6. Other performance and compatibility optimisations
7. Implement a unit test framework using jest and react test library