import { useContext, useState } from 'react';
import { Modal, Row, Col, Tabs, Space } from 'antd';
import Table from 'components/common/manage/Table';
import ButtonCustom from 'components/ui/button/Button';
import SupplierContext from 'contexts/createContext/SupplierContext';
import TextPrice from 'components/common/TextPrice';

import '../styles/modalInfoPartner.scss';
import { ModalSupplier } from './ModalSupplier';

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
            title={supplier.code || 'Kh??ch h??ng'}
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={1000}
            centered
            className="modal-info-supplier"
            {...rest}
        >
            <Tabs centered style={styles}>
                <TabPane tab="Th??ng tin" key="1">
                    <Row gutter={[32, 8]} style={{ marginTop: '1rem' }}>
                        <Col span={9}>
                            <Field
                                label="M?? NCC"
                                value={supplier.code}
                            />
                            <Field label="T??n NCC" value={supplier.name} />
                            <Field label="C??ng ty" value={supplier.company} />
                            <Field label="Nh??m NCC" value={supplier.group} />
                            <Field
                                label="M?? s??? thu???"
                                value={supplier.taxCode}
                            />
                            <Field label="Email" value={supplier.email} />
                        </Col>
                        <Col span={9}>
                            <Field label="??i???n tho???i" value={supplier.phone} />
                            <Field label="?????a ch???" value={supplier.address} />
                            <Field
                                label="T???nh/Th??nh Ph???"
                                value={supplier.city}
                            />
                            <Field
                                label="Qu???n/Huy???n"
                                value={supplier.district}
                            />
                            <Field
                                label="Ph?????ng/X??"
                                value={supplier.subDistrict}
                            />
                            <Field label="Ng??y t???o" value={''} />
                        </Col>
                        <Col span={6} className="info-note">
                            <div>
                                <div>Ghi ch??</div>
                                <div>{supplier.note}</div>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="N??? c???n tr??? NCC" key="2">
                    <Table />
                </TabPane>
            </Tabs>
            <Row justify="end">
                <Space>
                    <ButtonCustom
                        text="C???p nh???t"
                        onClick={() => setVisibleModalSupplier(true)}
                    />
                    <ButtonCustom
                        text="Ng???ng ho???t ?????ng"
                        type="danger"
                        onClick={onCancel}
                    />
                    <ButtonCustom text="X??a" type="danger" onClick={onCancel} />
                </Space>
            </Row>
            {visibleModalSupplier ? (
                <ModalSupplier
                    type="update"
                    visible={visibleModalSupplier}
                    onCancel={() => setVisibleModalSupplier(false)}
                    supplierUpdated={supplierSelected}
                    withContext={true}
                />
            ) : null}
        </Modal>
    );
};

export default ModalInfoSupplier;
