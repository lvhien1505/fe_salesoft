import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import CardFilter from 'components/common/CardFilter';
import Select from 'components/ui/select/Select';
import Icon from 'components/ui/icon/Icon';
import Record from 'components/common/manage/Record';

const FilterGroupCustomer = () => {
    return (
        <CardFilter
            title="Nhóm khách hàng"
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
    const dataTypeCustomer = [
        { label: 'Tất cả', value: 'all' },
        { label: 'Cá nhân', value: 'person' },
        { label: 'Công ty', value: 'company' },
    ];

    const dataSex = [
        { label: 'Tất cả', value: 'all' },
        { label: 'Nam', value: 'male' },
        { label: 'Nữ', value: 'female' },
    ];

    const dataStatus = [
        { label: 'Tất cả', value: 'all' },
        { label: 'Đang hoạt động', value: 'active' },
        { label: 'Ngừng hoạt động', value: 'inactive' },
    ];
    return (
        <Row gutter={[0, 16]}>
            <Col span={24}>
                <FilterGroupCustomer />
            </Col>
            <Col span={24}>
                <CardFilter title="Ngày tạo"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Sinh nhật"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Ngày giao dịch cuối"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Tổng bán"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Nợ hiện tại"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Loại khách">
                    <GroupRadio data={dataTypeCustomer} defaultValue="all" />
                </CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Giới tính">
                    <GroupRadio data={dataSex} defaultValue="all" />
                </CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Địa chỉ"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Trạng thái">
                    <GroupRadio data={dataStatus} defaultValue="active" />
                </CardFilter>
            </Col>
            <Col span={24}>
                <Record/>
            </Col>
        </Row>
    );
};

export default Filter;
