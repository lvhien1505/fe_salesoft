import { useContext } from 'react';
import { Row, Col, Button, Space } from 'antd';
import Icon from 'components/ui/icon/Icon';
import ModalInvoicesPurchase from './modals/ModalInvoicesPurchase';
import Calculation from './Calculation';
import ListProduct from './ListProduct';
import SceneReturnsPurchaseContext from 'contexts/createContext/SceneReturnsPurchaseContext';

import '../styles/scenePurchase.scss';

const Content = () => {
    const { products, totalValueInvoice, code, fee, totalPaid } = useContext(
        SceneReturnsPurchaseContext
    );

    // declare totalPrice
    let totalPrice = products.reduce(
        (pre, current) => pre + current.totalPrice,
        0
    );

    if (isNaN(totalPrice)) {
        totalPrice = 0;
    }
    // declare fee
    let cloneFee = fee;

    if (cloneFee > totalPrice) {
        cloneFee = totalPrice;
    }
    // declare totalPayment
    let totalPayment = totalPrice - cloneFee;
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
                                Trả hàng nhập {code ? `( ${code} )` : null}
                            </h3>
                        </Space>
                    </Col>
                    <Col>
                        <Space>
                            <ModalInvoicesPurchase />
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
                    totalValueInvoice={totalValueInvoice}
                    totalPrice={totalPrice}
                    fee={cloneFee}
                    totalPayment={totalPayment}
                    totalPaid={cloneTotalPaid}
                    change={change}
                />
            </Col>
        </Row>
    );
};

export default Content;
