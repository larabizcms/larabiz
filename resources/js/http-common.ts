import axios from "axios";

function getDefaultHeaders() {
    const authToken = localStorage.getItem("lb_auth_token")
        ? JSON.parse(localStorage.getItem("lb_auth_token") as string)
        : null;

    return {
        "Content-type": "application/json",
        ...(authToken && { 'Authorization': `Bearer ${authToken.access_token}` }),
    };
}

const http = axios.create({
    baseURL: (import.meta.env.VITE_APP_URL || '') + "/api",
    headers: getDefaultHeaders(),
});

export default http;
