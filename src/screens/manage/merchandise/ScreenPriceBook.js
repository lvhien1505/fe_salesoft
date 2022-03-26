import Layout from 'components/layout/Layout';
import Content from 'components/merchandise/pricebook';
import MangeState from 'contexts/ManageState';
import PriceBookState from 'contexts/PriceBookState';
import { colsPriceBook } from 'constants/columns';
import { keyOfColsPriceBook } from 'constants/defaultKeyOfCols';

const PriceBook = () => {
    return (
        <Layout namePage="pricebook" nameSelected="merchandise">
            <MangeState
                inititalCols={colsPriceBook}
                keyOfCols={keyOfColsPriceBook}
            >
                <PriceBookState>
                    <Content />
                </PriceBookState>
            </MangeState>
        </Layout>
    );
};

export default PriceBook;
