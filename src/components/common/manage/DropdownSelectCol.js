import { useState, useContext } from 'react';
import { Checkbox, Row, Col } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import ManageContext from 'contexts/createContext/ManageContext';

import '../styles/dropdown.scss';

const compare = (a, b) => {
	if (a.index < b.index) {
		return -1;
	}
	if (a.index > b.index) {
		return 1;
	}
	return 0;
};

const sortKey = (keys) => {
	keys = keys.map((key) => ({
		label: key.split(':')[0],
		index: parseInt(key.split(':')[1]),
	}));

	keys.sort(compare);

	let sortedKey = keys.map((key) => key.label + ':' + key.index);

	return sortedKey;
};

const Dropdown = ({ data, width }) => {
	const { changeKeyOfCols, keyOfCols } = useContext(ManageContext);

	const { Group } = Checkbox;
	let dataLeft = [];
	let dataRight = [];

	if (data.length > 0 && data.length % 2 == 0) {
		dataLeft = data.slice(0, data.length / 2);
		dataRight = data.slice(data.length / 2);
	}

	if (data.length > 0 && data.length % 2 != 0) {
		dataLeft = data.slice(0, (data.length + 1) / 2);
		dataRight = data.slice((data.length + 1) / 2);
	}

	const onChange = (values) => {
		let keys = sortKey(values);
		changeKeyOfCols(keys)
	};

	return (
		<div className="dropdown" style={{ width: width + 'rem' }}>
			{data.length > 0 ? (
				<Group defaultValue={keyOfCols} onChange={onChange}>
					<Row>
						<Col span={12}>
							<Row gutter={[0, 12]}>
								{dataLeft.map((item, index) => (
									<Col span={24} key={index}>
										<Checkbox
											value={item.key}
											key={item.key}
										>
											{item.title}
										</Checkbox>
									</Col>
								))}
							</Row>
						</Col>
						<Col span={12}>
							<Row gutter={[0, 12]}>
								{dataRight.map((item, index) => (
									<Col span={24} key={index}>
										<Checkbox
											value={item.key}
											key={item.key}
										>
											{item.title}
										</Checkbox>
									</Col>
								))}
							</Row>
						</Col>
					</Row>
				</Group>
			) : null}
		</div>
	);
};

const DropdownSelectCol = ({ data, width }) => {
	const [visible, setVisible] = useState(false);
	return (
		<div className="dropdown-select-col">
			<ButtonCustom
				text=""
				icon={<Icon className="ri-grid-fill" />}
				isSuffix
				style={{ width: '3.5rem' }}
				onClick={() => setVisible(!visible)}
			/>
			{visible ? (
				<Dropdown
					data={data || []}
					width={width || 0}
				/>
			) : null}
		</div>
	);
};

export default DropdownSelectCol;
