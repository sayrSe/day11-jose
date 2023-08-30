import axios from "axios";

const api = axios.create({
    baseURL: "https://64edf4ea1f87218271421348.mockapi.io/api/v1/",
});

export default api;
