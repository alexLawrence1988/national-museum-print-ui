# national-museum-prints-ui

  

This project is a React (typescript) SPA application, which queries the pairing GraphQL API (<a  href="https://github.com/alexLawrence1988/national-museum-print-api">HERE</a>)

It had been deployed with CICD pipeline prvided by Buddy.works and can be accessed here: https://d3qik2ik0hdjuu.cloudfront.net/

The architecture in which this is hosted is:

![alt text](https://i.ibb.co/zsGcp0v/heni-drawio.png)

A preview of the app:

![alt text](https://i.ibb.co/ccvKQpK/reactApp.png)


# Getting Started with Create React App

  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  

## Running and building

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  

The page will reload when you make changes.\

You may also see any lint errors in the console.

  

### `npm test`

  

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run bundle`

  

This compiles the TS and TSX files out builds then into the dist/ folder. To test the build, simple add an index.html file and import the bundle.js file.

    <!DOCTYPE  html>

    <html>    
	    <head>    
		    <meta  charset="utf-8">    
		    <title>Getting Started with Typescript and ReactJS</title>    
	    </head>    
	    <body>    
		    <!-- this is where react renders into -->    
		    <div  id="root"></div>    
		    <script  src="./bundle.js"></script>    
	    </body>    
    </html>

  

### `npm run eject`

  

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

  

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

  

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).

  

### Code Splitting

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  

### Analyzing the Bundle Size

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  

### Making a Progressive Web App

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  

### Advanced Configuration

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  

### Deployment

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  

### `npm run build` fails to minify

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)