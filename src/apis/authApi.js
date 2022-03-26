import axiosClient from './base/axiosClient';

let baseRoute = '/auth';

const register = async (data) => {
    const res = await axiosClient.post(`${baseRoute}/register`, data);
    return res.data;
};

const login = async (email, password) => {
    const token = localStorage.getItem('_t');

    let configs = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const data = { email, password };
    const res = await axiosClient.post(`${baseRoute}/login`, data);
    return res.data;
};

const auth = async () => {
    const token = localStorage.getItem('_t');

    let configs = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axiosClient.post(`${baseRoute}`, {}, configs);
    return res.data;
};

const sendConfirmOTP = async (email) => {
    const token = localStorage.getItem('_t');

    let configs = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axiosClient.post(
        `${baseRoute}/send-confirm-otp`,
        {
            email: email,
        },
        configs
    );
    return res.data;
};

const confirmAccount = async (data) => {
    const token = localStorage.getItem('_t');

    let configs = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axiosClient.post(
        `${baseRoute}/confirm-account`,
        data,
        configs
    );
    return res.data;
};

const authApi = {
    register,
    login,
    auth,
    sendConfirmOTP,
    confirmAccount,
};

export default authApi;
