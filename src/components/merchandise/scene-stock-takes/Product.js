import { useContext } from 'react';
import { Row, Col, Button, Space, Popover } from 'antd';
import Icon from 'components/ui/icon/Icon';
import { InputNumber } from 'components/ui/input/Input';
import TextPrice from 'components/common/TextPrice';
import PropTypes from 'prop-types';
import StockTakesContext from 'contexts/createContext/StockTakesContext';

import '../styles/product.scss';

const InputNumReal = ({ productID, value }) => {
    const { changeNumReal } = useContext(StockTakesContext);

    const onHandleChangeNumReal = (type, valueInput) => {
        let newValue = value;
        switch (type) {
            case 'desc':
                if (newValue === 0) {
                    return;
                } else {
                    newValue = newValue - 1;
                    return changeNumReal(productID, newValue);
                }

            case 'input':
                valueInput = parseInt(valueInput.split(',').join(''));
                if (valueInput <= 0 || isNaN(valueInput)) {
                    return changeNumReal(productID, 0);
                }

                return changeNumReal(productID, valueInput);
            case 'incr':
                newValue = newValue + 1;
                return changeNumReal(productID, newValue);
            default:
                break;
        }
    };
    return (
        <div className="wrapper-input-number-real">
            <Button
                icon={<Icon className="ri-arrow-down-s-line" />}
                className="btn-left-down"
                onClick={() => onHandleChangeNumReal('desc')}
            />
            <InputNumber
                style={{ textAlign: 'center' }}
                value={value || 0}
                onBlur={(e) => onHandleChangeNumReal('input', e.target.value)}
            />
            <Button
                icon={<Icon className="ri-arrow-up-s-line" />}
                className="btn-right-up"
                onClick={() => onHandleChangeNumReal('incr')}
            />
        </div>
    );
};

const Product = ({
    index,
    _id,
    code,
    name,
    unit,
    inventory,
    numReal,
    numDiff,
    valueDiff,
}) => {
    let productID = _id;

    const { removeProduct } = useContext(StockTakesContext);

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
                    onClick={()=>removeProduct(productID)}
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
            <Col span={2} style={styleChildCol.textCenter}>
                {unit}
            </Col>
            <Col span={2} style={styleChildCol.textCenter}>
                {inventory}
            </Col>
            <Col span={3} style={styleChildCol.textCenter}>
                <InputNumReal value={numReal} productID={productID} />
            </Col>
            <Col span={2} style={styleChildCol.textRight}>
                <TextPrice value={numDiff} />
            </Col>
            <Col span={3} style={styleChildCol.textRight}>
                <TextPrice value={valueDiff} />
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
