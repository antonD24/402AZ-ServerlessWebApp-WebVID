# Project Description

Create a web application for finding TV Shows, Read information and Descriptions,Reading Comments.
Admins should be able to add new shows in a separate window, along with pictures and embed trailers for each seasson.

This was a university project in my first year as part of our second software dev and web development module of the year (Serverless Web Applications).

In this module we have studied the modern approach of serverless applications and REST APIs, as well as NoSQL Document Databases.

The front-end was developed as a dynamic web app using React with TypeScript and CSS libraries.

The database connection was achieved using a REST API created in AWS API Gateway.

The CRUD operations between the API and the DynamoDB database were done through AWS Lambda Functions.

Assets such as images are stored in S3 buckets.

For sign-in and registering the whole website is secured behind AWS Cognito which provides account management, e-mail registration verfication, etc.

Login UI for Cognito was used from the Amplify library.

API Gateway, Lambda Functions and DynamoDB being the serverless components of the app infrastructure.

DISCLAIMER: Security was not the focus of the module, further immplementations could have been done, such as credential rotation.

## Additional Info

In addition to the developed appication, prototypes were developed in Figma, UML & Workflow diagrams as well as Personas for the Acceptance Criteria.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
