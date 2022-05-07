import { useReducer,useEffect } from 'react';
import ScenePurchaseContext from 'contexts/createContext/ScenePurchaseContext';
import scenePurchaseReducer from 'contexts/reducers/scenePurchase';
import {
    addProduct,
    changeTotalNum,
    removeProduct,
    changeValueSaleOffProduct,
    changeValueSaleOff,
    changeValuePayment,
    getProducts
} from 'contexts/action-creators/scenePurchase';

import productApi from 'apis/productApi';
import openNotification from 'helpers/notification';

const ScenePurchaseState = ({ children }) => {
    const initialState = {
        products: [],
        productsSelected:[],
        valueSaleOff: 0,
        totalPaid: 0,
    };

    const [state, dispatch] = useReducer(scenePurchaseReducer, initialState);

    //Product
    const getProductsWithLimit = async () => {
        try {
            let fetch = await productApi.getProductsWithLimit(1, 50);

            if (fetch.status) {
                dispatch(getProducts(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onHandleAddProduct = (product) => {
        dispatch(addProduct(product));
    };

    const onHandleRemoveProduct = (productID) => {
        dispatch(removeProduct(productID));
    };

    const onHandleChangeTotalNum = (productID, value) => {
        dispatch(changeTotalNum(productID, value));
    };

    const onHandleChangeValueSaleOffProduct = (productID,value) => {
        dispatch(changeValueSaleOffProduct(productID,value));
    };

    const onHandleChangeValueSaleOff = (value) => {
        dispatch(changeValueSaleOff(value));
    };

    const onHandleChangeValuePayment = (value) => {
        dispatch(changeValuePayment(value));
    };

    useEffect(() => {
        getProductsWithLimit();
    }, []);

    return (
        <ScenePurchaseContext.Provider
            value={{
                products: state.products,
                productsSelected:state.productsSelected,
                valueSaleOff: state.valueSaleOff,
                totalPaid: state.totalPaid,
                addProduct: onHandleAddProduct,
                removeProduct: onHandleRemoveProduct,
                changeTotalNum: onHandleChangeTotalNum,
                changeValueSaleOffProduct:onHandleChangeValueSaleOffProduct,
                changeValueSaleOff:onHandleChangeValueSaleOff,
                changeValuePayment:onHandleChangeValuePayment
            }}
        >
            {children}
        </ScenePurchaseContext.Provider>
    );
};

export default ScenePurchaseState;
