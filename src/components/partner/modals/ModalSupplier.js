import { useState,useContext } from 'react';
import { Row, Col, Form, Modal, Space } from 'antd';
import {
    FieldInput,
    FieldSelect,
} from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import {
    AutoCompleteCity,
    AutoCompleteDistrict,
    AutoCompleteSubDistrict,
} from 'components/auto-complete/AutoCompleteAddress';
import SupplierContext from 'contexts/createContext/SupplierContext';

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

const ModalCustomer = ({ type, visible, onCancel, ...rest }) => {
    const { useForm } = Form;
    let { createSupplier } = useContext(SupplierContext);

    const [formSupplier] = useForm();
    const [citySelected, setCitySelected] = useState('');
    const [districtSelected, setDistrictSelected] = useState('');
    const [subDistrictSelected, setSubDistrictSelected] = useState('');
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

    const onFinishForm =async (values) => {
        values.city = citySelected;
        values.district = districtSelected;
        values.subDistrict = subDistrictSelected;
        values.phone = [values.phone1, values.phone2];
        
        createSupplier(values);
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
            <Form form={formSupplier} onFinish={onFinishForm}>
                <Row justify="space-between" gutter={[36, 8]}>
                    <Col span={12}>
                        <FieldInput label="Tên NCC" name="name" />
                        <FieldInput label="Điện thoại" name="phone1" />
                        <FieldInput label="" name="phone2" />
                        <FieldInput label="Địa chỉ" name="address" />
                        <FieldCustom label="Tỉnh/Thành phố">
                            <AutoCompleteCity onSelect={onSelectCity} />
                        </FieldCustom>
                        <FieldCustom label="Quận/Huyện">
                            <AutoCompleteDistrict
                                parentCode={cityCodeSelected}
                                onSelect={onSelectDistrict}
                            />
                        </FieldCustom>

                        <FieldCustom label="Phường/Xã">
                            <AutoCompleteSubDistrict
                                parentCode={districtCodeSelected}
                                onSelect={onSelectSubDistrict}
                            />
                        </FieldCustom>
                    </Col>
                    <Col span={12}>
                        <FieldInput label="Mã số thuế" name="taxCode" />
                        <FieldInput label="Email" name="email" />
                        <FieldInput label="Công ty" name="company" />
                        <FieldSelect label="Nhóm NCC" name="group" />
                        <FieldInput label="Ghi chú" name="note" />
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

const BtnActiveModalCustomer = ({ text, iconClassName, type, ...rest }) => {
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
            <ModalCustomer
                type="add"
                visible={visible}
                onCancel={() => setVisible(false)}
            />
        </>
    );
};

export default BtnActiveModalCustomer;
