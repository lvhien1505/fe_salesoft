import Layout from 'components/layout/Layout';
import Content from 'components/cashbook';
import MangeState from 'contexts/ManageState';
import CashFlowState from 'contexts/CashFlowState';
import { colsCashBook } from 'constants/columns';
import { keyOfColsCashBook } from 'constants/defaultKeyOfCols';

const CashBook = () => {
    return (
        <Layout namePage="cashbook" nameSelected="cashbook">
            <MangeState
                inititalCols={colsCashBook}
                keyOfCols={keyOfColsCashBook}
            >
                <CashFlowState>
                    <Content />
                </CashFlowState>
            </MangeState>
        </Layout>
    );
};

export default CashBook;
