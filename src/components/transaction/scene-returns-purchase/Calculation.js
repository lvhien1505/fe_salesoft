import { useContext, useRef } from 'react';
import { Row, Col, Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import { InputTextArea, InputNumber } from 'components/ui/input/Input';
import TextPrice from 'components/common/TextPrice';
import DatePicker from 'components/common/DatePicker';
import SceneReturnsPurchaseContext from 'contexts/createContext/SceneReturnsPurchaseContext';

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
    const { changeFee } = useContext(SceneReturnsPurchaseContext);

    const onChangeValue = (value) => {
        if (value <= 0 || isNaN(value)) {
            value = 0;
        }
        if (value >= totalPrice) {
            return changeFee(totalPrice);
        }
        changeFee(value);
    };

    return (
        <Field label="Phí trả hàng">
            <div style={{ position: 'relative' }}>
                <InputNumber
                    value={valueSaleOff}
                    style={{ color: '#4bac4d', fontWeight: '600' }}
                    onValueChange={(values) => onChangeValue(values.floatValue)}
                    size="small"
                />
            </div>
        </Field>
    );
};

const Calculation = ({
    totalValueInvoice,
    totalPrice,
    fee,
    totalPayment,
    totalPaid,
    change,
}) => {
    let inputRef = useRef();
    const { changeTotalPaid } = useContext(SceneReturnsPurchaseContext);
    const styleBtn = {
        width: '100%',
        padding: '1.25rem 0',
        borderRadius: '0.25rem',
    };

    const onChangeValue = (value) => {
        changeTotalPaid(value);
    };

    const onFinish = () => {
        console.log(inputRef.current.input.value);
    };

    return (
        <Row gutter={[0, 16]}>
            <Field label="Ngày trả hàng">
                <DatePicker defaultDate={'12-06-1998 12:07'} ref={inputRef} />
            </Field>
            <Field label="Nhà cung cấp">
                <span>0</span>
            </Field>
            <Field label="Trạng thái">
                <span>Phiếu tạm</span>
            </Field>

            <Field label="Tổng giá trị hóa đơn" suffixLabel={0}>
                <span style={{ fontWeight: 600 }}>
                    <TextPrice value={totalValueInvoice} />
                </span>
            </Field>
            <Field
                label="Tổng tiền hàng trả"
                suffixLabel={0}
                styleLabel={{ fontWeight: 600 }}
            >
                <span style={{ fontWeight: 600, color: '#237fcd' }}>
                    <TextPrice value={totalPrice} />
                </span>
            </Field>
            <FieldDiscount
                valueSaleOff={fee}
                totalPrice={totalPrice}
            />
            <Field label="NCC cần trả" styleLabel={{ fontWeight: 600 }}>
                <span style={{ fontWeight: 600 }}>
                    <TextPrice value={totalPayment} />
                </span>
            </Field>
            <Field label="Tiền NCC trả">
                <InputNumber
                    value={totalPaid}
                    style={{ color: '#4bac4d', fontWeight: '600' }}
                    onValueChange={(values) => onChangeValue(values.floatValue)}
                />
            </Field>
            <Field label="Tính vào công nợ">
                <span>
                    <TextPrice value={change} />
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
