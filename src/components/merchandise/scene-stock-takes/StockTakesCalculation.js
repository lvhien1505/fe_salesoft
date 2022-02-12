import { useContext, useRef } from 'react';
import { Row, Col, Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import { InputTextArea } from 'components/ui/input/Input';
import TextPrice from 'components/common/TextPrice';
import DatePicker from 'components/common/DatePicker';

const Field = ({ label, suffixLabel, children, styleLabel }) => {
    styleLabel = { fontSize: '0.875rem', ...styleLabel };
    const style = {
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: '0.875rem',
    };

    const styleSuffix = {
        fontSize: '0.875rem',
    };
    return (
        <Col span={24}>
            <Row align="middle" justify="space-between" gutter={[0, 8]}>
                <Col >
                    <Space>
                        <span style={styleLabel}>{label}</span>
                        {suffixLabel ? (
                            <span style={styleSuffix}>({suffixLabel})</span>
                        ) : null}
                    </Space>
                </Col>
                <Col style={style}>
                    {children}
                </Col>
            </Row>
        </Col>
    );
};

const SaleCalculation = ({
    typeShow,
    totalNumReal,
    totalNumDiffIncr,
    totalValueDiffIncr,
    totalNumDiffDesc,
    totalValueDiffDesc,
    totalValueDiff,
}) => {
    let inputRef = useRef();
    const styleBtn = {
        width: '100%',
        padding: '1.25rem 0',
        borderRadius: '0.25rem',
    };

    const onFinish = () => {
        console.log(inputRef.current.input.value);
    };

    return (
        <Row gutter={[0, 16]}>
            <Field label="Ngày kiểm">
                <DatePicker defaultDate={'12-06-1998 12:07'} ref={inputRef} />
            </Field>
            <Field label="Mã kiểm kho">
                <span>0</span>
            </Field>
            <Field label="Trạng thái">
                <span>Phiếu tạm</span>
            </Field>
            {typeShow === 'all' || typeShow === 'compare' ? (
                <Field label="Tổng SL thực tế">
                    <span>
                        <TextPrice value={totalNumReal} />
                    </span>
                </Field>
            ) : (
                <>
                    <Field
                        label="Tổng lệch tăng"
                        suffixLabel={totalNumDiffIncr}
                    >
                        <span>
                            <TextPrice value={totalValueDiffIncr} />
                        </span>
                    </Field>
                    <Field
                        label="Tổng lệch giảm"
                        suffixLabel={totalNumDiffDesc}
                    >
                        <span>
                            <TextPrice value={totalValueDiffDesc} />
                        </span>
                    </Field>
                    <Field label="Tổng chênh lệch">
                        <span>
                            <TextPrice value={totalValueDiff} />
                        </span>
                    </Field>
                </>
            )}

            <Col span={24}>
                <InputTextArea placeholder="Ghi chú" size="small" />
            </Col>
            <Col span={24}>
                <Row align="middle" gutter={[8, 8]}>
                    <Col span={8}>
                        <ButtonCustom
                            text="Lưu tạm"
                            style={styleBtn}
                            type={'secondary'}
                        />
                    </Col>
                    <Col span={16}>
                        <ButtonCustom
                            text="Hoàn thành"
                            style={styleBtn}
                            type={'primary'}
                            onClick={onFinish}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default SaleCalculation;
