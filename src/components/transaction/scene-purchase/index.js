import { useContext } from 'react';
import { Row, Col, Button, Space } from 'antd';
import Icon from 'components/ui/icon/Icon';
import ScreenProduct from './screen-product';
import Calculation from './Calculation';
import ListProduct from './ListProduct';
import ScenePurchaseContext from 'contexts/createContext/ScenePurchaseContext';

import '../styles/scenePurchase.scss';

const getListProductCompare = (products) => {
    return products.filter((product) => product.valueDiff === 0);
};

const getListProductDiff = (products) => {
    return products.filter((product) => product.valueDiff != 0);
};

const getTotalNumReal = (products) => {
    if (products.length > 0) {
        return products.reduce((pre, current) => pre + current.numReal, 0);
    } else {
        return products.length;
    }
};

const getTotalDiffChange = (type, products) => {
    let totalNum = 0;
    let totalValue = 0;
    if (products.length > 0) {
        products.forEach((product) => {
            if (type === 'incr') {
                if (product.numDiff > 0) {
                    totalNum += product.numDiff;
                    totalValue += product.valueDiff;
                }
            }
            if (type === 'desc') {
                if (product.numDiff < 0) {
                    totalNum += product.numDiff;
                    totalValue += product.valueDiff;
                }
            }
        });
    }
    return {
        totalNum: totalNum,
        totalValue: totalValue,
    };
};

const Content = () => {
    const { products, totalPrice, saleOff, totalPayment, totalPaid, debt } =
        useContext(ScenePurchaseContext);

    return (
        <Row className="scene-start">
            <Col span={17} className="scene-start__left">
                <Row justify="space-between">
                    <Col>
                        <Space align="center">
                            <Button
                                icon={<Icon className="ri-arrow-left-line" />}
                                className="btn-redirect"
                                type="primary"
                            />
                            <h3 style={{ margin: 0, fontWeight: 600 }}>
                                Nhập hàng
                            </h3>
                        </Space>
                    </Col>
                    <Col>
                        <Space>
                            <ScreenProduct />
                        </Space>
                    </Col>
                </Row>
                <Row style={{ marginTop: '0.5rem' }}>
                    <Col span={24}>
                        <ListProduct dataSource={products} />
                    </Col>
                </Row>
            </Col>
            <Col span={7} className="scene-start__right">
                <Calculation
                    totalPrice={totalPrice}
                    saleOff={saleOff}
                    totalPayment={totalPayment}
                    totalPaid={totalPaid}
                    debt={debt}
                />
            </Col>
        </Row>
    );
};

export default Content;
