import { useState, useRef, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Modal, Space } from 'antd';
import {
    FieldInput,
    FieldRadio,
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
import openNotification from 'helpers/notification';

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
    onFinishAdd,
    ...rest
}) => {
    const { useForm } = Form;
    let dateRef = useRef();
    let actionCreate = null;
    let actionUpdate = null;
    let state = useContext(withContext ? CustomerContext : FakeContext);
    const initialValueForm =
        type === 'update'
            ? {
                  phone1: customerUpdated.phone[0],
                  phone2: customerUpdated.phone[1],
                  ...customerUpdated,
              }
            : {
                  sex: 'male',
                  type: 'person',
              };
    if (withContext) {
        actionCreate = state.createCustomer;
        actionUpdate = state.updateCustomer;
    } else {
        actionCreate = onFinishAdd;
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
        { label: 'C?? nh??n', value: 'person' },
        { label: 'C??ng ty', value: 'company' },
    ];

    const dataCustomerSex = [
        { label: 'Nam', value: 'male' },
        { label: 'N???', value: 'female' },
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
        if (!values.name) {
            return openNotification('error', 'Vui l??ng nh???p t??n kh??ch h??ng');
        }
        if (type === 'add') {
            actionCreate(values);
        } else {
            values.code = customerUpdated.code;
            actionUpdate(customerUpdated._id, values);
        }
        onCancel();
    };

    return (
        <Modal
            title={
                type === 'add'
                    ? 'Th??m kh??ch h??ng'
                    : `C???p nh???t ${customerUpdated.code}`
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
                initialValues={initialValueForm}
            >
                <Row justify="space-between" gutter={[36, 8]}>
                    <Col span={12}>
                        <FieldInput
                            label="T??n kh??ch h??ng"
                            name="name"
                            initialValue={
                                type === 'update' ? customerUpdated.name : ''
                            }
                        />
                        <FieldInput
                            label="??i???n tho???i"
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
                        <FieldCustom label="Ng??y sinh">
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
                            label="?????a ch???"
                            name="address"
                            initialValue={
                                type === 'update' ? customerUpdated.address : ''
                            }
                        />
                        <FieldCustom label="T???nh/Th??nh ph???">
                            <AutoCompleteCity
                                onSelect={onSelectCity}
                                defaultValue={citySelected}
                            />
                        </FieldCustom>
                        <FieldCustom label="Qu???n/Huy???n">
                            <AutoCompleteDistrict
                                parentCode={cityCodeSelected}
                                onSelect={onSelectDistrict}
                                defaultValue={districtSelected}
                            />
                        </FieldCustom>

                        <FieldCustom label="Ph?????ng/X??">
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
                            label="Gi???i t??nh"
                            name="sex"
                            data={dataCustomerSex}
                        />

                        <FieldRadio
                            initialValue={
                                type === 'update'
                                    ? customerUpdated.type
                                    : 'person'
                            }
                            label="Lo???i kh??ch h??ng"
                            name="type"
                            data={dataCustomerType}
                            onChange={onChangeTypeCustomer}
                        />
                        {typeCustomer === 'company' ? (
                            <FieldInput
                                label="C??ng ty"
                                name="company"
                                initialValue={
                                    type === 'update'
                                        ? customerUpdated.company
                                        : 'person'
                                }
                            />
                        ) : null}
                        <FieldInput
                            label="M?? s??? thu???"
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
                        <FieldInput
                            label="Ghi ch??"
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
                        text="H???y b???"
                        type="danger"
                        onClick={onCancel}
                    />
                    <ButtonCustom text="C???p nh???t" onClick={onSumitForm} />
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
    onFinishAdd,
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
                    onFinishAdd={onFinishAdd}
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
