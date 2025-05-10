import axios from "axios";


const API = axios.create({
    baseURL: import.meta.env.VITE_ORIGIN_BACKEND,
    headers: {
        "X-Custom-Header": "foobar", masv: import.meta.env.VITE_MA_SINH_VIEN,
    },
});

API.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default API