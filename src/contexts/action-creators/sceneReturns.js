import {
	CHANGE_ACTIVE_KEY,
	ADD_TAB,
	REMOVE_TAB,
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	CHANGE_TOTAL_NUM,
	CHANGE_VALUE_SALEOFF_PRODUCT,
	CHANGE_VALUE_SALEOFF,
	CHANGE_VALUE_PAYMENT,
} from 'contexts/action-types/sale';

export const changeActiveKey = (activeKey) => {
	return {
		type: CHANGE_ACTIVE_KEY,
		payload: {
			activeKey,
		},
	};
};

export const addTab = (tab, newActiveKey) => {
	return {
		type: ADD_TAB,
		payload: {
			tab,
			newActiveKey,
		},
	};
};
export const removeTab = (key, newActiveKey) => {
	return {
		type: REMOVE_TAB,
		payload: {
			key,
			newActiveKey,
		},
	};
};
export const addProduct = (product) => {
	return {
		type: ADD_PRODUCT,
		payload: {
			product,
		},
	};
};

export const removeProduct = (productIndex) => {
	return {
		type: REMOVE_PRODUCT,
		payload: {
			productIndex,
		},
	};
};

export const changeTotalNum = (productIndex, value) => {
	return {
		type: CHANGE_TOTAL_NUM,
		payload: {
			productIndex,
			value,
		},
	};
};

export const changeValueSaleOffProduct = (productIndex, value) => {
	return {
		type: CHANGE_VALUE_SALEOFF_PRODUCT,
		payload: {
			productIndex,
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

