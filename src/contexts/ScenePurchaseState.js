import { useReducer } from 'react';
import ScenePurchaseContext from 'contexts/createContext/ScenePurchaseContext';
import scenePurchaseReducer from 'contexts/reducers/scenePurchaseReducer';
import {
    addProduct,
    changeTotalNum,
    removeProduct,
} from 'contexts/action-creators/scenePurchase';

const ScenePurchaseState = ({ children }) => {
    const initialState = {
        products: [],
        typeShow: 'all',
        totalPrice: 0,
        saleOff: 0,
        totalPayment: 0,
        totalPaid: 0,
        debt: 0,
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

    return (
        <ScenePurchaseContext.Provider
            value={{
                typeShow: state.typeShow,
                products: state.products,
                totalPrice: state.totalPrice,
                saleOff: state.saleOff,
                totalPayment: state.totalPayment,
                totalPaid: state.totalPaid,
                debt: state.debt,
                addProduct: onHandleAddProduct,
                removeProduct: onHandleRemoveProduct,
                changeTotalNum: onHandleChangeTotalNum,
            }}
        >
            {children}
        </ScenePurchaseContext.Provider>
    );
};

export default ScenePurchaseState;
