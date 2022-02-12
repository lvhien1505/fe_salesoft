import { useContext } from 'react';
import { Row, Col, Image } from 'antd';
import PropTypes from 'prop-types';
import SaleContext from 'contexts/createContext/SaleContext';
import TextPrice from 'components/common/TextPrice';

const Product = ({ _id, srcImg, name, price }) => {
	const state = useContext(SaleContext);
	const { addProduct } = state;

	return (
		<Col className="product" onClick={() => addProduct({ _id,name, price })}>
			<Row>
				<Col>
					<Image preview={false} width={'4rem'} src={srcImg} />
				</Col>
				<Col>
					<div className="product__info">
						<span>{name}</span>
						<span>
							<TextPrice value={price} />
						</span>
					</div>
				</Col>
			</Row>
		</Col>
	);
};

Product.defaultProps = {
	srcImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
	name: '',
	price: 0,
};

Product.propTypes = {
	srcImg: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
};

export default Product;
