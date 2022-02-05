import { useReducer } from 'react';
import ManageContext from 'contexts/createContext/ManageContext';
import manageReducer from 'contexts/reducers/manage';
import { changeKeyOfCols } from 'contexts/action-creators/manage';

const ManageState = ({ inititalCols, keyOfCols, children }) => {
	const initialState = {
		columns: inititalCols || [],
		keyOfCols:keyOfCols || []
	};

	const [state, dispatch] = useReducer(manageReducer, initialState);

	const onHandleChangeKeyOfCols = (keys) => {
		dispatch(changeKeyOfCols(keys));
	};

	return (
		<ManageContext.Provider
			value={{
				columns: state.columns,
				changeKeyOfCols: onHandleChangeKeyOfCols,
				keyOfCols:state.keyOfCols
			}}
		>
			{children}
		</ManageContext.Provider>
	);
};

export default ManageState;
