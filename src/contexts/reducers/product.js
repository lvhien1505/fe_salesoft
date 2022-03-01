import {
    GET_PRODUCTS,
    GET_CATEGORIES,
    SELECT_PRODUCT,
    SELECT_CATEGORY,
    GET_BRANDS,
    SELECT_BRAND,
} from 'contexts/action-types/product';

const productReducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            state.products = action.payload.products;
            return { ...state };
        case SELECT_PRODUCT:
            state.productSelected = action.payload.product;
            return {...state};
        case GET_CATEGORIES:
            state.categories = action.payload.categories;
            return { ...state };
        case SELECT_CATEGORY:
            state.categorySelected = action.payload.category;
            return { ...state };
        case GET_BRANDS:
            state.brands = action.payload.brands;
            return { ...state };
        case SELECT_BRAND:
            state.brandSelected = action.payload.brand;
            return { ...state };
        default:
            return { ...state };
    }
};

export default productReducer;
