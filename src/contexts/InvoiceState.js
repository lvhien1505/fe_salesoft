import { useReducer, useEffect } from 'react';
import InvoiceContext from 'contexts/createContext/InvoiceContext';
import invoiceReducer from 'contexts/reducers/invoice';
import {
    getInvoices,
    selectInvoices,
} from 'contexts/action-creators/invoice';

import invoiceApi from 'apis/invoiceApi';
import openNotification from 'helpers/notification';

const InvoiceState = ({ children }) => {
    const initialState = {
        invoices: [],
        invoicesSelected: {},
    };

    const [state, dispatch] = useReducer(invoiceReducer, initialState);

    //Invoice
    const getInvoicesWithLimit = async () => {
        try {
            let fetch = await invoiceApi.getInvoicesWithLimit(1, 10);

            if (fetch.status) {
                dispatch(getInvoices(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onSelectInvoice = (invoice) => {
        dispatch(selectInvoices(invoice));
    };

    useEffect(() => {
        getInvoicesWithLimit();
    }, []);

    return (
        <InvoiceContext.Provider
            value={{
                invoices: state.invoices,
                selectInvoice: onSelectInvoice,
                invoiceSelected: state.invoiceSelected,
            }}
        >
            {children}
        </InvoiceContext.Provider>
    );
};

export default InvoiceState;
