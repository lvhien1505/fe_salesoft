import { Select } from 'antd';

import './select.scss';

const SelectCustom = ({ size, options, ...rest }) => {
    return (
        <Select
            options={options || []}
            bordered={false}
            size={size || 'small'}
            {...rest}
        />
    );
};

export default SelectCustom;
