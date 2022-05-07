import { GET_CASHFLOWS, SELECT_CASHFLOW } from 'contexts/action-types/cashflow';

const cashflowReducer = (state, action) => {
    switch (action.type) {
        case GET_CASHFLOWS:
            state.cashflows = action.payload.cashflows;
            return { ...state };
        case SELECT_CASHFLOW:
            state.cashflowSelected = action.payload.cashflow;
            return { ...state };
        default:
            return { ...state };
    }
};

export default cashflowReducer;
