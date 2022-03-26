import baseApi from './base/baseApi';

let baseRoute = '/invoice';

const getInvoicesWithLimit = async (page, limit) =>  await baseApi.getObjWithLimit(baseRoute, page, limit);
   
const create = async (data) => await baseApi.create(baseRoute, data);


const productApi = {
    getInvoicesWithLimit,
    create,
};

export default productApi;
