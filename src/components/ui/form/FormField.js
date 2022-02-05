import { Row, Col, Form } from 'antd';
import { InputString, InputNumber } from 'components/ui/input/Input';
import Select from 'components/ui/select/Select';
import PropTypes from 'prop-types';

const FormField = ({ label, name, spans, styles, children }) => {
	const { Item } = Form;
	styles.marginBottom = '0.5rem';

	return (
		<Item name={name} style={styles}>
			<Row gutter={[16, 8]} align="middle">
				<Col span={spans[0]}>
					<span style={{ fontWeight: 600 }}>{label}</span>
				</Col>
				<Col span={spans[1]}>{children}</Col>
			</Row>
		</Item>
	);
};

const FieldInput = ({ ...rest }) => {
	return (
		<FormField {...rest}>
			<InputString />
		</FormField>
	);
};

const FieldInputNumber = ({ ...rest }) => {
	return (
		<FormField {...rest}>
			<InputNumber />
		</FormField>
	);
};

const FieldSelect = ({ ...rest }) => {
	return (
		<FormField {...rest}>
			<Select showArrow={false}/>
		</FormField>
	);
};

FormField.defaultProps = {
	styles: {},
	spans: [8, 16],
};

FormField.propTypes = {
	styles: PropTypes.object,
	spans: PropTypes.array,
};

export { FieldInput, FieldInputNumber, FieldSelect };
