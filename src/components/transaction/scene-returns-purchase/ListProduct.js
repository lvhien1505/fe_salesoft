import { Row, Col } from 'antd';
import Product from './Product';
import PropTypes from 'prop-types';

const ListHeader = () => {
	const styleRowHeader = {
		border: '1px solid #dee2e6',
		padding: '0.5rem 0.5rem 0.5rem 0',
		backgroundColor: '#dee2e6',
		borderRadius: '0.25rem',
	};
	const styleChildCol = {
		textCenter: {
			textAlign: 'center',
			fontWeight: 600,
			fontSize:'0.875rem'
		},
		textLeft: {
			textAlign: 'left',
			fontWeight: 600,
			fontSize:'0.875rem'
		},
		textRight: {
			textAlign: 'right',
			fontWeight: 600,
			fontSize:'0.875rem'
		},
	};
	return (
		<Row style={styleRowHeader}>
			<Col span={2} style={styleChildCol.textCenter}>
				STT
			</Col>
			<Col span={8} style={styleChildCol.textLeft}>
				Tên hàng
			</Col>
			<Col span={3} style={styleChildCol.textCenter}>
				ĐVT
			</Col>
			<Col span={2} style={styleChildCol.textCenter}>
               Tổng SL
            </Col>
			<Col span={3} style={styleChildCol.textCenter}>
				SL trả
			</Col>
			<Col span={3} style={styleChildCol.textRight}>
				Giá trả lại
			</Col>
			<Col span={3} style={styleChildCol.textRight}>
				Thành tiền
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
