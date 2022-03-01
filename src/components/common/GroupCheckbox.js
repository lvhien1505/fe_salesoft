import { Row, Col, Checkbox } from 'antd';
import PropTypes from 'prop-types';

const GroupCheckbox = ({ data, defaultValue, onHandleChange }) => {
	const { Group } = Checkbox;

	return (
		<Group
			defaultValue={defaultValue}
			onChange={(e) => onHandleChange(e.target.value)}
		>
			<Row gutter={[8, 8]}>
				{data.map((checkbox, key) => (
					<Col span={24} key={key}>
						<Checkbox value={checkbox.value}>{checkbox.label}</Checkbox>
					</Col>
				))}
			</Row>
		</Group>
	);
};

GroupCheckbox.defaultProps = {
	data: [],
};

GroupCheckbox.propTypes = {
	data: PropTypes.array,
	onHandleChange: PropTypes.func,
};

export default GroupCheckbox;
