import { Input } from 'antd';
import InputNumberFormat from 'react-currency-format';
import './input.scss';

const InputString = ({ size, ...rest }) => {
    return (
        <Input
            {...rest}
            bordered={false}
            size={size || 'large'}
            className="input--format"
        />
    );
};

const InputPassword = ({ size, ...rest }) => {
    return (
        <Input.Password
            {...rest}
            bordered={false}
            size={size || 'large'}
            className="input--format"
        />
    );
};

const InputNumber = ({ ...rest }) => {
    return (
        <InputNumberFormat
            className="ant-input ant-input-lg ant-input-borderless input--format input-number--format"
            thousandSeparator={true}
            {...rest}
        />
    );
};

export { InputString, InputPassword, InputNumber };
