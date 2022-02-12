import { useState } from 'react';
import { Row, Col, Form, Modal } from 'antd';
import {
    FieldInput,
    FieldInputNumber,
    FieldSelect,
} from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';

const ModalCashIn = ({ visible, onCancel, ...rest }) => {
    const { useForm, Item } = Form;

    const [formCashIn] = useForm();

    const onSumitForm = () => {
        formCashIn.submit();
    };

    const onFinishForm = (values) => {
        console.log(values);
    };

    return (
        <Modal
            title={"Lập phiếu thu"}
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={900}
            centered
            bodyStyle={{ paddingTop: '0.5rem' }}
            {...rest}
        >
            <Form form={formCashIn} onFinish={onFinishForm}>
                <Row justify="space-between" gutter={[24, 8]}>
                    <Col span={12}>
                        <FieldInput label="Phương thức TT" name="phone2" />
                        <FieldInput label="Thời gian" name="phone2" />
                        <FieldInput label="Loại thu" name="address" />
                        <FieldInput label="Giá trị" name="district" />
                        <FieldInput label="Ghi chú" name="subDistrict" />
                    </Col>
                    <Col span={12}>
                        <FieldInput label="Đối tượng nộp" name="name" />
                        <FieldInput label="Tên người nộp" name="phone" />
                        <FieldInput label="Hạch toán" name="district" />
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

const BtnActiveModalCashIn = ({ text, iconClassName, type, ...rest }) => {
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
            <ModalCashIn
                visible={visible}
                onCancel={() => setVisible(false)}
            />
        </>
    );
};

export default BtnActiveModalCashIn;
