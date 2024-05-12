import axios from "axios";

export default axios.create({
    baseURL: process.env.MIX_APP_URL + "/api",
    headers: {
        "Content-type": "application/json",
    },
});
