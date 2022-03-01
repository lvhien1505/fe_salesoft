import axiosClient from './base/axiosClient';

let baseRoute = '/auth';
const register = () => {};

const login = async (email, password) => {
    const data = { email, password };
    const res = await axiosClient.post(`${baseRoute}/login`, data);
    return res.data;
};

const auth = async () => {
    const token = localStorage.getItem('_t');
   
    let configs = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    };
    const res = await axiosClient.post(`${baseRoute}`, {}, configs);
    return res.data;
};

const authApi = {
    register,
    login,
    auth
};

export default authApi;
