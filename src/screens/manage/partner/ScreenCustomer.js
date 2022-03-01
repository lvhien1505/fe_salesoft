import Layout from 'components/layout/Layout';
import Content from 'components/partner/customer';
import MangeState from 'contexts/ManageState';
import CustomerState from 'contexts/CustomerState';
import { colsCustomer } from 'constants/columns';
import { keyOfColsCustomer } from 'constants/defaultKeyOfCols';

const Customer = () => {
    return (
        <Layout namePage="customer" nameSelected="partner">
            <MangeState
                inititalCols={colsCustomer}
                keyOfCols={keyOfColsCustomer}
            >
                <CustomerState>
                    <Content />
                </CustomerState>
            </MangeState>
        </Layout>
    );
};

export default Customer;
