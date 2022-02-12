import _ from 'lodash';
import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    CHANGE_NUM_REAL,
    CHANGE_TYPE_SHOW
} from 'contexts/action-types/stockTakes';

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
        inventory: product.inventory,
        costPrice: product.costPrice,
        numReal: 1,
        numDiff: 1 - product.inventory,
        valueDiff: product.costPrice * (1 - product.inventory),
    };
};

const updateProduct = (type, product, value) => {
    const newProduct = { ...product };
    if (type === 'changeNumReal') {
        newProduct.numReal = value;
        newProduct.numDiff = newProduct.numReal - newProduct.inventory;
        newProduct.valueDiff = newProduct.costPrice * newProduct.numDiff;
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
            let newTotal = listProduct[productIndex].numReal + 1;

            listProduct[productIndex] = updateProduct(
                'changeNumReal',
                listProduct[productIndex],
                newTotal
            );
        }
    }
};

const stockTakesReducer = (state, action) => {
    let indexProduct = null;
    switch (action.type) {
        case ADD_PRODUCT:
            addProduct(state.products, action.payload.product);
            return { ...state };
        case REMOVE_PRODUCT:
            indexProduct = findIndexItem(state.products,'_id',action.payload.productID) 
			state.products.splice(indexProduct, 1);
            return { ...state };
        case CHANGE_NUM_REAL:
            indexProduct = findIndexItem(state.products,'_id',action.payload.productID)     
            state.products[indexProduct] = updateProduct(
                'changeNumReal',
                state.products[indexProduct],
                action.payload.value
            );

            return { ...state };
        case CHANGE_TYPE_SHOW:
            state.typeShow = action.payload.type;
            return {...state}
        default:
            return { ...state };
    }
};

export default stockTakesReducer;
