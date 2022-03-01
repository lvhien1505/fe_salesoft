import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	CHANGE_TOTAL_NUM,
	CHANGE_VALUE_SALEOFF_PRODUCT,
	CHANGE_VALUE_SALEOFF,
	CHANGE_VALUE_PAYMENT
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

export const changeValueSaleOffProduct = (productID, value) => {
	return {
		type: CHANGE_VALUE_SALEOFF_PRODUCT,
		payload: {
			productID,
			value,
		},
	};
};

export const changeValueSaleOff = (value) => {
	return {
		type: CHANGE_VALUE_SALEOFF,
		payload: {
			value,
		},
	};
};

export const changeValuePayment = (value) => {
	return {
		type: CHANGE_VALUE_PAYMENT,
		payload: {
			value,
		},
	};
};
