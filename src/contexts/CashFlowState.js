import { useReducer, useEffect } from 'react';
import CashFlowContext from 'contexts/createContext/CashFlowContext';
import cashflowReducer from 'contexts/reducers/cashflow';
import {
    getCashflows,
    selectCashFlow,
} from 'contexts/action-creators/cashflow';

import cashflowApi from 'apis/cashflowApi';
import openNotification from 'helpers/notification';

const CashFlowState = ({ children }) => {
    const initialState = {
        cashflows: [],
        cashflowSelected: {},
    };

    const [state, dispatch] = useReducer(cashflowReducer, initialState);

    //Customer
    const getCashflowsWithLimit = async () => {
        try {
            let fetch = await cashflowApi.getCashflowsWithLimit(1, 10);

            if (fetch.status) {
                dispatch(getCashflows(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const createCashFlow = async (cashflow) => {
        try {
            let fetch = await cashflowApi.create(cashflow);

            if (fetch.status) {
                getCashflowsWithLimit();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const updateCashFlow = async (id, cashflow) => {
        try {
            let fetch = await cashflowApi.update(id, cashflow);

            if (fetch.status) {
                getCashflowsWithLimit();
                onSelectCashFlow(fetch.data)
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onSelectCashFlow = (cashflow) => {
        dispatch(selectCashFlow(cashflow));
    };

    useEffect(() => {
        getCashflowsWithLimit();
    }, []);

    return (
        <CashFlowContext.Provider
            value={{
                cashflows: state.cashflows,
                selectCashFlow: onSelectCashFlow,
                createCashFlow: createCashFlow,
                updateCashFlow:updateCashFlow,
                cashflowSelected: state.cashflowSelected,
            }}
        >
            {children}
        </CashFlowContext.Provider>
    );
};

export default CashFlowState;
