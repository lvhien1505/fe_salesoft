import { Input } from 'antd';
import InputNumberFormat from 'react-currency-format';
import Icon from 'components/ui/icon/Icon';
import './input.scss';

const InputString = ({ size, ...rest }) => {
    return (
        <Input
            bordered={false}
            size={size || 'large'}
            className="input--format"
            {...rest}
        />
    );
};

const InputPassword = ({ size, ...rest }) => {
    return (
        <Input.Password
            bordered={false}
            size={size || 'large'}
            className="input--format"
            {...rest}
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

const InputTextArea = ({ size, ...rest }) => {
    return (
        <div className="textarea--format">
            <div className='icon'>
                <Icon className="ri-pencil-fill"/>
            </div>
            <Input.TextArea
                bordered={false}
                size={size || 'large'}
                autoSize={{ minRows: 1, maxRows: 5 }}
                className="input--format"
                {...rest}
            />
        </div>
    );
};

export { InputString, InputPassword, InputNumber, InputTextArea };
