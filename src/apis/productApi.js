import axiosClient from './base/axiosClient';
import baseApi from './base/baseApi';

let baseRoute = '/product';

const getProductsWithLimit = async (page, limit) => {
    const data = await baseApi.getObjWithLimit(baseRoute, page, limit);
    return data;
};

const create = async (data) => {
    const token = localStorage.getItem('_t');

    let configs = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'multipart/form-data',
        },
    };
    let bodyFormData = new FormData();
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];

            if (key === 'photos') {
                const arrayKey = `${key}[]`;

                if(Array.isArray(element)){
                    element.forEach((e) => {
                        bodyFormData.append(arrayKey, e);
                    });
                }
               
            } else {
                if (typeof element === 'object') {
                    const e = JSON.stringify(element);
                    bodyFormData.append(key, e);
                } else {
                    bodyFormData.append(key, element);
                }
            }
        }
    }

    const res = await axiosClient.post(
        `${baseRoute}/create`,
        bodyFormData,
        configs
    );
    return res.data;
};

const update = async (id, data) => await baseApi.update(baseRoute, id, data);

const productApi = {
    getProductsWithLimit,
    create,
    update
};

export default productApi;
