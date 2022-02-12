import { useContext } from 'react';
import { Row, Col, Button, Space } from 'antd';
import Icon from 'components/ui/icon/Icon';
import ScreenProduct from './screen-product';
import StockTakesCalculation from './StockTakesCalculation';
import ListProduct from './ListProduct';
import StockTakesContext from 'contexts/createContext/StockTakesContext';

import '../styles/sceneStockTakes.scss';

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
    let productsCompare = [];
    let productsDiff = [];
    const { products, typeShow, changeTypeShow } =
        useContext(StockTakesContext);

    if (products.length > 0) {
        productsCompare = getListProductCompare(products);
        productsDiff = getListProductDiff(products);
    }

    let totalNumReal = getTotalNumReal(products);
    let totalDiffIncr = getTotalDiffChange('incr', productsDiff);
    let totalDiffDesc = getTotalDiffChange('desc', productsDiff);
    let totalValueDiff = totalDiffIncr.totalValue + totalDiffDesc.totalValue;

    const onHandleChangeTypeShow = (type) => {
        if (type === typeShow) {
            return;
        }
        changeTypeShow(type);
    };
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
                                Kiểm kho
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
                        <Button
                            type={typeShow === 'all' ? 'primary' : 'default'}
                            onClick={() => onHandleChangeTypeShow('all')}
                        >
                            Tất cả ({products.length})
                        </Button>
                        <Button
                            type={
                                typeShow === 'compare' ? 'primary' : 'default'
                            }
                            onClick={() => onHandleChangeTypeShow('compare')}
                        >
                            Khớp ({productsCompare.length})
                        </Button>
                        <Button
                            type={typeShow === 'diff' ? 'primary' : 'default'}
                            onClick={() => onHandleChangeTypeShow('diff')}
                        >
                            Lệch ({productsDiff.length})
                        </Button>
                    </Col>
                    <Col span={24}>
                        <ListProduct
                            dataSource={
                                typeShow === 'all'
                                    ? products
                                    : typeShow === 'compare'
                                    ? productsCompare
                                    : productsDiff
                            }
                        />
                    </Col>
                </Row>
            </Col>
            <Col span={7} className="scene-start__right">
                <StockTakesCalculation
                    typeShow={typeShow}
                    totalNumReal={totalNumReal}
                    totalNumDiffIncr={totalDiffIncr.totalNum}
                    totalValueDiffIncr={totalDiffIncr.totalValue}
                    totalNumDiffDesc={totalDiffDesc.totalNum}
                    totalValueDiffDesc={totalDiffDesc.totalValue}
                    totalValueDiff={totalValueDiff}
                />
            </Col>
        </Row>
    );
};

export default Content;
