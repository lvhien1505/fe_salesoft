import {
	ADD_INVOICE,
	CHANGE_TOTAL_NUM_RETURNS,
	CHANGE_FEE,
	CHANGE_TOTAL_PAID
} from 'contexts/action-types/sceneReturnsPurchase';

export const addInvoice = (invoice) => {
	return {
		type: ADD_INVOICE,
		payload: {
			invoice,
		},
	};
};

export const changeTotalNumReturns = (productID,value) => {
	return {
		type: CHANGE_TOTAL_NUM_RETURNS,
		payload: {
			productID,
			value
		},
	};
};

export const changeFee = (value) => {
	return {
		type: CHANGE_FEE,
		payload: {
			value
		},
	};
};

export const changeTotalPaid = (value) => {
	return {
		type: CHANGE_TOTAL_PAID,
		payload: {
			value
		},
	};
};


