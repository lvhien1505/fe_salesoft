import _ from 'lodash';
import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    CHANGE_ACTIVE_KEY,
    ADD_TAB,
    REMOVE_TAB,
    CHANGE_TOTAL_NUM,
    CHANGE_VALUE_SALEOFF_PRODUCT,
    CHANGE_VALUE_SALEOFF,
    CHANGE_VALUE_PAYMENT,
    GET_PRODUCTS,
    RESET_TAB,
} from 'contexts/action-types/sale';

const findIndexItem = (arr, key, value) => {
    return _.findIndex(arr, function (o) {
        return o[key] === value;
    });
};

const createProduct = (product) => {
    return {
        _id: product._id,
        name: product.name,
        pricePreSaleOff: product.price,
        priceSaleOff: 0,
        priceAfterSaleOff: product.price,
        totalNum: 1,
        totalPrice: product.price,
    };
};

const updateProduct = (type, product, value) => {
    const newProduct = { ...product };
    if (type === 'changeTotalNum') {
        newProduct.totalNum = value;
        newProduct.totalPrice = value * newProduct.priceAfterSaleOff;
    }

    if (type === 'changeValueSaleOff') {
        newProduct.priceSaleOff = value;
        newProduct.priceAfterSaleOff =
            newProduct.pricePreSaleOff - newProduct.priceSaleOff;
        newProduct.totalPrice =
            newProduct.totalNum * newProduct.priceAfterSaleOff;
    }

    return newProduct;
};

const createNewTab = (key, product) => {
    const newProduct = createProduct(product);
    return {
        key: key,
        products: [newProduct],
        valueSaleOff: 0,
        totalPaid: 0,
    };
};

const addProduct = (listProduct, product) => {
    // Find product is exist
    const productIndex = findIndexItem(listProduct, '_id', product._id);

    if (listProduct.length === 0 || productIndex < 0) {
        const newProduct = createProduct(product);
        listProduct.push(newProduct);
    } else {
        if (productIndex >= 0) {
            let newTotal = listProduct[productIndex].totalNum + 1;

            listProduct[productIndex] = updateProduct(
                'changeTotalNum',
                listProduct[productIndex],
                newTotal
            );
        }
    }
};

const saleReducer = (state, action) => {
    let currentKey = state.activeKey;
    let tabs = state.tabs;
    let tabIndex = findIndexItem(tabs, 'key', currentKey);
    let product = {};

    switch (action.type) {
        case GET_PRODUCTS:
            state.products = action.payload.products;
            return { ...state };
        case CHANGE_ACTIVE_KEY:
            state.activeKey = action.payload.activeKey;
            return { ...state };
        case ADD_TAB:
            state.tabs.push(action.payload.tab);
            state.activeKey = action.payload.newActiveKey;

            return { ...state };

        case REMOVE_TAB:
            state.tabs = state.tabs.filter(
                (tab) => tab.key !== action.payload.key
            );
            state.activeKey = action.payload.newActiveKey;
            return { ...state };

        case ADD_PRODUCT:
            if (tabIndex >= 0) {
                addProduct(tabs[tabIndex].products, action.payload.product);
            } else {
                const newTab = createNewTab(currentKey, action.payload.product);
                tabs.push(newTab);
            }

            state.tabs = tabs;
            state.isChange = !state.isChange;

            return { ...state };
        case REMOVE_PRODUCT:
            tabs[tabIndex].products.splice(action.payload.productIndex, 1);
            state.isChange = !state.isChange;

            return { ...state };

        case CHANGE_TOTAL_NUM:
            product = tabs[tabIndex].products[action.payload.productIndex];
            tabs[tabIndex].products[action.payload.productIndex] =
                updateProduct('changeTotalNum', product, action.payload.value);
            state.isChange = !state.isChange;

            return { ...state };

        case CHANGE_VALUE_SALEOFF_PRODUCT:
            product = tabs[tabIndex].products[action.payload.productIndex];
            tabs[tabIndex].products[action.payload.productIndex] =
                updateProduct(
                    'changeValueSaleOff',
                    product,
                    action.payload.value
                );
            
            return { ...state };
        case CHANGE_VALUE_SALEOFF:
            tabs[tabIndex].valueSaleOff = action.payload.value;
            return { ...state };
        case CHANGE_VALUE_PAYMENT:
            tabs[tabIndex].totalPaid = action.payload.value;
            return { ...state };
        case RESET_TAB:
            state.tabs = [
                {
                    key: currentKey,
                    products: [],
                    valueSaleOff: 0,
                    totalPaid: 0,
                },
            ];
            return { ...state };
        default:
            return state;
    }
};

export default saleReducer;
