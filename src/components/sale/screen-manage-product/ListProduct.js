import Product from './Product';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const ListProduct = ({ dataSource }) => {
	return (
		<>
			{Array.isArray(dataSource)
				? dataSource.map((data, key) => (
						<Product {...data} key={key}/>
				  ))
				: null}
		</>
	);
};

ListProduct.defaultProps = {
	dataSource: [],
};

ListProduct.propTypes = {
	dataSource: PropTypes.array,
};

export default ListProduct;
