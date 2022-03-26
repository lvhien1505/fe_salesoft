import { useReducer, useEffect } from 'react';
import PriceBookContext from 'contexts/createContext/PriceBookContext';
import priceBookReducer from 'contexts/reducers/priceBook';
import {
    getCategories,
    getTablePrices,
    getProducts,
    selectTablePrice
} from 'contexts/action-creators/priceBook';

import tablePriceApi from 'apis/tablePriceApi';
import productApi from 'apis/productApi';
import categoryApi from 'apis/categoryApi';
import openNotification from 'helpers/notification';

const PriceBookState = ({ children }) => {
    const initialState = {
        tablePrices: [],
        categories: [],
        products: [],
        tablePriceSelected: {},
    };

    const [state, dispatch] = useReducer(priceBookReducer, initialState);

    //Table
    const getTablePricesAll = async () => {
        try {
            let fetch = await tablePriceApi.getAll();

            if (fetch.status) {
                dispatch(getTablePrices(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const createTablePrice = async (tablePrice) => {
        try {
            let fetch = await tablePriceApi.create(tablePrice);

            if (fetch.status) {
                getTablePricesAll();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const updateTablePrice = async (id, tablePrice) => {
        try {
            let fetch = await tablePriceApi.update(id, tablePrice);

            if (fetch.status) {
                getTablePricesAll();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onPushPriceToTP = async (id,product) => {
        try {
            let fetch = await tablePriceApi.pushPrice(id, product);

            if (fetch.status) {
                onSelectTablePrice(fetch.data);
                getTablePricesAll();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onUpdatePriceFromTP = async (id,product) => {
        try {
            let fetch = await tablePriceApi.updatePrice(id, product);

            if (fetch.status) {
                onSelectTablePrice(fetch.data);
                getTablePricesAll();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const removeTablePrice = async (id) => {
        try {
            let fetch = await tablePriceApi.remove(id);

            if (fetch.status) {
                getTablePricesAll();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onSelectTablePrice = (tablePrice) => {
        dispatch(selectTablePrice(tablePrice));
    };

    //Product
    const getProductsWithLimit = async () => {
        try {
            let fetch = await productApi.getProductsWithLimit(1, 10);

            if (fetch.status) {
                dispatch(getProducts(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    //Category product
    const getCategoriesProduct = async () => {
        try {
            let fetch = await categoryApi.getAll();

            if (fetch.status) {
                dispatch(getCategories(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    useEffect(() => {
        getTablePricesAll();
        getProductsWithLimit();
        getCategoriesProduct();
    }, []);

    return (
        <PriceBookContext.Provider
            value={{
                categories: state.categories,
                products: state.products,
                tablePrices: state.tablePrices,
                createTablePrice: createTablePrice,
                updateTablePrice: updateTablePrice,
                tablePriceSelected: state.tablePriceSelected,
                selectTablePrice: onSelectTablePrice,
                pushPriceToTP:onPushPriceToTP,
                updatePriceFromTP:onUpdatePriceFromTP
            }}
        >
            {children}
        </PriceBookContext.Provider>
    );
};

export default PriceBookState;
