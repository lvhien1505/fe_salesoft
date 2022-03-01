import {
	CHANGE_ACTIVE_KEY,
	ADD_TAB,
	REMOVE_TAB,
	ADD_INVOICE,
	CHANGE_TOTAL_NUM_RETURNS,
	CHANGE_FEE,
	CHANGE_TOTAL_PAID,
} from 'contexts/action-types/sceneReturns';

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
export const addInvoice = (invoice) => {
	return {
		type: ADD_INVOICE,
		payload: {
			invoice,
		},
	};
};

export const changeTotalNumReturns = (productID, value) => {
	return {
		type: CHANGE_TOTAL_NUM_RETURNS,
		payload: {
			productID,
			value,
		},
	};
};

export const changeFee = (value) => {
	return {
		type: CHANGE_FEE,
		payload: {
			value,
		},
	};
};

export const changeTotalPaid = (value) => {
	return {
		type: CHANGE_TOTAL_PAID,
		payload: {
			value,
		},
	};
};

