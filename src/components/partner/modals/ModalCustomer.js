import { useState } from 'react';
import { Row, Col, Form, Modal } from 'antd';
import {
    FieldInput,
    FieldSelect,
} from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';

const ModalCustomer = ({ type, visible, onCancel, ...rest }) => {
    const { useForm, Item } = Form;

    const [formCustomer] = useForm();

    const onSumitForm = () => {
        formCustomer.submit();
    };

    const onFinishForm = (values) => {
        console.log(values);
    };

    return (
        <Modal
            title={type === 'add' ? 'Thêm khách hàng' : 'Cập nhật'}
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={900}
            centered
            bodyStyle={{ paddingTop: '0.5rem' }}
            {...rest}
        >
            <Form form={formCustomer} onFinish={onFinishForm}>
                <Row justify="space-between" gutter={[36, 8]}>
                    <Col span={12}>
                        <FieldInput label="Tên khách hàng" name="name" />
                        <FieldInput label="Điện thoại" name="phone" />
                        <FieldInput label="" name="phone2" />
                        <FieldInput label="Ngày sinh" name="phone" />
                        <FieldInput label="Địa chỉ" name="address" />
                        <FieldInput label="Khu vực" name="district" />
                        <FieldInput label="Phường, xã" name="subDistrict" />
                    </Col>
                    <Col span={12}>
                        <FieldInput label="Loại khách" name="name" />
                        <FieldInput label="Mã số thuế" name="phone" />
                        <FieldInput label="Email" name="phone2" />
                        <FieldInput label="Facebook" name="phone" />
                        <FieldInput label="Nhóm" name="address" />
                        <FieldInput label="Ghi chú" name="district" />
                    </Col>
                </Row>
            </Form>
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
