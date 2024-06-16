import { apiBaseUrl } from "@larabiz/helpers/helper";
import axios from "axios";

const http = axios.create({
    baseURL: apiBaseUrl,
    // headers: getDefaultHeaders(),
});

http.interceptors.request.use(
    config => {
        // Get the token from cookies
        const authToken = localStorage.getItem("lb_auth_token")
            ? JSON.parse(localStorage.getItem("lb_auth_token") as string)
            : null; // Adjust according to your storage method

        config.headers = config.headers || {};

        if (authToken) {
            // If the token exists, set the Authorization header
            config.headers['Authorization'] = `Bearer ${authToken.access_token}`;
        }

        return config;
    },
    error => {
        // Handle the error
        return Promise.reject(error);
    }
);

export default http;
