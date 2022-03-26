import { useContext } from 'react';
import ScreenSelectProduct from 'components/common/ScreenSelectProduct';
import ListProduct from './ListProduct';
import SaleContext from 'contexts/createContext/SaleContext';

import '../styles/screenProduct.scss'

const ScreenProduct = () => {
    const {products} = useContext(SaleContext);

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
                <ListProduct dataSource={products} />
            </ScreenSelectProduct>
        </div>
    );
};

export default ScreenProduct;
