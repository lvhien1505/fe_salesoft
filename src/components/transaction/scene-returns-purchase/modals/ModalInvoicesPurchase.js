import { useState, useContext } from 'react';
import { Row, Col, Modal, Table, Button } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import { InputString } from 'components/ui/input/Input';
import Icon from 'components/ui/icon/Icon';
import DatePicker from 'components/common/DatePicker';
import cols from 'constants/columnInvoicePurchaseReturns';
import data from 'apis/fakedata/products';
import SceneReturnsPurchaseContext from 'contexts/createContext/SceneReturnsPurchaseContext';

import '../../styles/modalInvoices.scss';

const ModalInvoicesPurchase = ({ type, visible, onCancel, ...rest }) => {
    let { addInvoice } = useContext(SceneReturnsPurchaseContext);

    const onHandleAddInvoice = (invoice)=>{
        addInvoice(invoice);
        onCancel()
    }
    cols[cols.length - 1].render = (record) => (
        <Button onClick={() => onHandleAddInvoice(record)}>Chọn</Button>
    );

    return (
        <Modal
            title="Chọn hóa đơn trả hàng"
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={1000}
            centered
            bodyStyle={{ paddingTop: '0.5rem' }}
            {...rest}
        >
            <Row gutter={[8, 8]}>
                <Col span={5}>
                    <div className="search-string">
                        <div className="title">
                            <span>Tìm kiếm</span>
                        </div>
                        <Row gutter={[0, 20]}>
                            <Col span={24}>
                                <InputString
                                    placeholder="Theo mã hóa đơn"
                                    size="small"
                                />
                            </Col>
                            <Col span={24}>
                                <InputString
                                    placeholder="Theo NCC hoặc điện thoại"
                                    size="small"
                                />
                            </Col>
                            <Col span={24}>
                                <InputString
                                    placeholder="Theo mã hàng"
                                    size="small"
                                />
                            </Col>
                            <Col span={24}>
                                <InputString
                                    placeholder="Theo tên hàng"
                                    size="small"
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="search-time">
                        <div className="title">
                            <span>Thời gian</span>
                        </div>
                        <div className="search-time-content">
                            <DatePicker
                                isCustom={false}
                                withPortal={false}
                                dateFormat="dd/MM/yyyy"
                                showTime={false}
                                placeholder="Từ ngày"
                            />
                            <Icon className="ri-calendar-2-fill" />
                        </div>
                        <div className="search-time-content">
                            <DatePicker
                                isCustom={false}
                                withPortal={false}
                                dateFormat="dd/MM/yyyy"
                                showTime={false}
                                placeholder="Đến ngày"
                            />
                            <Icon className="ri-calendar-2-fill" />
                        </div>
                    </div>
                    <Row justify="end">
                        <Col>
                            <ButtonCustom
                                text="Tìm kiếm"
                                icon={<Icon className="ri-search-line" />}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={19}>
                    <Table
                        columns={cols}
                        dataSource={data.invoicesPurchaseReturns}
                    />
                </Col>
            </Row>
        </Modal>
    );
};

const BtnActiveModalInvoicesPurchase = () => {
    const [visible, setVisible] = useState(false);
    const style = {
        height: '34px',
        borderRadius: '0.36rem',
        width: '34px',
    };

    return (
        <div className="modal-invoices">
            <ButtonCustom
                text=""
                icon={
                    <Icon className="ri-file-text-line" style={{ margin: 0 }} />
                }
                type="secondary"
                onClick={() => setVisible(true)}
                style={style}
            />
            <ModalInvoicesPurchase
                visible={visible}
                onCancel={() => setVisible(false)}
            />
        </div>
    );
};

export default BtnActiveModalInvoicesPurchase;
