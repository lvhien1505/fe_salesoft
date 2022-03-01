import { useContext, useRef } from 'react';
import { Row, Col } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import { InputNumber, InputTextArea } from 'components/ui/input/Input';
import AutoCompleteCustomer from 'components/auto-complete/AutoCompleteCustomer';
import TextPrice from 'components/common/TextPrice';
import DatePicker from 'components/common/DatePicker';
import SaleContext from 'contexts/createContext/SaleContext';

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

const FieldDiscount = ({ valueSaleOff, totalPrice }) => {
    const { changeValueSaleOff } = useContext(SaleContext);

    const onChangeValue = (value) => {
        if (value <= 0 || isNaN(value)) {
            value = 0;
        }
        if (value >= totalPrice) {
            return changeValueSaleOff(totalPrice);
        }
        changeValueSaleOff(value);
    };

    return (
        <Field label="Giảm giá">
            <div style={{ position: 'relative' }}>
                <InputNumber
                    value={valueSaleOff}
                    style={{ color: '#4bac4d', fontWeight: '600' }}
                    onValueChange={(values) => onChangeValue(values.floatValue)}
                    size="large"
                />
            </div>
        </Field>
    );
};

const SaleCalculation = ({
    nameBill,
    products,
    totalPrice,
    valueSaleOff,
    totalPayment,
    totalPaid,
    change,
}) => {
    let dateRef = useRef();
    const styleBtn = {
        width: '100%',
        padding: '1.25rem 0',
        borderRadius: '0.25rem',
    };

    const { changeValuePayment } = useContext(SaleContext);

    const onChangeValue = (value) => {
        if (value <= 0 || isNaN(value)) {
            value = 0;
        }
        changeValuePayment(value);
    };

    const onFinish = () => {
        console.log(
            products,
            totalPrice,
            valueSaleOff,
            totalPayment,
            totalPaid,
            change,
            dateRef.current.input.value
        );
    };

    return (
        <Row gutter={[0, 16]}>
            <Field label={<ButtonCustom type="secondary" text={nameBill} />}>
                <DatePicker
                    defaultDate={'12-06-1998 12:07'}
                    dateFormat="dd/MM/yyyy HH:mm"
                    ref={dateRef}
                    showTime={true}
                    isCustom={true}
                />
            </Field>
            <Field label="Bảng giá">
                <span>Bảng giá chung</span>
            </Field>
            <Col span={24}>
              <AutoCompleteCustomer />
            </Col>
            <Field label="Tổng tiền hàng" styleLabel={{ fontWeight: 600 }}>
                <span style={{ fontWeight: '600', color: '#237fcd' }}>
                    <TextPrice value={totalPrice} />
                </span>
            </Field>
            <FieldDiscount
                valueSaleOff={valueSaleOff}
                totalPrice={totalPrice}
            />
            <Field label="Khách cần trả" styleLabel={{ fontWeight: 600 }}>
                <span style={{ fontWeight: '600' }}>
                    <TextPrice value={totalPayment} />
                </span>
            </Field>
            <Field label="Thanh toán">
                <InputNumber
                    value={totalPaid || 0}
                    style={{ color: '#4bac4d', fontWeight: '600' }}
                    onValueChange={(values) => onChangeValue(values.floatValue)}
                    size="large"
                />
            </Field>
            <Field label={change >= 0 ? 'Tiền thừa' : 'Khách thiếu'}>
                <span>
                    <TextPrice value={change >= 0 ? change : -change} />
                </span>
            </Field>
            <Col span={24}>
                <InputTextArea placeholder="Ghi chú" size="small" />
            </Col>
            <Col span={24}>
                <Row align="middle" gutter={[8, 8]}>
                    <Col span={12}>
                        <ButtonCustom
                            text="THANH TOÁN & IN"
                            style={styleBtn}
                            type={'secondary'}
                        />
                    </Col>
                    <Col span={12}>
                        <ButtonCustom
                            text="THANH TOÁN"
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
