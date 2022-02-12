import { useReducer } from 'react';
import SceneReturnsContext from 'contexts/createContext/SceneReturnsContext';
import sceneReturnsReducer from 'contexts/reducers/sceneReturns';
import {
	addProduct,
	removeProduct,
	changeActiveKey,
	addTab,
	removeTab,
	changeTotalNum,
	changeValueSaleOffProduct,
	changeValueSaleOff,
	changeValuePayment,
} from 'contexts/action-creators/sale';

const SaleState = ({ children }) => {
	const initialState = {
		tabs: [
			{
				key: '1',
				products: [],
				valueSaleOff: 0,
				totalPaid: 0,
			},
		],
		activeKey: '1',
	};

	const [state, dispatch] = useReducer(sceneReturnsReducer, initialState);

	const onHandleChangeActiveKey = (activeKey) => {
		dispatch(changeActiveKey(activeKey));
	};

	const onHandleAddProduct = (product) => {
		dispatch(addProduct(product));
	};

	const onHandleRemoveProduct = (productIndex) => {
		dispatch(removeProduct(productIndex));
	};


	const onHandleAddTab = (tab, newActiveKey) => {
		dispatch(addTab(tab, newActiveKey));
	};

	const onHandleRemoveTab = (tab, newActiveKey) => {
		dispatch(removeTab(tab, newActiveKey));
	};

	const onHandleChangeTotalNum = (productIndex, value) => {
		dispatch(changeTotalNum(productIndex, value));
	};

	const onHandleChangeValueSaleOffProduct = (productIndex, value) => {
		dispatch(changeValueSaleOffProduct(productIndex, value));
	};

	const onHandleChangeValueSaleOff = (value) => {
		dispatch(changeValueSaleOff(value));
	};

	const onHandleChangeValuePayment = (value) => {
		dispatch(changeValuePayment(value));
	};

	return (
		<SceneReturnsContext.Provider
			value={{
				tabs: state.tabs,
				activeKey: state.activeKey,
				changeActiveKey: onHandleChangeActiveKey,
				addTab: onHandleAddTab,
				removeTab: onHandleRemoveTab,
				addProduct: onHandleAddProduct,
				removeProduct:onHandleRemoveProduct,
				changeTotalNum: onHandleChangeTotalNum,
				changeValueSaleOffProduct: onHandleChangeValueSaleOffProduct,
				changeValueSaleOff: onHandleChangeValueSaleOff,
				changeValuePayment: onHandleChangeValuePayment,
			}}
		>
			{children}
		</SceneReturnsContext.Provider>
	);
};

export default SaleState;
