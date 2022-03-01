import { useContext } from 'react';
import { Row, Col, Button, Popover, Space } from 'antd';
import Icon from 'components/ui/icon/Icon';
import { InputNumber } from 'components/ui/input/Input';
import TextPrice from 'components/common/TextPrice';
import PropTypes from 'prop-types';
import SceneReturnsContext from 'contexts/createContext/SceneReturnsContext';

import '../styles/product.scss';

const InputTotalNumberReturns = ({ productID, value, limit }) => {
    const { changeTotalNumReturns } = useContext(SceneReturnsContext);

    const onHandleChangeTotalNumReturns = (type, valueInput) => {
        let newValue = value;
        switch (type) {
            case 'desc':
                if (newValue === 0) {
                    return;
                } else {
                    newValue = newValue - 1;
                    return changeTotalNumReturns(productID, newValue);
                }

            case 'input':
                if (valueInput <= 0 || isNaN(valueInput)) {
                    return changeTotalNumReturns(productID, 0);
                }

                if (valueInput > limit || isNaN(valueInput)) {
                    return changeTotalNumReturns(productID, limit);
                }
                return changeTotalNumReturns(productID, valueInput);
            case 'incr':
                if (newValue === limit) {
                    return;
                }
                newValue = newValue + 1;
                return changeTotalNumReturns(productID, newValue);
            default:
                break;
        }
    };
    return (
        <div className="wrapper-input-total-number">
            <Button
                icon={<Icon className="ri-arrow-down-s-line" />}
                className="btn-left-down"
                onClick={() => onHandleChangeTotalNumReturns('desc')}
            />
            <InputNumber
                style={{ textAlign: 'center' }}
                value={value || 0}
                onValueChange={(values) =>
                    onHandleChangeTotalNumReturns('input', values.floatValue)
                }
            />
            <Button
                icon={<Icon className="ri-arrow-up-s-line" />}
                className="btn-right-up"
                onClick={() => onHandleChangeTotalNumReturns('incr')}
            />
        </div>
    );
};

const PopoverPrice = ({ pricePreSaleOff, priceSaleOff, priceAfterSaleOff }) => {
    const content = (
        <div style={{ width: '16rem' }}>
            <Row justify="space-between">
                <Col>Giá gốc</Col>
                <Col>
                    <TextPrice value={pricePreSaleOff} />
                </Col>
            </Row>
            <Row justify="space-between">
                <Col>Giảm giá</Col>
                <Col>
                    <TextPrice value={priceSaleOff} />
                </Col>
            </Row>
            <Row justify="space-between">
                <Col>Giá bán cho khách</Col>
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
            <div className="popover-info-price">
                <Icon
                    className="ri-information-fill"
                    style={{ color: '#666' }}
                />
            </div>
        </Popover>
    );
};

const Product = ({
    index,
    _id,
    name,
    pricePreSaleOff,
    priceSaleOff,
    priceAfterSaleOff,
    totalNum,
    totalNumReturns,
    totalPrice,
    priceReturns,
}) => {
    let productID = _id;
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
            <Col span={9} style={styleChildCol.textLeft}>
                {name}
            </Col>
            <Col span={3} style={styleChildCol.textCenter}>
                {totalNum}
            </Col>
            <Col span={3} style={styleChildCol.textCenter}>
                <InputTotalNumberReturns
                    value={totalNumReturns}
                    productID={productID}
                    limit={totalNum}
                />
            </Col>
            <Col span={4} style={styleChildCol.textCenter}>
                <Space align="middle">
                    <TextPrice value={priceReturns} />
                    <PopoverPrice
                        pricePreSaleOff={pricePreSaleOff}
                        priceSaleOff={priceSaleOff}
                        priceAfterSaleOff={priceAfterSaleOff}
                    />
                </Space>
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
