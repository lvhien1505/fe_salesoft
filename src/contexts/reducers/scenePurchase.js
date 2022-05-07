import _ from 'lodash';
import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    CHANGE_TOTAL_NUM,
    CHANGE_VALUE_SALEOFF_PRODUCT,
    CHANGE_VALUE_SALEOFF,
    CHANGE_VALUE_PAYMENT,
    GET_PRODUCTS,
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
    if (type === 'changeValueSaleOff') {
        newProduct.priceSaleOff = value;
        newProduct.priceAfterSaleOff = newProduct.pricePreSaleOff - value;
        newProduct.totalPrice =
            newProduct.totalNum * newProduct.priceAfterSaleOff;
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
        case GET_PRODUCTS:
            state.products = action.payload.products;
            return { ...state };
        case ADD_PRODUCT:
            addProduct(state.productsSelected, action.payload.product);
            return { ...state };
        case REMOVE_PRODUCT:
            indexProduct = findIndexItem(
                state.productsSelected,
                '_id',
                action.payload.productID
            );
            state.productsSelected.splice(indexProduct, 1);
            return { ...state };
        case CHANGE_TOTAL_NUM:
            indexProduct = findIndexItem(
                state.productsSelected,
                '_id',
                action.payload.productID
            );
            state.productsSelected[indexProduct] = updateProduct(
                'changeTotalNum',
                state.productsSelected[indexProduct],
                action.payload.value
            );

            return { ...state };
        case CHANGE_VALUE_SALEOFF_PRODUCT:
            indexProduct = findIndexItem(
                state.productsSelected,
                '_id',
                action.payload.productID
            );
            state.productsSelected[indexProduct] = updateProduct(
                'changeValueSaleOff',
                state.productsSelected[indexProduct],
                action.payload.value
            );
            return { ...state };
        case CHANGE_VALUE_SALEOFF:
            state.valueSaleOff = action.payload.value;
            return { ...state };
        case CHANGE_VALUE_PAYMENT:
            state.totalPaid = action.payload.value;
            return { ...state };
        default:
            return { ...state };
    }
};

export default scenePurchaseReducer;
