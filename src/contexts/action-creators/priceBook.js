import {
    GET_CATEGORIES,
    GET_TABLE_PRICES,
    GET_PRODUCTS,
    SELECT_TABLE_PRICE
} from 'contexts/action-types/priceBook';

export const getCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        payload: {
            categories: categories,
        },
    };
};

export const getTablePrices = (tablePrices) => {
    return {
        type: GET_TABLE_PRICES,
        payload: {
            tablePrices: tablePrices,
        },
    };
};

export const getProducts = (products)=>{
	return {
		type:GET_PRODUCTS,
		payload:{
			products:products
		}
	}
}

export const selectTablePrice = (tablePrice)=>{
	return {
		type:SELECT_TABLE_PRICE,
		payload:{
			tablePrice:tablePrice
		}
	}
}

