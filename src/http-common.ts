import axios from "axios";



export default axios.create({
    baseURL: "https://9o0nimges3.execute-api.us-east-1.amazonaws.com",
    headers: {
        "Content-Type": "application/json"
    }
});