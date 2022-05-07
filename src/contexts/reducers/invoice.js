import { GET_INVOICES, SELECT_INVOICE } from 'contexts/action-types/invoice';

const invoiceReducer = (state, action) => {
    switch (action.type) {
        case GET_INVOICES:
            state.invoices = action.payload.invoices;
            return { ...state };
        case SELECT_INVOICE:
            state.invoiceSelected = action.payload.invoice;
            return { ...state };
        default:
            return { ...state };
    }
};

export default invoiceReducer;
