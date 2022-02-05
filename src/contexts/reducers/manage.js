import { CHANGE_KEY_OF_COLS } from 'contexts/action-types/manage';

const manageReducer = (state, action) => {
	switch (action.type) {
		case CHANGE_KEY_OF_COLS:
			state.keyOfCols = action.payload.keys;
			return { ...state };
		default:
			return { ...state };
	}
};

export default manageReducer;
