import { useContext, useState } from 'react';
import { Button, Form, Modal, Row, Space } from 'antd';
import { FieldInputNumber } from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import PriceBookContext from 'contexts/createContext/PriceBookContext';
import Icon from 'components/ui/icon/Icon';
import TextPrice from 'components/common/TextPrice';
import openNotification from 'helpers/notification';

const ModalPrice = ({
    type,
    visible,
    onCancel,
    tablePriceID,
    productID,
    defaultPrice,
    ...rest
}) => {
    const { useForm } = Form;
    const [form] = useForm();
    let { pushPriceToTP, updatePriceFromTP } = useContext(PriceBookContext);

    const convertFromStringToNumber = (value) => {
        if (typeof value === 'number') {
            return value;
        }

        value = value.split(',').join('');
        value = parseInt(value);
        return value;
    };

    const onSumitForm = () => {
        form.submit();
    };

    const onFinishForm = (values) => {
        values.price = convertFromStringToNumber(values.price);
        if (values.price < 0) {
            return openNotification('error', 'Giá không hợp lệ');
        }
        let product = {
            price: values.price,
            productID: productID,
        };
        if (type === 'add') {
            pushPriceToTP(tablePriceID, product);
        }
        if (type === 'update') {
            updatePriceFromTP(tablePriceID, product);
        }
        onCancel();
    };

    const onDelete = () => {
        onCancel();
    };

    return (
        <Modal
            title={type === 'add' ? 'Thêm giá' : 'Cập nhật giá'}
            visible={visible}
            footer={null}
            width={300}
            onCancel={onCancel}
            {...rest}
        >
            <Form
                form={form}
                onFinish={onFinishForm}
                initialValues={{
                    price: defaultPrice,
                }}
            >
                <FieldInputNumber
                    label={'Giá'}
                    name="price"
                    initialValue={defaultPrice}
                />
            </Form>
            <Row justify="end" style={{ marginTop: '1rem' }}>
                <Space>
                    <ButtonCustom
                        text={type === 'add' ? 'Huỷ bỏ' : 'Xóa'}
                        type="danger"
                        onClick={onDelete}
                    />
                    <ButtonCustom
                        text={type === 'add' ? 'Thêm mới' : 'Cập nhật'}
                        onClick={onSumitForm}
                    />
                </Space>
            </Row>
        </Modal>
    );
};

const BtnActiveModalPrice = ({
    type,
    title,
    tablePriceID,
    productID,
    defaultPrice,
}) => {
    const [visible, setVisible] = useState(false);
    const [typeModal, setTypeModal] = useState('add');

    const onActiveModal = (type) => {
        setVisible(true);
        setTypeModal(type);
    };
    return (
        <>
            {type === 'text' ? (
                <Button type="text" onClick={() => onActiveModal('update')}>
                    <TextPrice value={title} />
                </Button>
            ) : (
                <Button
                    icon={<Icon className="ri-add-line" />}
                    type="text"
                    onClick={() => onActiveModal('add')}
                />
            )}
            {visible ? (
                <ModalPrice
                    type={typeModal}
                    onCancel={() => setVisible(false)}
                    visible={visible}
                    tablePriceID={tablePriceID}
                    productID={productID}
                    defaultPrice={defaultPrice}
                />
            ) : null}
        </>
    );
};

export default BtnActiveModalPrice;
