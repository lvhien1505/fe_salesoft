import Layout from 'components/layout/Layout';
import Content from 'components/transaction/invoices';
import MangeState from 'contexts/ManageState';
import InvoiceState from 'contexts/InvoiceState';
import { colsInvoices } from 'constants/columns';
import { keyOfColsInvoices } from 'constants/defaultKeyOfCols';

const Invoices = () => {
    return (
        <Layout namePage="invoices" nameSelected="transaction">
            <MangeState
                inititalCols={colsInvoices}
                keyOfCols={keyOfColsInvoices}
            >
                <InvoiceState>
                    <Content />
                </InvoiceState>
            </MangeState>
        </Layout>
    );
};

export default Invoices;
