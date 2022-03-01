import { useContext } from 'react';
import { Row, Col, Button, Space } from 'antd';
import Icon from 'components/ui/icon/Icon';
import ScreenProduct from './screen-product';
import Calculation from './Calculation';
import ListProduct from './ListProduct';
import ScenePurchaseContext from 'contexts/createContext/ScenePurchaseContext';

import '../styles/scenePurchase.scss';

const Content = () => {
    const { products, valueSaleOff, totalPaid } =
        useContext(ScenePurchaseContext);
    // declare totalPrice
    let totalPrice = products.reduce(
        (pre, current) => pre + current.totalPrice,
        0
    );

    if (isNaN(totalPrice)) {
        totalPrice = 0;
    }
    // declare valueSaleOff
    let cloneValueSaleOff = valueSaleOff;

    if (cloneValueSaleOff > totalPrice) {
        cloneValueSaleOff = totalPrice;
    }
    // declare totalPayment
    let totalPayment = totalPrice - cloneValueSaleOff;
    let cloneTotalPaid = totalPaid;

    if (cloneTotalPaid === 0) {
        cloneTotalPaid = totalPayment;
    } else if (isNaN(cloneTotalPaid)) {
        cloneTotalPaid = 0;
    }

    //declare change
    let change = cloneTotalPaid - totalPayment;

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
                    valueSaleOff={cloneValueSaleOff}
                    totalPayment={totalPayment}
                    totalPaid={cloneTotalPaid}
                    change={change}
                />
            </Col>
        </Row>
    );
};

export default Content;
