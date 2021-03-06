import baseApi from './base/baseApi';

let baseRoute = '/supplier';

const getSuppliersWithLimit = async (page, limit) => {
    const data = await baseApi.getObjWithLimit(baseRoute, page, limit);
    return data;
};

const create = async (data) => await baseApi.create(baseRoute, data);

const update = async (id, data) => await baseApi.update(baseRoute, id, data);

const searchName = async (name) => await baseApi.searchName(baseRoute, name);

const supplierApi = {
    getSuppliersWithLimit,
    create,
    update,
    searchName
};

export default supplierApi;
