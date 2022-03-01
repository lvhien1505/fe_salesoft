import { useState, useRef, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Modal, Space } from 'antd';
import {
    FieldInput,
    FieldRadio,
    FieldSelect,
} from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import DatePicker from 'components/common/DatePicker';
import Icon from 'components/ui/icon/Icon';
import {
    AutoCompleteCity,
    AutoCompleteDistrict,
    AutoCompleteSubDistrict,
} from 'components/auto-complete/AutoCompleteAddress';
import CustomerContext from 'contexts/createContext/CustomerContext';

const FakeContext = createContext({});

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

const ModalCustomer = ({
    type,
    withContext,
    customerUpdated,
    visible,
    onCancel,
    ...rest
}) => {
    const { useForm } = Form;
    let dateRef = useRef();
    let action = null;
    let state = useContext(withContext ? CustomerContext : FakeContext);
    if (withContext) {
        action = state.createCustomer;
    } else {
        action = (values) => {
            console.log(values);
        };
    }
    const [formCustomer] = useForm();
    const [typeCustomer, setTypeCustomer] = useState(
        type === 'update' ? customerUpdated.type : 'person'
    );
    const [citySelected, setCitySelected] = useState(
        type === 'update' ? customerUpdated.city : ''
    );
    const [districtSelected, setDistrictSelected] = useState(
        type === 'update' ? customerUpdated.district : ''
    );
    const [subDistrictSelected, setSubDistrictSelected] = useState(
        type === 'update' ? customerUpdated.subDistrict : ''
    );
    const [cityCodeSelected, setCityCodeSelected] = useState('');
    const [districtCodeSelected, setDistrictCodeSelected] = useState('');

    const dataCustomerType = [
        { label: 'Cá nhân', value: 'person' },
        { label: 'Công ty', value: 'company' },
    ];

    const dataCustomerSex = [
        { label: 'Nam', value: 'male' },
        { label: 'Nữ', value: 'female' },
    ];

    const convertDate = (dateString) => {
        if (!dateString) {
            return null;
        }
        return dateString.split('/').join('-');
    };

    const onSelectCity = (value, option) => {
        setCityCodeSelected(option.code);
        setCitySelected(value);
    };

    const onSelectDistrict = (value, option) => {
        setDistrictCodeSelected(option.code);
        setDistrictSelected(value);
    };

    const onSelectSubDistrict = (value, option) => {
        setSubDistrictSelected(value);
    };

    const onChangeTypeCustomer = (e) => {
        setTypeCustomer(e.target.value);
    };

    const onSumitForm = () => {
        formCustomer.submit();
    };

    const onFinishForm = async (values) => {
        values.birthday = dateRef.current.input.value;
        values.city = citySelected;
        values.district = districtSelected;
        values.subDistrict = subDistrictSelected;
        values.phone = [values.phone1, values.phone2];

        action(values);
        onCancel();
    };

    return (
        <Modal
            title={
                type === 'add'
                    ? 'Thêm khách hàng'
                    : `Cập nhật ${customerUpdated.code}`
            }
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={900}
            centered
            bodyStyle={{ paddingTop: '0.5rem' }}
            {...rest}
        >
            <Form
                form={formCustomer}
                onFinish={onFinishForm}
                initialValues={{
                    sex: 'male',
                    type: 'person',
                }}
            >
                <Row justify="space-between" gutter={[36, 8]}>
                    <Col span={12}>
                        <FieldInput
                            label="Tên khách hàng"
                            name="name"
                            initialValue={
                                type === 'update' ? customerUpdated.name : ''
                            }
                        />
                        <FieldInput
                            label="Điện thoại"
                            name="phone1"
                            initialValue={
                                type === 'update'
                                    ? customerUpdated.phone[0]
                                    : ''
                            }
                        />
                        <FieldInput
                            label=""
                            name="phone2"
                            initialValue={
                                type === 'update'
                                    ? customerUpdated.phone[1]
                                    : ''
                            }
                        />
                        <FieldCustom label="Ngày sinh">
                            <DatePicker
                                isCustom={false}
                                withPortal={false}
                                dateFormat="dd/MM/yyyy"
                                defaultDate={
                                    type === 'update'
                                        ? convertDate(customerUpdated.birthday)
                                        : null
                                }
                                ref={dateRef}
                            />
                        </FieldCustom>
                        <FieldInput
                            label="Địa chỉ"
                            name="address"
                            initialValue={
                                type === 'update' ? customerUpdated.address : ''
                            }
                        />
                        <FieldCustom label="Tỉnh/Thành phố">
                            <AutoCompleteCity
                                onSelect={onSelectCity}
                                defaultValue={citySelected}
                            />
                        </FieldCustom>
                        <FieldCustom label="Quận/Huyện">
                            <AutoCompleteDistrict
                                parentCode={cityCodeSelected}
                                onSelect={onSelectDistrict}
                                defaultValue={districtSelected}
                            />
                        </FieldCustom>

                        <FieldCustom label="Phường/Xã">
                            <AutoCompleteSubDistrict
                                parentCode={districtCodeSelected}
                                onSelect={onSelectSubDistrict}
                                defaultValue={subDistrictSelected}
                            />
                        </FieldCustom>
                    </Col>
                    <Col span={12}>
                        <FieldRadio
                            initialValue={
                                type === 'update' ? customerUpdated.sex : 'male'
                            }
                            label="Giới tính"
                            name="sex"
                            data={dataCustomerSex}
                        />

                        <FieldRadio
                            initialValue={
                                type === 'update'
                                    ? customerUpdated.type
                                    : 'person'
                            }
                            label="Loại khách hàng"
                            name="type"
                            data={dataCustomerType}
                            onChange={onChangeTypeCustomer}
                        />
                        {typeCustomer === 'company' ? (
                            <FieldInput
                                label="Công ty"
                                name="company"
                                initialValue={
                                    type === 'update'
                                        ? customerUpdated.company
                                        : 'person'
                                }
                            />
                        ) : null}
                        <FieldInput
                            label="Mã số thuế"
                            name="taxCode"
                            initialValue={
                                type === 'update' ? customerUpdated.taxCode : ''
                            }
                        />
                        <FieldInput
                            label="Email"
                            name="email"
                            initialValue={
                                type === 'update' ? customerUpdated.email : ''
                            }
                        />
                        <FieldInput
                            label="Facebook"
                            name="facebook"
                            initialValue={
                                type === 'update'
                                    ? customerUpdated.facebook
                                    : ''
                            }
                        />
                        <FieldSelect label="Nhóm" name="group" />
                        <FieldInput
                            label="Ghi chú"
                            name="note"
                            initialValue={
                                type === 'update' ? customerUpdated.note : ''
                            }
                        />
                    </Col>
                </Row>
            </Form>
            <Row justify="end" style={{ marginTop: '1rem' }}>
                <Space>
                    <ButtonCustom
                        text="Hủy bỏ"
                        type="danger"
                        onClick={onCancel}
                    />
                    <ButtonCustom text="Cập nhật" onClick={onSumitForm} />
                </Space>
            </Row>
        </Modal>
    );
};

const BtnActiveModalCustomer = ({
    text,
    withContext,
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
            {visible ? (
                <ModalCustomer
                    type="add"
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    withContext={withContext}
                />
            ) : null}
        </>
    );
};

BtnActiveModalCustomer.defaultProps = {
    withContext: true,
};

BtnActiveModalCustomer.propTypes = {
    withContext: PropTypes.bool,
};

ModalCustomer.defaultProps = {
    customerUpdated: {},
};

ModalCustomer.propTypes = {
    customerUpdated: PropTypes.object,
};

export { ModalCustomer };

export default BtnActiveModalCustomer;
