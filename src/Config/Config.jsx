import axios from "axios";
const API = axios.create({
    baseURL:"https://localhost:7289/api/"
});
export default API;