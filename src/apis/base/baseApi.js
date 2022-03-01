import axiosClient from './axiosClient';
const token = localStorage.getItem('_t');

let configs = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

const getAll = async (url) => {
    const res = await axiosClient.post(`${url}/`, {}, configs);
    return res.data;
};

const getObjWithLimit = async (url, page, limit) => {
    let skip = (page - 1) * limit;
    const data = {
        skip: skip,
        limit: limit,
    };
    const res = await axiosClient.post(`${url}/`, data, configs);
    return res.data;
};

const create = async (url, data) => {
    const res = await axiosClient.post(`${url}/create`, data, configs);
    return res.data;
};

const update = async (url, id, data) => {
    const res = await axiosClient.put(
        `${url}/`,
        {
            _id: id,
            ...data,
        },
        configs
    );
    return res.data;
};

const remove = async (url, id) => {
    configs.data = {
        _id: id,
    };
    const res = await axiosClient.delete(`${url}/`, configs);
    return res.data;
};

const baseApi = {
    getAll,
    getObjWithLimit,
    create,
    update,
    remove,
};

export default baseApi;
