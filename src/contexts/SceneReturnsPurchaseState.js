import { useReducer } from 'react';
import SceneReturnsPurchaseContext from 'contexts/createContext/SceneReturnsPurchaseContext';
import sceneReturnsPurchase from 'contexts/reducers/sceneReturnsPurchase';
import { addInvoice,changeTotalNumReturns,changeFee,changeTotalPaid } from 'contexts/action-creators/sceneReturnsPurchase';

const SceneReturnsPurchaseState = ({ children }) => {
    const initialState = {
        products: [],
        code: '',
        totalValueInvoice: 0,
        totalPaid: 0,
        fee: 0,
    };

    const [state, dispatch] = useReducer(sceneReturnsPurchase, initialState);

    const onHandleAddIncoice = (invoice) => {
        dispatch(addInvoice(invoice));
    };

    const onHandleChangeTotalNumReturns = (productID,value) => {
        dispatch(changeTotalNumReturns(productID,value));
    };

    const onHandleChangeFee= (value) => {
        dispatch(changeFee(value));
    };
    const onHandleChangeTotalPaid= (value) => {
        dispatch(changeTotalPaid(value));
    };
    return (
        <SceneReturnsPurchaseContext.Provider
            value={{
                code:state.code,
                products: state.products,
                fee:state.fee,
                totalValueInvoice: state.totalValueInvoice,
                totalPaid:state.totalPaid,
                addInvoice: onHandleAddIncoice,
                changeTotalNumReturns:onHandleChangeTotalNumReturns,
                changeFee:onHandleChangeFee,
                changeTotalPaid:onHandleChangeTotalPaid
            }}
        >
            {children}
        </SceneReturnsPurchaseContext.Provider>
    );
};

export default SceneReturnsPurchaseState;
