import axiosClient from './base/axiosClient';

let url = 'https://provinces.open-api.vn/api/d/search';

const search =async (query)=>{
    const res =await axiosClient.get(`${url}/?q=${query}`)
    return res
}

const addressApi = {
    search
}

export default addressApi;