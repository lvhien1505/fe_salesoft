import { useReducer } from 'react';
import StockTakesContext from 'contexts/createContext/StockTakesContext';
import stockTakesReducer from 'contexts/reducers/stockTakes';
import { addProduct,changeNumReal,removeProduct,changeTypeShow } from 'contexts/action-creators/stockTakes';

const StockTakesState = ({ children }) => {
	const initialState = {
		products:[],
		typeShow:'all'
	};

	const [state, dispatch] = useReducer(stockTakesReducer, initialState);

	const onHandleAddProduct = (product) => {
		dispatch(addProduct(product));
	};

	const onHandleRemoveProduct = (productID) => {
		dispatch(removeProduct(productID));
	};

	const onHandleChangeNumReal = (productID,value) => {
		dispatch(changeNumReal(productID,value));
	};

	const onHandleChangeTypeShow = (type) => {
		dispatch(changeTypeShow(type));
	};

	return (
		<StockTakesContext.Provider
			value={{
				typeShow:state.typeShow,
				products: state.products,
				addProduct: onHandleAddProduct,
				removeProduct:onHandleRemoveProduct,
				changeNumReal:onHandleChangeNumReal,
				changeTypeShow:onHandleChangeTypeShow
			}}
		>
			{children}
		</StockTakesContext.Provider>
	);
};

export default StockTakesState;
