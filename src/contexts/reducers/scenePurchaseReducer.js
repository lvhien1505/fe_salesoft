import _ from 'lodash';
import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    CHANGE_TOTAL_NUM,
} from 'contexts/action-types/scenePurchase';

const findIndexItem = (arr, key, value) => {
    return _.findIndex(arr, function (o) {
        return o[key] === value;
    });
};

const createProduct = (product) => {
    return {
        _id: product._id,
        code: product.code,
        name: product.name,
        totalNum: 1,
        pricePreSaleOff: product.costPrice,
        priceSaleOff: 0,
        priceAfterSaleOff: product.costPrice,
        totalPrice: product.costPrice,
    };
};

const updateProduct = (type, product, value) => {
    const newProduct = { ...product };
    if (type === 'changeTotalNum') {
        newProduct.totalNum = value;
        newProduct.totalPrice = value * newProduct.priceAfterSaleOff;
    }
    return newProduct;
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

const scenePurchaseReducer = (state, action) => {
    let indexProduct = null;
    switch (action.type) {
        case ADD_PRODUCT:
            addProduct(state.products, action.payload.product);
            return { ...state };
        case REMOVE_PRODUCT:
            indexProduct = findIndexItem(
                state.products,
                '_id',
                action.payload.productID
            );
            state.products.splice(indexProduct, 1);
            return { ...state };
        case CHANGE_TOTAL_NUM:
            indexProduct = findIndexItem(
                state.products,
                '_id',
                action.payload.productID
            );
            state.products[indexProduct] = updateProduct(
                'changeTotalNum',
                state.products[indexProduct],
                action.payload.value
            );

            return { ...state };
        default:
            return { ...state };
    }
};

export default scenePurchaseReducer;
