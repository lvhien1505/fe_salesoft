import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import CardFilter from 'components/common/CardFilter';

const Filter = () => {
    return (
        <Row gutter={[0, 16]}>
            <Col span={24}>
                <CardFilter title="Tổng quan"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Thời gian"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Loại chứng từ"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Loại thu chi"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Trạng thái"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Kết quả kinh doanh"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Đối tượng nộp nhận"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Số bản ghi"></CardFilter>
            </Col>
        </Row>
    );
};

export default Filter;
