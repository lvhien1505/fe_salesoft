import {
    GET_CATEGORIES,
    GET_TABLE_PRICES,
    GET_PRODUCTS,
    SELECT_TABLE_PRICE,
} from 'contexts/action-types/priceBook';

const priceBookReducer = (state, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            state.categories = action.payload.categories;
            return { ...state };
        case GET_TABLE_PRICES:
            state.tablePrices = action.payload.tablePrices;
            return { ...state };
        case GET_PRODUCTS:
            state.products = action.payload.products;
            return { ...state };
        case SELECT_TABLE_PRICE:
            state.tablePriceSelected = action.payload.tablePrice;
            return { ...state };
        default:
            return { ...state };
    }
};

export default priceBookReducer;
