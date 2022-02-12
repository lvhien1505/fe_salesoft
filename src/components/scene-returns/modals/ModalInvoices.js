import { useState } from 'react';
import { Row, Col, Modal, Table } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import { InputString } from 'components/ui/input/Input';
import Icon from 'components/ui/icon/Icon';
import DatePicker from 'components/common/DatePicker';
import cols from 'constants/columnInvoiceReturns';
import data from 'apis/fakedata/products';

import '../styles/modalInvoices.scss';

const ModalInvoices = ({ type, visible, onCancel, ...rest }) => {
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
                                    placeholder="Theo KH hoặc điện thoại"
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
                    <Table columns={cols} dataSource={data.invoicesReturns}/>
                </Col>
            </Row>
        </Modal>
    );
};

const BtnActiveModalInvoices = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="modal-invoices">
            <ButtonCustom
                text=""
                icon={<Icon className="ri-file-text-line" />}
                type="default"
                onClick={() => setVisible(true)}
            />
            <ModalInvoices
                visible={visible}
                onCancel={() => setVisible(false)}
            />
        </div>
    );
};

export default BtnActiveModalInvoices;
