const cols = [
    {
        title: 'Mã hóa đơn',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Ngày nhập',
        dataIndex: 'dateBuy',
        key: 'dateBuy',
    },
    {
        title: 'Nhà cung cấp',
        dataIndex: '',
        key: '',
        render: (record) => record.nameSupplier + ' - ' + record.phone,
    },
    {
        title: 'Tổng cộng',
        dataIndex: 'totalPayment',
        key: 'totalPayment',
        align: 'end',
    },
    {
        title: '',
        align: 'center',
    },
];

export default cols;
