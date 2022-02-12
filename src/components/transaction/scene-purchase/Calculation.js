import { useContext, useRef } from 'react';
import { Row, Col, Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import { InputTextArea, InputNumber } from 'components/ui/input/Input';
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
                <Col span={10}>
                    <Space>
                        <span style={styleLabel}>{label}</span>
                        {suffixLabel ? (
                            <span style={styleSuffix}>({suffixLabel})</span>
                        ) : null}
                    </Space>
                </Col>
                <Col style={style} span={14}>
                    {children}
                </Col>
            </Row>
        </Col>
    );
};

const FieldDiscount = ({ valueSaleOff, totalPrice }) => {
    // const { changeValueSaleOff } = useContext(SaleContext);

    const styleBtn = {
        position: 'absolute',
        top: '7px',
        left: '-1px',
    };

    const onChangeValue = (value) => {
        // if (value <= 0 || isNaN(value)) {
        //     value = 0;
        // }
        // if (value >= totalPrice) {
        //     return changeValueSaleOff(totalPrice);
        // }
        // changeValueSaleOff(value);
    };

    return (
        <Field label="Giảm giá">
            <div style={{ position: 'relative' }}>
                <InputNumber
                    value={valueSaleOff}
                    style={{ color: '#4bac4d', fontWeight: '600' }}
                    onValueChange={(values) => onChangeValue(values.floatValue)}
                    size="small"
                />
                <ButtonCustom text={'VND'} style={styleBtn} />
            </div>
        </Field>
    );
};

const Calculation = ({
    totalPrice,
    saleOff,
    totalPayment,
    totalPaid,
    debt
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
            <Field label="Ngày nhập">
                <DatePicker defaultDate={'12-06-1998 12:07'} ref={inputRef} />
            </Field>
            <Field label="Mã phiếu nhập">
                <span>0</span>
            </Field>
            <Field label="Trạng thái">
                <span>Phiếu tạm</span>
            </Field>

            <Field label="Tổng tiền hàng" suffixLabel={0}>
                <span>
                    <TextPrice value={totalPrice} />
                </span>
            </Field>
            <FieldDiscount valueSaleOff={saleOff} totalPrice={totalPrice} />
            <Field label="Cần trả NCC">
                <span>
                    <TextPrice value={totalPayment} />
                </span>
            </Field>
            <Field label="Tiền trả NCC">
                <InputNumber
                    value={totalPaid}
                    style={{ color: '#4bac4d', fontWeight: '600' }}
                    /*onValueChange={(values) => onChangeValue(values.floatValue)}*/
                />
            </Field>
            <Field label="Tính vào công nợ">
                <span>
                    <TextPrice value={debt} />
                </span>
            </Field>
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

export default Calculation;
