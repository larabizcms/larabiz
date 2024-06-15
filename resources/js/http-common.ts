import { apiBaseUrl } from "@larabiz/helpers/helper";
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

const http = (headers = []): { [key: string]: any } => axios.create({
    baseURL: apiBaseUrl,
    headers: {...getDefaultHeaders(), ...headers},
});

export default http;
