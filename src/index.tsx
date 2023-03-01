import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify, Auth} from 'aws-amplify';
import { components } from '@aws-amplify/ui-react';
export * from "./components/Carousel/Carousel";


Amplify.configure({

  Auth: {

    region: "us-east-1",
    userPoolId: "us-east-1_mL1YKcxdy",
    userPoolWebClientId: "6sugcqugdlovf5vf7s3j9ggr68",
    mandatorySignIn: false
  }

});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
