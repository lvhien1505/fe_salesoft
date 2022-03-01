import baseApi from './base/baseApi';

let baseRoute = '/customer';

const getCustomersWithLimit = async (page, limit) => {
    const data = await baseApi.getObjWithLimit(baseRoute, page, limit);
    return data;
};

const create = async (data) => {
    const res = await baseApi.create(baseRoute, data);
    return res;
};

const customerApi = {
    getCustomersWithLimit,
    create,
};

export default customerApi;
