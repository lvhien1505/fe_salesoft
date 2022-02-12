import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import CardFilter from 'components/common/CardFilter';

const Filter = () => {
	return (
		<Row gutter={[0, 16]}>
			<Col span={24}>
				<CardFilter title="Nhóm NCC"></CardFilter>
			</Col>
			<Col span={24}>
				<CardFilter title="Tổng mua"></CardFilter>
			</Col>
			<Col span={24}>
				<CardFilter title="Nợ hiện tại"></CardFilter>
			</Col>
			<Col span={24}>
				<CardFilter title="Trạng thái"></CardFilter>
			</Col>
			<Col span={24}>
				<CardFilter title="Số bản ghi"></CardFilter>
			</Col>
		</Row>
	);
};

export default Filter;
