import { useContext } from 'react';
import { Row, Col, Button, Popover, Space } from 'antd';
import Icon from 'components/ui/icon/Icon';
import { InputNumber } from 'components/ui/input/Input';
import TextPrice from 'components/common/TextPrice';
import PropTypes from 'prop-types';
import SceneReturnsPurchaseContext from 'contexts/createContext/SceneReturnsPurchaseContext';

import '../styles/product.scss';

const InputNumProduct = ({ productID, value, limit }) => {
    const { changeTotalNumReturns } = useContext(SceneReturnsPurchaseContext);

    const onHandleChangeTotalNum = (type, valueInput) => {
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
                if (valueInput > limit) {
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
        <div className="wrapper-input-number-real">
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

const PopoverPrice = ({ pricePreSaleOff, priceSaleOff, priceAfterSaleOff }) => {
    const content = (
        <div style={{ width: '16rem' }}>
            <Row justify="space-between">
                <Col>Giá nhập gốc</Col>
                <Col>
                    <TextPrice value={pricePreSaleOff} />
                </Col>
            </Row>
            <Row justify="space-between">
                <Col>Giảm giá</Col>
                <Col>{priceSaleOff}</Col>
            </Row>
            <Row justify="space-between">
                <Col>Giá nhập thực</Col>
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
    code,
    name,
    unit,
    totalNum,
    totalNumReturns,
    priceReturns,
    pricePreSaleOff,
    priceSaleOff,
    priceAfterSaleOff,
    totalPrice,
}) => {
    let productID = _id;

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
            <Col span={2} style={styleChildCol.textCenter}>
                {index}
            </Col>
            <Col span={8} style={styleChildCol.textLeft}>
                {name}
            </Col>
            <Col span={3} style={styleChildCol.textCenter}>
                {unit}
            </Col>
            <Col span={2} style={styleChildCol.textCenter}>
                {totalNum}
            </Col>
            <Col span={3} style={styleChildCol.textCenter}>
                <InputNumProduct
                    value={totalNumReturns}
                    productID={productID}
                    limit={totalNum}
                />
            </Col>
            <Col span={3} style={styleChildCol.textRight}>
                <Space align="middle">
                    <TextPrice value={priceReturns} />
                    <PopoverPrice
                        pricePreSaleOff={pricePreSaleOff}
                        priceSaleOff={priceSaleOff}
                        priceAfterSaleOff={priceAfterSaleOff}
                    />
                </Space>
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
    priceReturns: 0,
};

Product.propTypes = {
    index: PropTypes.number,
    code: PropTypes.string,
    unit: PropTypes.string,
    name: PropTypes.string,
    priceReturns: PropTypes.number,
};

export default Product;
