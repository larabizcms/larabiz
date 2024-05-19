import axios from "axios";

let headers = {
    "Content-type": "application/json",
};

export default axios.create({
    baseURL: process.env.MIX_APP_URL + "/api",
    headers: {
        "Content-type": "application/json",
    },
});
