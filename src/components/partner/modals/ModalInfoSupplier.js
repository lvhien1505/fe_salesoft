import { useContext, useState } from 'react';
import { Modal, Row, Col, Tabs, Image, Space } from 'antd';
import Table from 'components/common/manage/Table';
import ButtonCustom from 'components/ui/button/Button';
import SupplierContext from 'contexts/createContext/SupplierContext';
import TextPrice from 'components/common/TextPrice';

import '../styles/modalInfoPartner.scss';

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
const ModalInfoSupplier = ({ visible, onCancel, ...rest }) => {
    let { supplierSelected } = useContext(SupplierContext);
    const [visibleModalSupplier, setVisibleModalSupplier] = useState(false);
    let supplier = {};
    const { TabPane } = Tabs;

    const styles = {
        position: 'relative',
        top: '-70px',
    };

    if (supplierSelected) {
        supplierSelected.code
            ? (supplier.code = supplierSelected.code)
            : (supplier.code = '');
        supplierSelected.name
            ? (supplier.name = supplierSelected.name)
            : (supplier.name = '');

        supplierSelected.company
            ? (supplier.company = supplierSelected.company)
            : (supplier.company = '');

        supplierSelected.group
            ? (supplier.group = supplierSelected.group)
            : (supplier.group = '');

        supplierSelected.taxCode
            ? (supplier.taxCode = supplierSelected.taxCode)
            : (supplier.taxCode = '');
        supplierSelected.email
            ? (supplier.email = supplierSelected.email)
            : (supplier.email = '');

        if (supplierSelected.phone && Array.isArray(supplierSelected.phone)) {
            if (supplierSelected.phone.length > 0) {
                supplierSelected.phone = supplierSelected.phone.filter(
                    (phone) => phone
                );
                supplier.phone = supplierSelected.phone.join(', ');
            }
        }
        supplierSelected.address
            ? (supplier.address = supplierSelected.address)
            : (supplier.address = '');
        supplierSelected.city
            ? (supplier.city = supplierSelected.city)
            : (supplier.city = '');
        supplierSelected.district
            ? (supplier.district = supplierSelected.district)
            : (supplier.district = '');
        supplierSelected.subDistrict
            ? (supplier.subDistrict = supplierSelected.subDistrict)
            : (supplier.subDistrict = '');
        supplierSelected.note
            ? (supplier.note = supplierSelected.note)
            : (supplier.note = '');
    }

    return (
        <Modal
            title={supplier.code || 'Khách hàng'}
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={1000}
            centered
            className="modal-info-supplier"
            {...rest}
        >
            <Tabs centered style={styles}>
                <TabPane tab="Thông tin" key="1">
                    <Row gutter={[32, 8]} style={{ marginTop: '1rem' }}>
                        <Col span={9}>
                            <Field
                                label="Mã NCC"
                                value={supplier.code}
                            />
                            <Field label="Tên NCC" value={supplier.name} />
                            <Field label="Công ty" value={supplier.company} />
                            <Field label="Nhóm NCC" value={supplier.group} />
                            <Field
                                label="Mã số thuế"
                                value={supplier.taxCode}
                            />
                            <Field label="Email" value={supplier.email} />
                        </Col>
                        <Col span={9}>
                            <Field label="Điện thoại" value={supplier.phone} />
                            <Field label="Địa chỉ" value={supplier.address} />
                            <Field
                                label="Tỉnh/Thành Phố"
                                value={supplier.city}
                            />
                            <Field
                                label="Quận/Huyện"
                                value={supplier.district}
                            />
                            <Field
                                label="Phường/Xã"
                                value={supplier.subDistrict}
                            />
                            <Field label="Ngày tạo" value={''} />
                        </Col>
                        <Col span={6} className="info-note">
                            <div>
                                <div>Ghi chú</div>
                                <div>{supplier.note}</div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Nợ cần trả NCC" key="2">
                    <Table />
                </TabPane>
            </Tabs>
            <Row justify="end">
                <Space>
                    <ButtonCustom
                        text="Cập nhật"
                        onClick={() => setVisibleModalSupplier(true)}
                    />
                    <ButtonCustom
                        text="Ngừng hoạt động"
                        type="danger"
                        onClick={onCancel}
                    />
                    <ButtonCustom text="Xóa" type="danger" onClick={onCancel} />
                </Space>
            </Row>
        </Modal>
    );
};

export default ModalInfoSupplier;
