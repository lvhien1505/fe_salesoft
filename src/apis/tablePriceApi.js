import baseApi from './base/baseApi';

let baseRoute = '/table-price';

const getAll = async () => await baseApi.getAll(baseRoute);

const create = async (data) => await baseApi.create(baseRoute, data);

const update = async (id, data) => await baseApi.update(baseRoute, id, data);

const pushPrice = async (id, data) => await baseApi.update(`${baseRoute}/push-price`, id, data);

const updatePrice = async (id, data) => await baseApi.update(`${baseRoute}/update-price`, id, data);

const remove = async (id) => await baseApi.remove(baseRoute, id);

const tablePriceApi = {
    getAll,
    create,
    update,
    remove,
    pushPrice,
    updatePrice
};

export default tablePriceApi;
