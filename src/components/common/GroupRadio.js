import { Row, Col, Radio } from 'antd';
import PropTypes from 'prop-types';

const GroupRadio = ({ data, defaultValue, onHandleChange, direction,span }) => {
    const { Group } = Radio;

    return (
        <Group
            defaultValue={defaultValue}
            onChange={(e) => onHandleChange(e.target.value)}
        >
            <Row gutter={[8, 8]}>
                {data.map((radio, key) => (
                    <Col span={direction === 'vertical' ? 24 : span} key={key}>
                        <Radio value={radio.value}>{radio.label}</Radio>
                    </Col>
                ))}
            </Row>
        </Group>
    );
};

GroupRadio.defaultProps = {
    data: [],
    direction: 'vertical',
    span:4
};

GroupRadio.propTypes = {
    data: PropTypes.array,
    onHandleChange: PropTypes.func,
    direction: PropTypes.string,
    span: PropTypes.number,
};

export default GroupRadio;
