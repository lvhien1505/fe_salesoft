import { CHANGE_KEY_OF_COLS } from 'contexts/action-types/manage';

export const changeKeyOfCols = (keys) => {
	return {
		type: CHANGE_KEY_OF_COLS,
		payload: {
			keys,
		},
	};
};
