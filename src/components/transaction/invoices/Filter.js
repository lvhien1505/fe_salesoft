import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import CardFilter from 'components/common/CardFilter';
import Record from 'components/common/manage/Record';
import GroupCheckbox from 'components/common/GroupCheckbox';
import Select from 'components/ui/select/Select';

const Filter = () => {
    const dataStatus = [
        { label: 'Hoàn thành', value: 'done' },
        { label: 'Đã hủy', value: 'damage' },
    ];
    const dataMethodPayment = [
        { label: 'Tiền mặt', value: 'money' },
        { label: 'Ngân hàng', value: 'bank' },
    ];

    return (
        <Row gutter={[0, 16]}>
            <Col span={24}>
                <CardFilter title="Thời gian"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Trạng thái">
                    <GroupCheckbox data={dataStatus} defaultValue={['done']} />
                </CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Phương thức">
                    <GroupRadio data={dataMethodPayment} defaultValue="money" />
                </CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Bảng giá">
                    <Select mode="multiple" style={{ width: '100%' }} placeholder="Chọn bảng giá"/>
                </CardFilter>
            </Col>
            <Col span={24}>
                <Record />
            </Col>
        </Row>
    );
};

export default Filter;
