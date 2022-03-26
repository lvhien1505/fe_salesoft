import { useContext } from 'react';
import { Row, Col, Button, Space, Popover } from 'antd';
import Icon from 'components/ui/icon/Icon';
import { InputNumber } from 'components/ui/input/Input';
import TextPrice from 'components/common/TextPrice';
import PropTypes from 'prop-types';
import SaleContext from 'contexts/createContext/SaleContext';

import '../styles/product.scss';

const InputTotalNumber = ({ productIndex, value }) => {
    const state = useContext(SaleContext);
    const { changeTotalNum } = state;

    const onHandleChangeTotalNum = (type, valueInput) => {
        let newValue = value;
        switch (type) {
            case 'desc':
                if (newValue === 1) {
                    return;
                } else {
                    newValue = newValue - 1;
                    return changeTotalNum(productIndex, newValue);
                }

            case 'input':
                if (valueInput <= 0 || isNaN(valueInput)) {
                    return changeTotalNum(productIndex, 1);
                }

                return changeTotalNum(productIndex, valueInput);
            case 'incr':
                newValue = newValue + 1;
                return changeTotalNum(productIndex, newValue);
            default:
                break;
        }
    };
    return (
        <div className="wrapper-input-total-number">
            <Button
                icon={<Icon className="ri-arrow-down-s-line" />}
                className="btn-left-down"
                onClick={() => onHandleChangeTotalNum('desc')}
            />
            <InputNumber
                style={{ textAlign: 'center' }}
                value={value || 0}
                onValueChange={(values) =>
                    onHandleChangeTotalNum('input', values.floatValue)
                }
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
    const state = useContext(SaleContext);
    const { changeValueSaleOffProduct } = state;

    const onHandleChangeValueSaleOff = (valueInput) => {
        if (valueInput <= 0 || isNaN(valueInput)) {
            return changeValueSaleOffProduct(productIndex, 0);
        }

        if (valueInput >= pricePreSaleOff) {
            return changeValueSaleOffProduct(productIndex, pricePreSaleOff);
        }

        return changeValueSaleOffProduct(productIndex, valueInput);
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
                <Col>Giá bán</Col>
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
            <Button type="text">
                <TextPrice value={priceAfterSaleOff} />
            </Button>
        </Popover>
    );
};

const Product = ({
    index,
    name,
    pricePreSaleOff,
    priceSaleOff,
    priceAfterSaleOff,
    totalNum,
    totalPrice,
}) => {
    let productIndex = index - 1;

    const { removeProduct } = useContext(SaleContext);

    const styleRow = {
        padding: '0.75rem 0',
        borderBottom: '1px solid #dee2e6',
    };
    const styleChildCol = {
        textCenter: {
            textAlign: 'center',
        },
        textLeft: {
            textAlign: 'left',
        },
    };
    return (
        <Row style={styleRow} align="middle">
            <Col span={2} style={styleChildCol.textCenter}>
                {index}
            </Col>
            <Col span={2} style={styleChildCol.textLeft}>
                <Button
                    icon={<Icon className="ri-delete-bin-5-line" />}
                    type="danger"
                    onClick={() => removeProduct(productIndex)}
                />
            </Col>
            <Col span={10} style={styleChildCol.textLeft}>
                {name}
            </Col>
            <Col span={3} style={styleChildCol.textCenter}>
                <InputTotalNumber
                    value={totalNum}
                    productIndex={productIndex}
                />
            </Col>
            <Col span={4} style={styleChildCol.textCenter}>
                <PopoverPrice
                    productIndex={productIndex}
                    pricePreSaleOff={pricePreSaleOff}
                    priceSaleOff={priceSaleOff}
                    priceAfterSaleOff={priceAfterSaleOff}
                />
            </Col>
            <Col span={3} style={styleChildCol.textCenter}>
                <TextPrice value={totalPrice} />
            </Col>
        </Row>
    );
};

Product.defaultProps = {
    index: 1,
    name: '',
    totalNum: 0,
    price: 0,
    totalPrice: 0,
};

Product.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    totalNum: PropTypes.number,
    price: PropTypes.number,
    totalPrice: PropTypes.number,
};

export default Product;
