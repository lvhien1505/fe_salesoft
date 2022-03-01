import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import CardFilter from 'components/common/CardFilter';
import Select from 'components/ui/select/Select';
import Icon from 'components/ui/icon/Icon';
import Record from 'components/common/manage/Record';

const FilterGroupSupplier = () => {
    return (
        <CardFilter
            title="Nhóm nhà cung cấp"
            suffix={<Icon className="ri-add-circle-line" />}
        >
            <Select
                style={{ width: '100%' }}
                placeholder="Tất cả các nhóm"
                suffixIcon={false}
            />
        </CardFilter>
    );
};

const Filter = () => {
	const dataStatus = [
        { label: 'Tất cả', value: 'all' },
        { label: 'Đang hoạt động', value: 'active' },
        { label: 'Ngừng hoạt động', value: 'inactive' },
    ];

	return (
		<Row gutter={[0, 16]}>
			<Col span={24}>
				<FilterGroupSupplier/>
			</Col>
			<Col span={24}>
				<CardFilter title="Tổng mua"></CardFilter>
			</Col>
			<Col span={24}>
				<CardFilter title="Nợ hiện tại"></CardFilter>
			</Col>
			<Col span={24}>
				<CardFilter title="Trạng thái">
					<GroupRadio data={dataStatus} defaultValue="active"/>
				</CardFilter>
			</Col>
			<Col span={24}>
				<Record/>
			</Col>
		</Row>
	);
};

export default Filter;
