import axios from "axios";

const authToken = localStorage.getItem("lb_auth_token") ? JSON.parse(localStorage.getItem("lb_auth_token") as string) : null;

export default axios.create({
    baseURL: "/api",
    headers: {
        "Content-type": "application/json",
        ...(authToken && { 'Authorization': `Bearer ${authToken.access_token}` }),
    },
});
