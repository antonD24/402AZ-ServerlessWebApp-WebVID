import axios from "axios";



export default axios.create({
    baseURL: "https://9o0nimges3.execute-api.us-east-1.amazonaws.com",
    headers: {
        "Content-Type": "application/json"
    }
});

//Axios is used to communicate with the our backend and establishes a connection to the API Gateway, it makes reuests for data from the HTTP API, passes
//passes data from the React app and alos receives data to be used inside the application.