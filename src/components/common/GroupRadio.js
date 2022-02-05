import { Row, Col, Radio } from 'antd';
import PropTypes from 'prop-types';

const GroupRadio = ({ data, defaultValue, onHandleChange }) => {
	const { Group } = Radio;

	return (
		<Group
			defaultValue={defaultValue}
			onChange={(e) => onHandleChange(e.target.value)}
		>
			<Row gutter={[0, 4]}>
				{data.map((radio, key) => (
					<Col span={24} key={key}>
						<Radio value={radio.value}>{radio.label}</Radio>
					</Col>
				))}
			</Row>
		</Group>
	);
};

GroupRadio.defaultProps = {
	data: [],
};

GroupRadio.propTypes = {
	data: PropTypes.array,
	onHandleChange: PropTypes.func,
};

export default GroupRadio;
