import { useContext } from 'react';
import { Form, Modal, Button, Row, Space } from 'antd';
import { FieldInput } from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import PriceBookContext from 'contexts/createContext/PriceBookContext';

const ModalTablePrice = ({ type, visible, onCancel, ...rest }) => {
    const { useForm } = Form;

    const { createTablePrice,updateTablePrice } = useContext(PriceBookContext);

    const [form] = useForm();

    const onSumitForm = () => {
        form.submit();
    };

    const onFinishForm = (values) => {
        if (type === 'add') {
            createTablePrice(values);
        }
        if (type === 'update') {
            updateTablePrice('', values);
        }
        onCancel();
    };

    const onDelete = () => {
        onCancel();
    };

    return (
        <Modal
            title={type === 'add' ? 'Thêm bảng giá' : 'Cập nhật bảng giá'}
            visible={visible}
            footer={null}
            width={500}
            onCancel={onCancel}
            {...rest}
        >
            <Form form={form} onFinish={onFinishForm}>
                <FieldInput label={'Tên bảng giá'} name="name" />
            </Form>
            <Row justify="end" style={{ marginTop: '1rem' }}>
                <Space>
                    <ButtonCustom text="Xóa" type="danger" onClick={onDelete} />
                    <ButtonCustom text="Cập nhật" onClick={onSumitForm} />
                </Space>
            </Row>
        </Modal>
    );
};

export default ModalTablePrice;
