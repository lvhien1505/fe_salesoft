import { useReducer } from 'react';
import ScenePurchaseContext from 'contexts/createContext/ScenePurchaseContext';
import scenePurchaseReducer from 'contexts/reducers/scenePurchase';
import {
    addProduct,
    changeTotalNum,
    removeProduct,
    changeValueSaleOffProduct,
    changeValueSaleOff,
    changeValuePayment
} from 'contexts/action-creators/scenePurchase';

const ScenePurchaseState = ({ children }) => {
    const initialState = {
        products: [],
        valueSaleOff: 0,
        totalPaid: 0,
    };

    const [state, dispatch] = useReducer(scenePurchaseReducer, initialState);

    const onHandleAddProduct = (product) => {
        dispatch(addProduct(product));
    };

    const onHandleRemoveProduct = (productID) => {
        dispatch(removeProduct(productID));
    };

    const onHandleChangeTotalNum = (productID, value) => {
        dispatch(changeTotalNum(productID, value));
    };

    const onHandleChangeValueSaleOffProduct = (productID,value) => {
        dispatch(changeValueSaleOffProduct(productID,value));
    };

    const onHandleChangeValueSaleOff = (value) => {
        dispatch(changeValueSaleOff(value));
    };

    const onHandleChangeValuePayment = (value) => {
        dispatch(changeValuePayment(value));
    };

    return (
        <ScenePurchaseContext.Provider
            value={{
                products: state.products,
                valueSaleOff: state.valueSaleOff,
                totalPaid: state.totalPaid,
                addProduct: onHandleAddProduct,
                removeProduct: onHandleRemoveProduct,
                changeTotalNum: onHandleChangeTotalNum,
                changeValueSaleOffProduct:onHandleChangeValueSaleOffProduct,
                changeValueSaleOff:onHandleChangeValueSaleOff,
                changeValuePayment:onHandleChangeValuePayment
            }}
        >
            {children}
        </ScenePurchaseContext.Provider>
    );
};

export default ScenePurchaseState;
