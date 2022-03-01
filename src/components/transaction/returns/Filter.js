import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import CardFilter from 'components/common/CardFilter';
import GroupCheckbox from 'components/common/GroupCheckbox';
import Record from 'components/common/manage/Record';

const Filter = () => {
	const dataStatus = [
        { label: 'Đã trả', value: 'done' },
        { label: 'Đã hủy', value: 'damage' },
    ];

	return (
		<Row gutter={[0, 16]}>
			<Col span={24}>
				<CardFilter title="Thời gian"></CardFilter>
			</Col>
			<Col span={24}>
				<CardFilter title="Trạng thái">
					<GroupCheckbox data={dataStatus} defaultValue={['done']}/>
				</CardFilter>
			</Col>
			<Col span={24}>
				<Record/>
			</Col>
		</Row>
	);
};

export default Filter;
