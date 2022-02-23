import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://aleablog.herokuapp.com/api/"
});