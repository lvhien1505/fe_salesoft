import { useContext, useState } from 'react';
import { Modal, Row, Col, Tabs, Image, Space } from 'antd';
import Table from 'components/common/manage/Table';
import ButtonCustom from 'components/ui/button/Button';
import CustomerContext from 'contexts/createContext/CustomerContext';
import TextPrice from 'components/common/TextPrice';

import '../styles/modalInfoPartner.scss';
import { ModalCustomer } from './ModalCustomer';

const Field = ({ label, value }) => {
    return (
        <div className="field_info">
            <span>{label}:</span>
            <span>
                {typeof value === 'number' ? (
                    <TextPrice value={value} />
                ) : (
                    value
                )}
            </span>
        </div>
    );
};
const ModalInfoCustomer = ({ visible, onCancel, ...rest }) => {
    let { customerSelected } = useContext(CustomerContext);
    const [visibleModalCustomer, setVisibleModalCustomer] = useState(false);
    let customer = {};
    const { TabPane } = Tabs;

    const styles = {
        position: 'relative',
        top: '-70px',
    };

    if (customerSelected) {
        customerSelected.code
            ? (customer.code = customerSelected.code)
            : (customer.code = '');
        customerSelected.name
            ? (customer.name = customerSelected.name)
            : (customer.name = '');
        if (customerSelected.type) {
            customer.type =
                customerSelected.type === 'person' ? 'Cá nhân' : 'Công ty';
        }
        customerSelected.company
            ? (customer.company = customerSelected.company)
            : (customer.company = '');

        customerSelected.group
            ? (customer.group = customerSelected.group)
            : (customer.group = '');
        customerSelected.birthday
            ? (customer.birthday = customerSelected.birthday)
            : (customer.birthday = '');
        customerSelected.taxCode
            ? (customer.taxCode = customerSelected.taxCode)
            : (customer.taxCode = '');
        customerSelected.email
            ? (customer.email = customerSelected.email)
            : (customer.email = '');
        customerSelected.facebook
            ? (customer.facebook = customerSelected.facebook)
            : (customer.facebook = '');
        if (customerSelected.phone && Array.isArray(customerSelected.phone)) {
            if (customerSelected.phone.length > 0) {
                customerSelected.phone = customerSelected.phone.filter((phone)=>phone)
                customer.phone = customerSelected.phone.join(', ');
            }
        }
        customerSelected.address
            ? (customer.address = customerSelected.address)
            : (customer.address = '');
        customerSelected.city
            ? (customer.city = customerSelected.city)
            : (customer.city = '');
        customerSelected.district
            ? (customer.district = customerSelected.district)
            : (customer.district = '');
        customerSelected.subDistrict
            ? (customer.subDistrict = customerSelected.subDistrict)
            : (customer.subDistrict = '');
        customerSelected.note
            ? (customer.note = customerSelected.note)
            : (customer.note = '');
    }

    return (
        <Modal
            title={customer.code || 'Khách hàng'}
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={1000}
            centered
            className="modal-info-customer"
            {...rest}
        >
            <Tabs centered style={styles}>
                <TabPane tab="Thông tin" key="1">
                    <Row gutter={[32, 8]} style={{ marginTop: '1rem' }}>
                        <Col span={9}>
                            <Field
                                label="Mã khách hàng"
                                value={customer.code}
                            />
                            <Field
                                label="Tên khách hàng"
                                value={customer.name}
                            />
                            <Field
                                label="Loại khách hàng"
                                value={customer.type}
                            />
                            <Field label="Công ty" value={customer.company} />
                            <Field
                                label="Ngày sinh"
                                value={customer.birthday}
                            />
                            <Field label="Nhóm KH" value={customer.group} />
                            <Field
                                label="Mã số thuế"
                                value={customer.taxCode}
                            />
                            <Field label="Email" value={customer.email} />
                        </Col>
                        <Col span={9}>
                            <Field label="Facebook" value={customer.facebook} />
                            <Field label="Điện thoại" value={customer.phone} />
                            <Field label="Địa chỉ" value={customer.address} />
                            <Field
                                label="Tỉnh/Thành Phố"
                                value={customer.city}
                            />
                            <Field
                                label="Quận/Huyện"
                                value={customer.district}
                            />
                            <Field
                                label="Phường/Xã"
                                value={customer.subDistrict}
                            />
                            <Field label="Ngày tạo" value={''} />
                        </Col>
                        <Col span={6} className="info-note">
                            <div>
                                <div>Ghi chú</div>
                                <div>{customer.note}</div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Nợ cần thu từ khách" key="2">
                    <Table />
                </TabPane>
            </Tabs>
            <Row justify="end">
                <Space>
                    <ButtonCustom
                        text="Cập nhật"
                        onClick={() => setVisibleModalCustomer(true)}
                    />
                    <ButtonCustom
                        text="Ngừng hoạt động"
                        type="danger"
                        onClick={onCancel}
                    />
                    <ButtonCustom text="Xóa" type="danger" onClick={onCancel} />
                </Space>
            </Row>
            {visibleModalCustomer ? (
                <ModalCustomer
                    type="update"
                    visible={visibleModalCustomer}
                    onCancel={() => setVisibleModalCustomer(false)}
                    customerUpdated={customerSelected}
                />
            ) : null}
        </Modal>
    );
};

export default ModalInfoCustomer;
