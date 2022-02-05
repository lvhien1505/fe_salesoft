import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import CardFilter from 'components/common/CardFilter';

const Filter = () => {
    return (
        <Row gutter={[0, 16]}>
            <Col span={24}>
                <CardFilter title="Loại hàng"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Nhóm hàng"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Tồn kho"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Ngày dự kiến hết hàng"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Nhà cung cấp"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Lựa chọn hiển thị"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Số bản ghi"></CardFilter>
            </Col>
        </Row>
    );
};

export default Filter;
