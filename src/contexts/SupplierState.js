import { useReducer, useEffect } from 'react';
import SupplierContext from 'contexts/createContext/SupplierContext';
import supplierReducer from 'contexts/reducers/supplier';
import {
    getSuppliers,
    selectSupplier,
} from 'contexts/action-creators/supplier';

import supplierApi from 'apis/supplierApi';
import openNotification from 'helpers/notification';

const SupplierState = ({ children }) => {
    const initialState = {
        suppliers: [],
        supplierSelected: {},
    };

    const [state, dispatch] = useReducer(supplierReducer, initialState);

    //Supplier
    const getSuppliersWithLimit = async () => {
        try {
            let fetch = await supplierApi.getSuppliersWithLimit(1, 10);

            if (fetch.status) {
                dispatch(getSuppliers(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const createSupplier = async (supplier) => {
        try {
            let fetch = await supplierApi.create(supplier);

            if (fetch.status) {
                getSuppliersWithLimit();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const updateSupplier = async (id, supplier) => {
        try {
            let fetch = await supplierApi.update(id, supplier);

            if (fetch.status) {
                getSuppliersWithLimit();
                onSelectSupplier(fetch.data)
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onSelectSupplier = (supplier) => {
        dispatch(selectSupplier(supplier));
    };

    useEffect(() => {
        getSuppliersWithLimit();
    }, []);

    return (
        <SupplierContext.Provider
            value={{
                suppliers: state.suppliers,
                selectSupplier:onSelectSupplier,
                createSupplier:createSupplier,
                updateSupplier:updateSupplier,
                supplierSelected:state.supplierSelected
            }}
        >
            {children}
        </SupplierContext.Provider>
    );
};

export default SupplierState;
