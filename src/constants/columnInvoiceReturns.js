import { Button } from 'antd';

const cols = [
    {
        title: 'Mã hóa đơn',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Ngày bán',
        dataIndex: 'dateSell',
        key: 'dateSell',
    },
    {
        title: 'Khách hàng',
        dataIndex: '',
        key: '',
        render: (record) => record.nameCustomer + ' - ' + record.phone,
    },
    {
        title: 'Tổng cộng',
        dataIndex: 'totalPayment',
        key: 'totalPayment',
        align: 'end',
    },
    {
        title: '',
        render: (record) => <Button>Chọn</Button>,
        align: 'center',
    },
];

export default cols;
