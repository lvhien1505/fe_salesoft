import baseApi from './base/baseApi';

let baseRoute = '/customer';

const getCustomersWithLimit = async (page, limit) => {
    const data = await baseApi.getObjWithLimit(baseRoute, page, limit);
    return data;
};

const create = async (data) => await baseApi.create(baseRoute, data);

const update = async (id, data) => await baseApi.update(baseRoute,id, data);

const searchName = async (name) => await baseApi.searchName(baseRoute, name);

const customerApi = {
    getCustomersWithLimit,
    create,
    update,
    searchName
};

export default customerApi;
