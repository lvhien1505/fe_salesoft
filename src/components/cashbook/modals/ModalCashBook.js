import { useState, useRef } from 'react';
import { Row, Col, Form, Modal, Space } from 'antd';
import {
    FieldInput,
    FieldInputNumber,
    FieldRadio,
    FieldSelect,
} from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import DatePicker from 'components/common/DatePicker';
import AutoCompleteCustomer from 'components/auto-complete/AutoCompleteCustomer';
import AutoCompleteSupplier from 'components/auto-complete/AutoCompleteSupplier';
import ModalTarget from './ModalTarget';

const FieldCustom = ({ label, name, children }) => {
    const { Item } = Form;
    return (
        <Item style={{ marginBottom: '0.5rem' }} name={name}>
            <Row gutter={[16, 8]} align="middle">
                <Col span={8}>
                    <span style={{ fontWeight: 600 }}>{label}</span>
                </Col>
                <Col span={16}>{children}</Col>
            </Row>
        </Item>
    );
};

const ModalCashBook = ({ typeAction, visible, onCancel, ...rest }) => {
    const { useForm, Item } = Form;
    let dateRef = useRef();
    const [form] = useForm();
    const [methodPayment, setMethodPayment] = useState('money');
    const [target, setTarget] = useState({});
    const [targetSelected, setTargetSelected] = useState({});

    const dataMethodPayment = [
        { label: 'Tiền mặt', value: 'money' },
        { label: 'Ngân hàng', value: 'bank' },
    ];

    const dataTarget = [
        { label: 'Khách hàng', value: 'customer' },
        { label: 'Nhà cung cấp', value: 'supplier' },
        { label: 'Khác', value: 'other' },
    ];

    const onChangeMethodPayment = (e) => {
        setMethodPayment(e.target.value);
    };

    const onSelectTarget = (value, option) => {
        setTarget({ ...option });
    };

    const onFinishAddTarget = (values) => {
        setTargetSelected({ ...values });
    };

    const onSumitForm = () => {
        form.submit();
    };

    const onFinishForm = (values) => {
        console.log(values);
    };

    return (
        <Modal
            title={
                'Lập phiếu' +
                (typeAction === 'in' ? ' thu' : ' chi') +
                (methodPayment === 'money' ? ' (tiền mặt)' : ' (ngân hàng)')
            }
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={900}
            centered
            bodyStyle={{ paddingTop: '0.5rem' }}
            {...rest}
        >
            <Form form={form} onFinish={onFinishForm}>
                <Row justify="space-between" gutter={[24, 8]}>
                    <Col span={12}>
                        <FieldRadio
                            initialValue={methodPayment}
                            label="Phương thức TT"
                            name="methodPayment"
                            data={dataMethodPayment}
                            onChange={onChangeMethodPayment}
                        />
                        {methodPayment === 'bank' ? (
                            <>
                                <FieldInput label="Số TK" name="numberBank" />
                                <FieldInput
                                    label="Tên ngân hàng"
                                    name="nameBank"
                                />
                            </>
                        ) : null}
                        <FieldCustom label="Thời gian">
                            <DatePicker
                                isCustom={false}
                                withPortal={true}
                                dateFormat="dd/MM/yyyy HH:mm"
                                ref={dateRef}
                                showTime={true}
                            />
                        </FieldCustom>

                        <FieldInput
                            label={
                                'Loại' + (typeAction === 'in' ? ' thu' : ' chi')
                            }
                            name="address"
                        />
                        <FieldInputNumber
                            label="Giá trị"
                            name="value"
                            initialValue={0}
                        />
                    </Col>
                    <Col span={12}>
                        <FieldSelect
                            label={
                                'Đối tượng' +
                                (typeAction === 'in' ? ' nộp' : ' nhận')
                            }
                            name="name"
                            options={dataTarget}
                            value={target.value}
                            onSelect={onSelectTarget}
                        />
                        {target.value === 'customer' ? (
                            <FieldCustom
                                label={
                                    'Tên người' +
                                    (typeAction === 'in' ? ' nộp' : ' nhận')
                                }
                            >
                                <AutoCompleteCustomer
                                    placeholder={'Tìm khách hàng'}
                                    isSuffix={false}
                                />
                            </FieldCustom>
                        ) : null}

                        {target.value === 'supplier' ? (
                            <FieldCustom
                                label={
                                    'Tên người' +
                                    (typeAction === 'in' ? ' nộp' : ' nhận')
                                }
                            >
                                <AutoCompleteSupplier
                                    placeholder={'Tìm nhà cung cấp'}
                                    isSuffix={false}
                                />
                            </FieldCustom>
                        ) : null}

                        {target.value === 'other' ? (
                            <FieldCustom
                                label={
                                    'Tên người' +
                                    (typeAction === 'in' ? ' nộp' : ' nhận')
                                }
                            >
                                {targetSelected.name ? (
                                    <Space>
                                        <span>
                                            {targetSelected.name +
                                                (targetSelected.phone
                                                    ? ` - ${targetSelected.phone}`
                                                    : '')}
                                        </span>
                                        <ModalTarget
                                            text=""
                                            type="default"
                                            iconClassName="ri-pencil-line"
                                            onFinish={onFinishAddTarget}
                                            isUpdate={true}
                                            targetUpdated={targetSelected}
                                            style={{ width: '2rem' }}
                                        />
                                        <ButtonCustom
                                            text=""
                                            type="default"
                                            icon={
                                                <Icon className="ri-delete-bin-6-line" />
                                            }
                                            style={{ width: '2rem' }}
                                            onClick={() =>
                                                setTargetSelected({})
                                            }
                                        />
                                    </Space>
                                ) : (
                                    <ModalTarget
                                        text="Thêm"
                                        type="secondary"
                                        onFinish={onFinishAddTarget}
                                        typeAction={typeAction}
                                    />
                                )}
                            </FieldCustom>
                        ) : null}

                        <FieldInput label="Ghi chú" name="note" />
                    </Col>
                </Row>
                <Row justify="end" style={{ marginTop: '1rem' }}>
                    <Space>
                        <ButtonCustom
                            text="Bỏ qua"
                            type="danger"
                            onClick={onCancel}
                        />
                        <ButtonCustom text="Lưu" onClick={onSumitForm} />
                    </Space>
                </Row>
            </Form>
        </Modal>
    );
};

const BtnActiveModalCashIn = ({
    typeAction,
    text,
    iconClassName,
    type,
    ...rest
}) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <ButtonCustom
                text={text}
                icon={
                    <Icon
                        className={
                            iconClassName ? iconClassName : 'ri-add-line'
                        }
                    />
                }
                type={type}
                onClick={() => setVisible(true)}
                {...rest}
            />
            <ModalCashBook
                visible={visible}
                onCancel={() => setVisible(false)}
                typeAction={typeAction}
            />
        </>
    );
};

export default BtnActiveModalCashIn;
