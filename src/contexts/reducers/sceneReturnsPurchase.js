import _ from 'lodash';
import {
    ADD_INVOICE,
    CHANGE_TOTAL_NUM_RETURNS,
    CHANGE_FEE,
    CHANGE_TOTAL_PAID,
} from 'contexts/action-types/sceneReturnsPurchase';

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

const sceneReturnsPurchaseReducer = (state, action) => {
    let indexProduct = null;
    switch (action.type) {
        case ADD_INVOICE:
            state.products = makeProducts(action.payload.invoice.products);
            state.totalValueInvoice = action.payload.invoice.totalPayment;
            state.code = action.payload.invoice.code;
            return { ...state };
        case CHANGE_TOTAL_NUM_RETURNS:
            indexProduct = findIndexItem(
                state.products,
                '_id',
                action.payload.productID
            );
            state.products[indexProduct] = updateProduct(
                'changeTotalNumReturns',
                state.products[indexProduct],
                action.payload.value
            );
            return { ...state };
        case CHANGE_FEE:
            state.fee = action.payload.value;
            return { ...state };
        case CHANGE_TOTAL_PAID:
            state.totalPaid = action.payload.value;
            return { ...state };
        default:
            return state;
    }
};

export default sceneReturnsPurchaseReducer;
