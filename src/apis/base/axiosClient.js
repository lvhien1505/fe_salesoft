import axios from 'axios';

let url = process.env.REACT_APP_URL_BACKEND;

const axiosClient = axios.create({
    baseURL: url,
    headers: {
        'content-type': 'application/json',
    }
})

export default axiosClient;