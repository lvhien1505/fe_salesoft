import { useReducer, useEffect } from 'react';
import CustomerContext from 'contexts/createContext/CustomerContext';
import customerReducer from 'contexts/reducers/customer';
import {
    getCustomers,
    selectCustomer,
} from 'contexts/action-creators/customer';

import customerApi from 'apis/customerApi';
import openNotification from 'helpers/notification';

const CustomerState = ({ children }) => {
    const initialState = {
        customers: [],
        customerSelected: {},
    };

    const [state, dispatch] = useReducer(customerReducer, initialState);

    //Customer
    const getCustomersWithLimit = async () => {
        try {
            let fetch = await customerApi.getCustomersWithLimit(1, 10);

            if (fetch.status) {
                dispatch(getCustomers(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const createCustomer = async (customer) => {
        try {
            let fetch = await customerApi.create(customer);

            if (fetch.status) {
                getCustomersWithLimit();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onSelectCustomer = (customer) => {
        dispatch(selectCustomer(customer));
    };

    useEffect(() => {
        getCustomersWithLimit();
    }, []);

    return (
        <CustomerContext.Provider
            value={{
                customers: state.customers,
                selectCustomer:onSelectCustomer,
                createCustomer:createCustomer,
                customerSelected:state.customerSelected
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
};

export default CustomerState;
