import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	CHANGE_TOTAL_NUM
} from 'contexts/action-types/scenePurchase';

export const addProduct = (product) => {
	return {
		type: ADD_PRODUCT,
		payload: {
			product,
		},
	};
};

export const removeProduct = (productID) => {
	return {
		type: REMOVE_PRODUCT,
		payload: {
			productID,
		},
	};
};

export const changeTotalNum = (productID,value) => {
	return {
		type: CHANGE_TOTAL_NUM,
		payload: {
			productID,
			value
		},
	};
};
