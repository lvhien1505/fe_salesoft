import { useContext, useRef } from 'react';
import { Row, Col } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import { InputNumber, InputTextArea } from 'components/ui/input/Input';
import TextPrice from 'components/common/TextPrice';
import DatePicker from 'components/common/DatePicker';
import SceneReturnsContext from 'contexts/createContext/SceneReturnsContext';

const Field = ({ label, suffixLabel, children, styleLabel }) => {
    const style = {
        display: 'flex',
        justifyContent: 'flex-end',
    };
    return (
        <Col span={24}>
            <Row align="middle" justify="space-between" gutter={[0, 8]}>
                <Col span={12}>
                    <span style={styleLabel}>{label}</span>
                    {suffixLabel}
                </Col>
                <Col span={12} style={style}>
                    {children}
                </Col>
            </Row>
        </Col>
    );
};

const FieldFee = ({ fee, totalPrice }) => {
    const { changeFee } = useContext(SceneReturnsContext);

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
                    value={fee}
                    style={{ color: '#4bac4d', fontWeight: '600' }}
                    onValueChange={(values) => onChangeValue(values.floatValue)}
                    size="large"
                />
            </div>
        </Field>
    );
};

const Calculation = ({
    nameBill,
    products,
    totalValueInvoice,
    totalPrice,
    fee,
    totalPayment,
    totalPaid,
    change,
}) => {
    let inputRef = useRef();
    const styleBtn = {
        width: '100%',
        padding: '1.25rem 0',
        borderRadius: '0.25rem',
    };

    const { changeTotalPaid } = useContext(SceneReturnsContext);

    const onChangeValue = (value) => {
        if (value <= 0 || isNaN(value)) {
            value = 0;
        }
        changeTotalPaid(value);
    };

    const onFinish = () => {
        console.log(
            products,
            totalPrice,
            fee,
            totalPayment,
            totalPaid,
            change,
            inputRef.current.input.value
        );
    };

    return (
        <Row gutter={[0, 16]}>
            <Field label={<ButtonCustom type="secondary" text={nameBill} />}>
                <DatePicker
                    defaultDate={'12-06-1998 12:07'}
                    ref={inputRef}
                    showTime={true}
                    isCustom={true}
                />
            </Field>
            <Field label="Bảng giá">
                <span>Bảng giá chung</span>
            </Field>
            <Field label="Khách hàng">
                <span>Transang</span>
            </Field>
            <Field label="Tổng giá trị hóa đơn">
                <span style={{ fontWeight: '600' }}>
                    <TextPrice value={totalValueInvoice} />
                </span>
            </Field>
            <Field label="Tổng tiền hàng trả" styleLabel={{ fontWeight: 600 }}>
                <span style={{ fontWeight: '600', color: '#237fcd' }}>
                    <TextPrice value={totalPrice} />
                </span>
            </Field>
            <FieldFee fee={fee} totalPrice={totalPrice} />
            <Field label="Cần trả khách" styleLabel={{ fontWeight: 600 }}>
                <span style={{ fontWeight: '600' }}>
                    <TextPrice value={totalPayment} />
                </span>
            </Field>
            <Field label="Tiền trả khách">
                <InputNumber
                    value={totalPaid || 0}
                    style={{ color: '#4bac4d', fontWeight: '600' }}
                    onValueChange={(values) => onChangeValue(values.floatValue)}
                    size="large"
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
                    <Col span={12}>
                        <ButtonCustom
                            text="TRẢ HÀNG & IN"
                            style={styleBtn}
                            type={'secondary'}
                        />
                    </Col>
                    <Col span={12}>
                        <ButtonCustom
                            text="TRẢ HÀNG"
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
