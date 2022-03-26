import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import CardFilter from 'components/common/CardFilter';
import Record from 'components/common/manage/Record';

const Filter = () => {
    const dataStatus = [
        { label: 'Tất cả', value: 'all' },
        { label: 'Đang hoạt động', value: 'active' },
        { label: 'Ngừng hoạt động', value: 'inactive' },
    ];

    return (
        <Row gutter={[0, 16]}>
            <Col span={24}>
                <CardFilter title="Tổng mua"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Nợ hiện tại"></CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Trạng thái">
                    <GroupRadio data={dataStatus} defaultValue="active" />
                </CardFilter>
            </Col>
            <Col span={24}>
                <Record />
            </Col>
        </Row>
    );
};

export default Filter;
