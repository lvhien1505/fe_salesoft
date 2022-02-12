import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	CHANGE_NUM_REAL,
	CHANGE_TYPE_SHOW
} from 'contexts/action-types/stockTakes';

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

export const changeNumReal = (productID,value) => {
	return {
		type: CHANGE_NUM_REAL,
		payload: {
			productID,
			value
		},
	};
};

export const changeTypeShow = (type) => {
	return {
		type: CHANGE_TYPE_SHOW,
		payload: {
			type,
		},
	};
};