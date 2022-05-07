import { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Modal, Space } from 'antd';
import { FieldInput } from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import {
    AutoCompleteCity,
    AutoCompleteDistrict,
    AutoCompleteSubDistrict,
} from 'components/auto-complete/AutoCompleteAddress';
import SupplierContext from 'contexts/createContext/SupplierContext';
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

const ModalSupplier = ({
    type,
    withContext,
    supplierUpdated,
    visible,
    onCancel,
    onFinishAdd,
    ...rest
}) => {
    const { useForm } = Form;
    let actionCreate = null;
    let actionUpdate = null;
    let state = useContext(withContext ? SupplierContext : FakeContext);
    const initialValueForm =
        type === 'update'
            ? {
                  phone1: supplierUpdated.phone[0],
                  phone2: supplierUpdated.phone[1],
                  ...supplierUpdated,
              }
            : {};
    if (withContext) {
        actionCreate = state.createSupplier;
        actionUpdate = state.updateSupplier;
    } else {
        actionCreate = onFinishAdd;
    }
    const [formSupplier] = useForm();
    const [citySelected, setCitySelected] = useState(
        type === 'update' ? supplierUpdated.city : ''
    );
    const [districtSelected, setDistrictSelected] = useState(
        type === 'update' ? supplierUpdated.district : ''
    );
    const [subDistrictSelected, setSubDistrictSelected] = useState(
        type === 'update' ? supplierUpdated.subDistrict : ''
    );
    const [cityCodeSelected, setCityCodeSelected] = useState('');
    const [districtCodeSelected, setDistrictCodeSelected] = useState('');

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

    const onSumitForm = () => {
        formSupplier.submit();
    };

    const onFinishForm = async (values) => {
        values.city = citySelected;
        values.district = districtSelected;
        values.subDistrict = subDistrictSelected;
        values.phone = [values.phone1, values.phone2];

        if (!values.name) {
            return openNotification('error', 'Vui lòng nhập tên nhà cung cấp');
        }
        if (type === 'add') {
            actionCreate(values);
        } else {
            values.code = supplierUpdated.code;
            actionUpdate(supplierUpdated._id, values);
        }
        onCancel();
    };

    return (
        <Modal
            title={type === 'add' ? 'Thêm nhà cung cấp' : 'Cập nhật'}
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={900}
            centered
            bodyStyle={{ paddingTop: '0.5rem' }}
            {...rest}
        >
            <Form
                form={formSupplier}
                onFinish={onFinishForm}
                initialValues={initialValueForm}
            >
                <Row justify="space-between" gutter={[36, 8]}>
                    <Col span={12}>
                        <FieldInput
                            label="Tên NCC"
                            name="name"
                            initialValue={
                                type === 'update' ? supplierUpdated.name : ''
                            }
                        />
                        <FieldInput
                            label="Điện thoại"
                            name="phone1"
                            initialValue={
                                type === 'update'
                                    ? supplierUpdated.phone[0]
                                    : ''
                            }
                        />
                        <FieldInput
                            label=""
                            name="phone2"
                            initialValue={
                                type === 'update'
                                    ? supplierUpdated.phone[1]
                                    : ''
                            }
                        />
                        <FieldInput
                            label="Địa chỉ"
                            name="address"
                            initialValue={
                                type === 'update' ? supplierUpdated.address : ''
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
                        <FieldInput
                            label="Mã số thuế"
                            name="taxCode"
                            initialValue={
                                type === 'update' ? supplierUpdated.taxCode : ''
                            }
                        />
                        <FieldInput
                            label="Email"
                            name="email"
                            initialValue={
                                type === 'update' ? supplierUpdated.email : ''
                            }
                        />
                        <FieldInput
                            label="Công ty"
                            name="company"
                            initialValue={
                                type === 'update' ? supplierUpdated.company : ''
                            }
                        />        
                        <FieldInput
                            label="Ghi chú"
                            name="note"
                            initialValue={
                                type === 'update' ? supplierUpdated.note : ''
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

const BtnActiveModalSupplier = ({
    withContext,
    text,
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
            <ModalSupplier
                type="add"
                visible={visible}
                onCancel={() => setVisible(false)}
                withContext={withContext}
                onFinishAdd={onFinishAdd}
            />
        </>
    );
};

BtnActiveModalSupplier.defaultProps = {
    withContext: true,
};

BtnActiveModalSupplier.propTypes = {
    withContext: PropTypes.bool,
};

ModalSupplier.defaultProps = {
    supplierUpdated: {},
};

ModalSupplier.propTypes = {
    supplierUpdated: PropTypes.object,
};

export { ModalSupplier };

export default BtnActiveModalSupplier;
