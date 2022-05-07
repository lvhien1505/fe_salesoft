import { useContext } from 'react';
import { Row, Col } from 'antd';
import ScreenSelectProduct from 'components/common/ScreenSelectProduct';
import ListProduct from './ListProduct';
import SaleContext from 'contexts/createContext/SaleContext';

import '../styles/screenProduct.scss';

const ScreenProduct = () => {
    const { products } = useContext(SaleContext);

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
                <Col span={24}>
                    <Row>
                        <ListProduct dataSource={products} />
                    </Row>
                </Col>
            </ScreenSelectProduct>
        </div>
    );
};

export default ScreenProduct;
