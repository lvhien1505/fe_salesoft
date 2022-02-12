import { Row, Col } from 'antd';
import Product from './Product';
import PropTypes from 'prop-types';

const ListHeader = () => {
	const styleRowHeader = {
		border: '1px solid #dee2e6',
		padding: '0.75rem 0',
		backgroundColor: '#dee2e6',
		borderRadius: '0.25rem',
	};
	const styleChildCol = {
		textCenter: {
			textAlign: 'center',
			fontWeight: 600,
		},
		textLeft: {
			textAlign: 'left',
			fontWeight: 600,
		},
	};
	return (
		<Row style={styleRowHeader}>
			<Col span={2} style={styleChildCol.textCenter}>
				STT
			</Col>
			<Col span={2} style={styleChildCol.textCenter}></Col>
			<Col span={10} style={styleChildCol.textLeft}>
				Tên sản phẩm
			</Col>
			<Col span={3} style={styleChildCol.textCenter}>
				Số lượng
			</Col>
			<Col span={4} style={styleChildCol.textCenter}>
				Giá bán
			</Col>
			<Col span={3} style={styleChildCol.textCenter}>
				Tổng giá
			</Col>
		</Row>
	);
};
const ListProduct = ({ dataSource }) => {
	return (
		<>
			<ListHeader />
			{Array.isArray(dataSource)
				? dataSource.map((data, key) => (
						<Product index={key + 1} {...data} key={key} />
				  )).reverse()
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
