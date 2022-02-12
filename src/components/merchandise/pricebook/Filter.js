import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import CardFilter from 'components/common/CardFilter';

const Filter = () => {
    return (
        <Row gutter={[0, 16]}>
            <Col span={24}>
                <CardFilter title="Bảng giá"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Nhóm hàng"></CardFilter>
            </Col>
			<Col span={24}>
                <CardFilter title="Giá bán"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Số bản ghi"></CardFilter>
            </Col>
        </Row>
    );
};

export default Filter;
