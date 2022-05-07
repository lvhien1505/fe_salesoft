import { useState } from 'react';
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
import openNotification from 'helpers/notification';

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

const ModalTarget = ({
    isUpdate,
    typeAction,
    targetUpdated,
    visible,
    onCancel,
    onFinish,
    ...rest
}) => {
    const { useForm } = Form;

    const [form] = useForm();

    const initialValueForm = isUpdate ? { ...targetUpdated } : {};
    const [citySelected, setCitySelected] = useState(
        isUpdate ? targetUpdated.city : ''
    );
    const [districtSelected, setDistrictSelected] = useState(
        isUpdate ? targetUpdated.district : ''
    );
    const [subDistrictSelected, setSubDistrictSelected] = useState(
        isUpdate ? targetUpdated.subDistrict : ''
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
        form.submit();
    };

    const onFinishForm = (values) => {
        values.city = citySelected;
        values.district = districtSelected;
        values.subDistrict = subDistrictSelected;

        if (!values.name) {
            let text =
                'Vui lòng nhập tên người' +
                (typeAction === 'in' ? ' nộp' : ' nhận');
            return openNotification('error', text);
        }

        onFinish(values);
        onCancel();
    };

    return (
        <Modal
            title={'Thêm người' + (typeAction === 'in' ? ' nộp' : ' nhận')}
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={600}
            centered
            bodyStyle={{ paddingTop: '0.5rem' }}
            {...rest}
        >
            <Form
                form={form}
                onFinish={onFinishForm}
                initialValues={initialValueForm}
            >
                <Row justify="space-between" gutter={[24, 8]}>
                    <Col span={24}>
                        <FieldInput
                            label={
                                'Tên người' +
                                (typeAction === 'in' ? ' nộp' : ' nhận')
                            }
                            visible={visible}
                            name="name"
                            initialValue={isUpdate ? targetUpdated.name : ''}
                        />
                        <FieldInput
                            label="Điện thoại"
                            name="phone"
                            initialValue={isUpdate ? targetUpdated.phone : ''}
                        />
                        <FieldInput
                            label="Địa chỉ"
                            name="address"
                            initialValue={isUpdate ? targetUpdated.address : ''}
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
                </Row>
                <Row justify="end" style={{ marginTop: '1rem' }}>
                    <Space>
                        <ButtonCustom
                            text="Hủy bỏ"
                            type="danger"
                            onClick={onCancel}
                        />
                        <ButtonCustom text="Thêm" onClick={onSumitForm} />
                    </Space>
                </Row>
            </Form>
        </Modal>
    );
};

const BtnActiveModalTarget = ({
    text,
    iconClassName,
    type,
    typeAction,
    onFinish,
    isUpdate,
    targetUpdated,
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
            <ModalTarget
                visible={visible}
                onCancel={() => setVisible(false)}
                onFinish={onFinish}
                isUpdate={isUpdate}
                targetUpdated={targetUpdated}
                typeAction={typeAction}
            />
        </>
    );
};

BtnActiveModalTarget.defaultProps = {
    isUpdate: false,
    targetUpdated: {},
};

BtnActiveModalTarget.propTypes = {
    isUpdate: PropTypes.bool,
    targetUpdated: PropTypes.object,
};

export default BtnActiveModalTarget;
