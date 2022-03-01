import { useReducer } from 'react';
import SceneReturnsContext from 'contexts/createContext/SceneReturnsContext';
import sceneReturnsReducer from 'contexts/reducers/sceneReturns';
import {
	addInvoice,
	changeActiveKey,
	addTab,
	removeTab,
	changeTotalNumReturns,
	changeFee,
	changeTotalPaid,
} from 'contexts/action-creators/sceneReturns';

const SceneReturnsState = ({ children }) => {
	const initialState = {
		tabs: [
			{
				key: '1',
				code:'',
				products: [],
				totalValueInvoice:0,
				fee: 0,
				totalPaid: 0,
			},
		],
		activeKey: '1',
	};

	const [state, dispatch] = useReducer(sceneReturnsReducer, initialState);

	const onHandleChangeActiveKey = (activeKey) => {
		dispatch(changeActiveKey(activeKey));
	};

	const onHandleAddInvoice = (invoice) => {
		dispatch(addInvoice(invoice));
	};

	const onHandleAddTab = (tab, newActiveKey) => {
		dispatch(addTab(tab, newActiveKey));
	};

	const onHandleRemoveTab = (tab, newActiveKey) => {
		dispatch(removeTab(tab, newActiveKey));
	};

	const onHandleChangeTotalNumReturns = (productID, value) => {
		dispatch(changeTotalNumReturns(productID, value));
	};

	const onHandleChangeFee = (value) => {
		dispatch(changeFee(value));
	};

	const onHandleChangeTotalPaid = (value) => {
		dispatch(changeTotalPaid(value));
	};

	return (
		<SceneReturnsContext.Provider
			value={{
				tabs: state.tabs,
				activeKey: state.activeKey,
				changeActiveKey: onHandleChangeActiveKey,
				addTab: onHandleAddTab,
				removeTab: onHandleRemoveTab,
				addInvoice: onHandleAddInvoice,
				changeTotalNumReturns: onHandleChangeTotalNumReturns,
				changeFee: onHandleChangeFee,
				changeTotalPaid: onHandleChangeTotalPaid,

			}}
		>
			{children}
		</SceneReturnsContext.Provider>
	);
};

export default SceneReturnsState;
