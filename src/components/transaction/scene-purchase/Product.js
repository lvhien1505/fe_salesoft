import { useContext } from 'react';
import { Row, Col, Button, Popover } from 'antd';
import Icon from 'components/ui/icon/Icon';
import { InputNumber } from 'components/ui/input/Input';
import TextPrice from 'components/common/TextPrice';
import PropTypes from 'prop-types';
import ScenePurchaseContext from 'contexts/createContext/ScenePurchaseContext';

import '../styles/product.scss';

const InputNumProduct = ({ productID, value }) => {
    const { changeTotalNum } = useContext(ScenePurchaseContext);

    const onHandleChangeTotalNum = (type, valueInput) => {
        let newValue = value;
        switch (type) {
            case 'desc':
                if (newValue === 1) {
                    return;
                } else {
                    newValue = newValue - 1;
                    return changeTotalNum(productID, newValue);
                }

            case 'input':
                if (valueInput <= 0 || isNaN(valueInput)) {
                    return changeTotalNum(productID, 1);
                }

                return changeTotalNum(productID, valueInput);
            case 'incr':
                newValue = newValue + 1;
                return changeTotalNum(productID, newValue);
            default:
                break;
        }
    };
    return (
        <div className="wrapper-input-number-real">
            <Button
                icon={<Icon className="ri-arrow-down-s-line" />}
                className="btn-left-down"
                onClick={() => onHandleChangeTotalNum('desc')}
            />
            <InputNumber
                style={{ textAlign: 'center' }}
                value={value || 0}
                onValueChange={(values) => onHandleChangeTotalNum('input', values.floatValue)}
            />
            <Button
                icon={<Icon className="ri-arrow-up-s-line" />}
                className="btn-right-up"
                onClick={() => onHandleChangeTotalNum('incr')}
            />
        </div>
    );
};

const PopoverPrice = ({
    productIndex,
    pricePreSaleOff,
    priceSaleOff,
    priceAfterSaleOff,
}) => {
    // const state = useContext(SaleContext);
    // const { changeValueSaleOffProduct } = state;

    const onHandleChangeValueSaleOff = (valueInput) => {
        // if (valueInput <= 0 || isNaN(valueInput)) {
        // 	return changeValueSaleOffProduct(productIndex, 0);
        // }
        // if (valueInput >= pricePreSaleOff) {
        // 	return changeValueSaleOffProduct(productIndex, pricePreSaleOff);
        // }
        // return changeValueSaleOffProduct(productIndex, valueInput);
    };

    const content = (
        <div style={{ width: '16rem' }}>
            <Row justify="space-between">
                <Col>Đơn giá</Col>
                <Col>
                    <TextPrice value={pricePreSaleOff} />
                </Col>
            </Row>
            <Row
                justify="space-between"
                align="middle"
                gutter={[16, 8]}
                style={{ marginTop: '0.25rem' }}
            >
                <Col span={8}>Giảm giá</Col>
                <Col span={16}>
                    <InputNumber
                        value={priceSaleOff}
                        onValueChange={(values) =>
                            onHandleChangeValueSaleOff(values.floatValue)
                        }
                    />
                </Col>
            </Row>
            <Row justify="space-between" style={{ marginTop: '0.5rem' }}>
                <Col>Giá nhập</Col>
                <Col>
                    <TextPrice value={priceAfterSaleOff} />
                </Col>
            </Row>
        </div>
    );

    return (
        <Popover
            trigger="click"
            placement="bottom"
            content={content}
            color={'#dee2e6'}
        >
            <Button>
                <TextPrice value={priceAfterSaleOff} />
            </Button>
        </Popover>
    );
};

const Product = ({
    index,
    _id,
    code,
    name,
    unit,
    totalNum,
    pricePreSaleOff,
    priceSaleOff,
    priceAfterSaleOff,
    totalPrice
}) => {
    let productID = _id;

    const { removeProduct } = useContext(ScenePurchaseContext);

    const styleRow = {
        padding: '0.5rem 0.5rem 0.5rem 0',
        borderBottom: '1px solid #dee2e6',
    };
    const styleChildCol = {
        textCenter: {
            textAlign: 'center',
            fontSize: '0.875rem',
        },
        textLeft: {
            textAlign: 'left',
            fontSize: '0.875rem',
        },
        textRight: {
            textAlign: 'right',
            fontSize: '0.875rem',
        },
    };
    return (
        <Row style={styleRow} align="middle">
            <Col span={1} style={styleChildCol.textCenter}>
                <Button
                    icon={<Icon className="ri-delete-bin-5-line" />}
                    type="danger"
                    onClick={() => removeProduct(productID)}
                />
            </Col>
            <Col span={1} style={styleChildCol.textCenter}>
                {index}
            </Col>
            <Col span={1} style={styleChildCol.textCenter}></Col>
            <Col span={3} style={styleChildCol.textLeft}>
                {code}
            </Col>
            <Col span={6} style={styleChildCol.textLeft}>
                {name}
            </Col>
            <Col span={3} style={styleChildCol.textCenter}>
                {unit}
            </Col>
            <Col span={3} style={styleChildCol.textCenter}>
                <InputNumProduct value={totalNum} productID={productID} />
            </Col>
            <Col span={3} style={styleChildCol.textRight}>
                <PopoverPrice
                    pricePreSaleOff={pricePreSaleOff}
                    priceAfterSaleOff={priceAfterSaleOff}
                    priceSaleOff={priceSaleOff}
                />
            </Col>
            <Col span={3} style={styleChildCol.textRight}>
                <TextPrice value={totalPrice} />
            </Col>
        </Row>
    );
};

Product.defaultProps = {
    index: 1,
    code: '',
    name: '',
    unit: '',
    inventory: 0,
    numReal: 0,
    numDiff: 0,
    valueDiff: 0,
};

Product.propTypes = {
    index: PropTypes.number,
    code: PropTypes.string,
    unit: PropTypes.string,
    name: PropTypes.string,
    inventory: PropTypes.number,
    numReal: PropTypes.number,
    numDiff: PropTypes.number,
    valueDiff: PropTypes.number,
};

export default Product;
