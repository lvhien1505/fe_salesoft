import { useRef, useEffect } from 'react';
import { Row, Col, Form, Radio } from 'antd';
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

const FieldInput = ({ initialValue,placeholder, ...rest }) => {
    return (
        <FormField {...rest}>
            <InputString defaultValue={initialValue} size="small" placeholder={placeholder}/>
        </FormField>
    );
};

const FieldInputNumber = ({ initialValue, ...rest }) => {
    return (
        <FormField {...rest}>
            <InputNumber value={initialValue} />
        </FormField>
    );
};

const FieldSelect = ({options, value, onSelect, ...rest }) => {
    return (
        <FormField {...rest}>
            <Select
                showArrow={false}
                size="small"
                options={options || []}
                onSelect={onSelect}
                value={value || null}
                
            />
        </FormField>
    );
};

const FieldRadio = ({ data, initialValue, children, onChange, ...rest }) => {
    return (
        <FormField {...rest}>
            <Radio.Group
                options={data}
                defaultValue={initialValue}
                onChange={onChange}
            />
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

export { FieldInput, FieldInputNumber, FieldSelect, FieldRadio };
