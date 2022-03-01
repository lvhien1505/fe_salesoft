import baseApi from './base/baseApi';

let baseRoute = '/brand';

const getAll = async () => await baseApi.getAll(baseRoute);

const create = async (data) => await baseApi.create(baseRoute, data);

const update = async (id, data) => await baseApi.update(baseRoute, id, data);

const remove = async (id) => await baseApi.remove(baseRoute, id);

const brandApi = {
    getAll,
    create,
    update,
    remove,
};

export default brandApi;
