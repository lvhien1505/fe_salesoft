import _ from 'lodash';
import {
    ADD_INVOICE,
    CHANGE_ACTIVE_KEY,
    ADD_TAB,
    REMOVE_TAB,
    CHANGE_TOTAL_NUM_RETURNS,
    CHANGE_FEE,
    CHANGE_TOTAL_PAID,
} from 'contexts/action-types/sceneReturns';

const findIndexItem = (arr, key, value) => {
    return _.findIndex(arr, function (o) {
        return o[key] === value;
    });
};

const makeProducts = (products) => {
    return products.map((product) => ({
        _id: product._id,
        code: product.code,
        name: product.name,
        unit: product.unit,
        pricePreSaleOff: product.pricePreSaleOff,
        priceSaleOff: product.priceSaleOff,
        priceAfterSaleOff: product.priceAfterSaleOff,
        totalNum: product.totalNum,
        totalNumReturns: 0,
        priceReturns: product.priceAfterSaleOff,
        totalPrice: 0,
    }));
};

const updateProduct = (type, product, value) => {
    const newProduct = { ...product };
    if (type === 'changeTotalNumReturns') {
        newProduct.totalNumReturns = value;
        newProduct.totalPrice = value * newProduct.priceReturns;
    }
    return newProduct;
};

const sceneReducer = (state, action) => {
    let currentKey = state.activeKey;
    let tabs = state.tabs;
    let tabIndex = findIndexItem(tabs, 'key', currentKey);

    switch (action.type) {
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

        case ADD_INVOICE:
            tabs[tabIndex].products = makeProducts(
                action.payload.invoice.products
            );
            tabs[tabIndex].code = action.payload.invoice.code;
            tabs[tabIndex].totalValueInvoice =
                action.payload.invoice.totalPayment;
            return { ...state };
        case CHANGE_TOTAL_NUM_RETURNS:
            let indexProduct = findIndexItem(
                tabs[tabIndex].products,
                '_id',
                action.payload.productID
            );

            tabs[tabIndex].products[indexProduct] = updateProduct(
                'changeTotalNumReturns',
                tabs[tabIndex].products[indexProduct],
                action.payload.value
            );
            return { ...state };

        case CHANGE_FEE:
            tabs[tabIndex].fee = action.payload.value;
            return { ...state };
        case CHANGE_TOTAL_PAID:
            tabs[tabIndex].totalPaid = action.payload.value;
            return { ...state };
        default:
            return state;
    }
};

export default sceneReducer;
