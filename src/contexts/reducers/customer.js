import { GET_CUSTOMERS, SELECT_CUSTOMER } from 'contexts/action-types/customer';

const customerReducer = (state, action) => {
    switch (action.type) {
        case GET_CUSTOMERS:
            state.customers = action.payload.customers;
            return { ...state };
        case SELECT_CUSTOMER:
            state.customerSelected = action.payload.customer;
            return { ...state };
        default:
            return { ...state };
    }
};

export default customerReducer;
