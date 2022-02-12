import { useContext } from 'react';
import { Row, Col, Image } from 'antd';
import PropTypes from 'prop-types';
import ScenePurchaseContext from 'contexts/createContext/ScenePurchaseContext';
import TextPrice from 'components/common/TextPrice';

const Product = ({ _id, code, srcImg, name, costPrice, inventory }) => {
    const { addProduct } = useContext(ScenePurchaseContext);

    return (
        <Col
            className="product"
            title={`-- Tồn : ${inventory}`}
            onClick={() =>
                addProduct({ _id, code, name, inventory, costPrice })
            }
        >
            <Row>
                <Col>
                    <Image preview={false} width={'4rem'} src={srcImg} />
                </Col>
                <Col>
                    <div className="product__info">
                        <span>{name}</span>
                        <span>
                            <TextPrice value={costPrice} />
                        </span>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

Product.defaultProps = {
    code: '',
    srcImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: '',
    costPrice: 0,
    inventory: 0,
};

Product.propTypes = {
    code: PropTypes.string,
    srcImg: PropTypes.string,
    name: PropTypes.string,
    costPrice: PropTypes.number,
    inventory: PropTypes.number,
};

export default Product;
