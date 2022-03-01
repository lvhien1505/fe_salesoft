import { useState, useContext, useEffect, useMemo } from 'react';
import { Form, Modal, Button, Row, Space } from 'antd';
import { FieldInput } from 'components/ui/form/FormField';
import Icon from 'components/ui/icon/Icon';
import PropTypes from 'prop-types';
import ButtonCustom from 'components/ui/button/Button';
import ProductContext from 'contexts/createContext/ProductContext';

const ModalCategory = ({ type, visible, onCancel, ...rest }) => {
    const { createCategory, updateCategory, categorySelected ,removeCategory} =
        useContext(ProductContext);

    const Field = ({ initialValue }) => {
        return useMemo(() => {
            return (
                <FieldInput
                    label={'Tên nhóm hàng'}
                    initialValue={initialValue}
                    name="name"
                />
            );
        }, [initialValue]);
    };

    const [form] = Form.useForm();

    let valueName = '';
    const onSumitForm = () => {
        valueName = form.getFieldValue('name');
        form.setFieldsValue([{name:valueName}]);
        form.submit();
    };

    const onFinishForm = (values) => {
        if (!valueName && type === 'update') {
            return onCancel();
        }
        if (type === 'add') {
            form.resetFields(['name']);
            createCategory(values);
        }
        if (type === 'update') {
            form.resetFields(['name']);
            updateCategory(categorySelected.value, values);
        }
        onCancel();
    };

    const onDelete = () => {
        removeCategory(categorySelected.value)
        onCancel();
    };

    return (
        <Modal
            title={type === 'add' ? 'Thêm nhóm hàng' : 'Cập nhật nhóm hàng'}
            visible={visible}
            footer={null}
            width={500}
            onCancel={onCancel}
            {...rest}
        >
            <Form form={form} onFinish={onFinishForm}>
                {type === 'add' ? (
                    <FieldInput label={'Tên nhóm hàng'} name="name" />
                ) : (
                    <Field initialValue={categorySelected.label} />
                )}
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
const BtnActiveModalCategory = ({ isAdd, isUpdate, ...rest }) => {
    const [typeModal, setTypeModal] = useState('add');
    const [visible, setVisible] = useState(false);

    const styleBtn = {
        border: '0',
        boxShadow: 'none',
        width: '1.5rem',
        height: '1.5rem',
        padding: 0,
    };

    const onActiveModal = (type) => {
        setTypeModal(type);
        setVisible(true);
    };

    return (
        <>
            {isUpdate ? (
                <Button
                    icon={<Icon className="ri-pencil-fill" />}
                    onClick={() => onActiveModal('update')}
                    {...rest}
                    style={styleBtn}
                />
            ) : null}
            {isAdd ? (
                <Button
                    icon={<Icon className="ri-add-line" />}
                    onClick={() => onActiveModal('add')}
                    {...rest}
                    style={styleBtn}
                />
            ) : null}

            <ModalCategory
                type={typeModal}
                visible={visible}
                onCancel={() => setVisible(false)}
            />
        </>
    );
};

export { ModalCategory };

BtnActiveModalCategory.defaultProps = {
    isAdd: true,
    isUpdate: false,
};

BtnActiveModalCategory.propTypes = {
    isAdd: PropTypes.bool,
    isUpdate: PropTypes.bool,
};

export default BtnActiveModalCategory;
