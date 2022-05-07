import { useContext } from 'react';
import { Modal, Row, Col, Tabs, Space, Table, Typography } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import InvoiceContext from 'contexts/createContext/InvoiceContext';
import TextPrice from 'components/common/TextPrice';

import '../styles/modalInfoTransaction.scss';

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
const ModalInfoInvoice = ({ visible, onCancel, ...rest }) => {
    let { invoiceSelected } = useContext(InvoiceContext);

    let invoice = {};
    const { TabPane } = Tabs;

    const styles = {
        position: 'relative',
        top: '-70px',
    };

    const columnsProductsInvoice = [
        {
            title: 'Mã hàng',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Tên hàng',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số lượng',
            dataIndex: 'totalNum',
            key: 'totalNum',
            align: 'center',
            render: (value) => <TextPrice value={value} />,
        },
        {
            title: 'Đơn giá',
            dataIndex: 'pricePreSaleOff',
            key: 'pricePreSaleOff',
            align: 'center',
            render: (value) => <TextPrice value={value} />,
        },
        {
            title: 'Giảm giá',
            dataIndex: 'priceSaleOff',
            key: 'priceSaleOff',
            align: 'center',
            render: (value) => <TextPrice value={value} />,
        },
        {
            title: 'Giá bán',
            dataIndex: 'priceAfterSaleOff',
            key: 'priceAfterSaleOff',
            align: 'center',
            render: (value) => <TextPrice value={value} />,
        },
        {
            title: 'Thành tiền',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            align: 'end',
            render: (value) => <TextPrice value={value} />,
        },
    ];

    if (invoiceSelected) {
        invoiceSelected.code
            ? (invoice.code = invoiceSelected.code)
            : (invoice.code = '');
        invoiceSelected.dateSell
            ? (invoice.dateSell = invoiceSelected.dateSell)
            : (invoice.dateSell = '');
        invoiceSelected.hasCustomer
            ? invoiceSelected.customer.phone[0]
                ? (invoice.customer =
                      invoiceSelected.customer.name +
                      ' - ' +
                      invoiceSelected.customer.phone[0])
                : invoiceSelected.customer.phone[1]
                ? (invoice.customer =
                      invoiceSelected.customer.name +
                      ' - ' +
                      invoiceSelected.customer.phone[0])
                : (invoice.customer = invoiceSelected.customer.name)
            : (invoice.customer = 'Khách lẻ');

        invoiceSelected.products
            ? (invoice.products = invoiceSelected.products)
            : (invoice.products = []);

        invoice.totalNum =
            invoice.products.reduce((pre, curr) => pre + curr.totalNum, 0) || 0;
        invoiceSelected.totalPrice
            ? (invoice.totalPrice = invoiceSelected.totalPrice)
            : (invoice.totalPrice = 0);
        invoiceSelected.saleOff
            ? (invoice.saleOff = invoiceSelected.saleOff)
            : (invoice.saleOff = 0);
        invoiceSelected.totalPayment
            ? (invoice.totalPayment = invoiceSelected.totalPayment)
            : (invoice.totalPayment = 0);
        invoiceSelected.totalPaid
            ? (invoice.totalPaid = invoiceSelected.totalPaid)
            : (invoice.totalPaid = 0);
        invoiceSelected.note
            ? (invoice.note = invoiceSelected.note)
            : (invoice.note = '');
    }

    return (
        <Modal
            title={invoice.code || 'Hóa đơn'}
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={1000}
            centered
            className="modal-info-invoice"
            {...rest}
        >
            <Tabs centered style={styles}>
                <TabPane tab="Thông tin" key="1">
                    <Row gutter={[32, 16]} style={{ marginTop: '1rem' }}>
                        <Col span={9}>
                            <Field label="Mã hóa đơn" value={invoice.code} />
                            <Field label="Ngày bán" value={invoice.dateSell} />
                            <Field
                                label="Khách hàng"
                                value={invoice.customer}
                            />
                        </Col>
                        <Col span={9}>
                            <Field
                                label="Mã trả hàng"
                                value={invoice.facebook}
                            />
                            <Field label="Trạng thái" value={'Hoàn thành'} />
                            <Field label="Bảng giá" value={'Bảng giá chung'} />
                        </Col>
                        <Col span={6} className="info-note">
                            <div>
                                <div>Ghi chú</div>
                                <div>{invoice.note}</div>
                            </div>
                        </Col>
                        <Col span={24}>
                            <Table
                                columns={columnsProductsInvoice}
                                dataSource={invoice.products}
                                pagination={false}
                            />
                        </Col>
                    </Row>
                    <Row justify="end" style={{ marginTop: '0.5rem' }}>
                        <Col>
                            <Typography.Text>Tổng số lượng :</Typography.Text>
                        </Col>
                        <Col style={{ width: '100px' }}>
                            <Typography.Text style={{ float: 'right' }}>
                                <TextPrice value={invoice.totalNum} />
                            </Typography.Text>
                        </Col>
                    </Row>
                    <Row justify="end">
                        <Col>
                            <Typography.Text>Tổng tiền hàng :</Typography.Text>
                        </Col>
                        <Col style={{ width: '100px' }}>
                            <Typography.Text style={{ float: 'right' }}>
                                <TextPrice value={invoice.totalPrice} />
                            </Typography.Text>
                        </Col>
                    </Row>
                    <Row justify="end">
                        <Col style={{ width: '100px' }}>
                            <Typography.Text style={{ float: 'right' }}>
                                Giảm giá HD :
                            </Typography.Text>
                        </Col>
                        <Col style={{ width: '100px' }}>
                            <Typography.Text style={{ float: 'right' }}>
                                {' '}
                                <TextPrice value={invoice.saleOff} />
                            </Typography.Text>
                        </Col>
                    </Row>
                    <Row justify="end">
                        <Col>
                            <Typography.Text>Khách cần trả :</Typography.Text>
                        </Col>
                        <Col style={{ width: '100px' }}>
                            <Typography.Text style={{ float: 'right' }}>
                                <TextPrice value={invoice.totalPayment} />
                            </Typography.Text>
                        </Col>
                    </Row>
                    <Row justify="end">
                        <Col>
                            <Typography.Text>Khách đã trả :</Typography.Text>
                        </Col>
                        <Col style={{ width: '100px' }}>
                            <Typography.Text style={{ float: 'right' }}>
                                <TextPrice value={invoice.totalPaid} />
                            </Typography.Text>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Lịch sử thanh toán" key="2">
                    <Table />
                </TabPane>
            </Tabs>
            <Row justify="end">
                <Space>
                    <ButtonCustom text="In" />
                    <ButtonCustom
                        text="Hủy hóa đơn"
                        type="danger"
                        onClick={onCancel}
                    />
                </Space>
            </Row>
        </Modal>
    );
};

export default ModalInfoInvoice;
