import { useContext, useState, useMemo } from 'react';
import { Row, Col } from 'antd';
import ListProduct from './ListProduct';
import Calculation from './Calculation';
import SceneReturnsContext from 'contexts/createContext/SceneReturnsContext';

const Content = ({ nameBill, activeKey }) => {
    const state = useContext(SceneReturnsContext);
    const data = state.tabs.filter((tab) => tab.key === activeKey)[0];
    // declare totalPrice
    const { products, code, totalValueInvoice, fee, totalPaid } = data;

    let totalPrice = products.reduce(
        (pre, current) => pre + current.totalPrice,
        0
    );

    if (isNaN(totalPrice)) {
        totalPrice = 0;
    }
    // declare fee
    let cloneFee = fee;
    if (isNaN(cloneFee)) {
        cloneFee = 0;
    }
    // declare totalPayment
    let totalPayment = totalPrice - cloneFee;
    // declare totalPaid
    let cloneTotalPaid = totalPaid;

    if (cloneTotalPaid === 0) {
        cloneTotalPaid = totalPayment;
    } else if (isNaN(cloneTotalPaid)) {
        cloneTotalPaid = 0;
    }

    //declare change
    let change = cloneTotalPaid - totalPayment;

    const styleColLeft = {
        height: '100%',
        borderRight: '5px solid #bfbfbf',
        padding: '0.5rem 0.5rem 0 0',
        overflowY: 'auto',
    };

    const styleColRight = {
        height: '100%',
        padding: '0.5rem 0 0 0.5rem',
        borderLeft: '1px solid #bfbfbf',
        overflowY: 'auto',
        overflowX: 'hidden',
    };

    return useMemo(() => {
        return (
            <Row style={{ height: '100%' }}>
                <Col span={17} style={styleColLeft}>
                    <ListProduct dataSource={products} />
                </Col>
                <Col span={7} style={styleColRight}>
                    <Calculation
                        nameBill={code || nameBill}
                        totalValueInvoice={totalValueInvoice}
                        totalPrice={totalPrice}
                        fee={cloneFee}
                        totalPayment={totalPayment}
                        totalPaid={cloneTotalPaid}
                        change={change}
                        products={products}
                    />
                </Col>
            </Row>
        );
    }, [totalPrice, fee, totalPaid,totalValueInvoice]);
};

export default Content;
