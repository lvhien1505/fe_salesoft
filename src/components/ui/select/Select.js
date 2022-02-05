import { Select } from 'antd';

import './select.scss'

const SelectCustom = ({ options, ...rest }) => {
	return <Select options={options || []} bordered={false} {...rest}/>;
};

export default SelectCustom;
