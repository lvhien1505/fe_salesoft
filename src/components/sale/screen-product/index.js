import ScreenSelectProduct from 'components/common/ScreenSelectProduct';
import ListProduct from './ListProduct';
import data from 'apis/fakedata/products.json';

import '../styles/screenProduct.scss'

const ScreenProduct = () => {
    const buttonProps = {
        style: {
            height: '39px',
            borderBottom: '1px solid #237fcd',
            borderRadius: '0.36rem',
        },
    };
    return (
        <div className="sale-screen-product">
            <ScreenSelectProduct buttonProps={buttonProps}>
                <ListProduct dataSource={data.products} />
            </ScreenSelectProduct>
        </div>
    );
};

export default ScreenProduct;
