import { GET_SUPPLIERS, SELECT_SUPPLIER } from 'contexts/action-types/supplier';

const supplierReducer = (state, action) => {
    switch (action.type) {
        case GET_SUPPLIERS:
            state.suppliers = action.payload.suppliers;
            return { ...state };
        case SELECT_SUPPLIER:
            state.supplierSelected = action.payload.supplier;
            return { ...state };
        default:
            return { ...state };
    }
};

export default supplierReducer;
