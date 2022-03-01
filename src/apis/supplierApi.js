import baseApi from './base/baseApi';

let baseRoute = '/supplier';

const getSuppliersWithLimit = async (page, limit) => {
    const data = await baseApi.getObjWithLimit(baseRoute, page, limit);
    return data;
};

const create = async (data) => {
    const res = await baseApi.create(baseRoute, data);
    return res;
};

const supplierApi = {
    getSuppliersWithLimit,
    create,
};

export default supplierApi;
