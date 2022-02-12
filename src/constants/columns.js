// manage
// merchandise
// product
export const colsProduct = [
    {
        title: 'Mã hàng',
        dataIndex: 'code',
        key: 'code:1',
    },
    {
        title: 'Tên hàng',
        dataIndex: 'name',
        key: 'name:2',
    },
    {
        title: 'Nhóm hàng',
        dataIndex: 'category',
        key: 'category:3',
    },
    {
        title: 'Loại hàng',
        dataIndex: 'group',
        key: 'group:4',
    },
    {
        title: 'Giá bán',
        dataIndex: 'price',
        key: 'price:5',
    },
    {
        title: 'Giá vốn',
        dataIndex: 'costPrice',
        key: 'costPrice:6',
    },
    {
        title: 'Thương hiệu',
        dataIndex: 'brand',
        key: 'brand:7',
    },
    {
        title: 'Tồn kho',
        dataIndex: 'inventory',
        key: 'inventory:8',
    },
    {
        title: 'Vị trí',
        dataIndex: 'position',
        key: 'position:9',
    },
    {
        title: 'Dự kiến hết hàng',
        dataIndex: 'expectedSoldOut',
        key: 'expectedSoldOut:10',
    },
    {
        title: 'Định mức tồn ít nhất',
        dataIndex: 'lessEstimate',
        key: 'lessEstimate:11',
    },
    {
        title: 'Định mức tồn nhiều nhất',
        dataIndex: 'mostEstimate',
        key: 'mostEstimate:12',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status:13',
    },
];

//end product

//pricebook
export const colsPriceBook = [
    {
        title: 'Mã hàng',
        dataIndex: 'code',
        key: 'code:1',
    },
    {
        title: 'Tên hàng',
        dataIndex: 'name',
        key: 'name:2',
    },
    {
        title: 'Tồn kho',
        dataIndex: 'inventory',
        key: 'inventory:3',
    },
    {
        title: 'Giá vốn',
        dataIndex: 'costPrice',
        key: 'costPrice:4',
    },
    {
        title: 'Giá nhập cuối',
        dataIndex: 'priceLastPurchase',
        key: 'priceLastPurchase:5',
    },
    {
        title: 'Giá chung',
        dataIndex: 'price',
        key: 'price:6',
    },
];

//end pricebook
//stockTakes
export const colsStockTakes = [
    {
        title: 'Mã kiểm kho',
        dataIndex: 'code',
        key: 'code:1',
    },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time:2',
    },
    {
        title: 'Ngày cân bằng',
        dataIndex: 'dateStockTakes',
        key: 'dateStockTakes:3',
    },
    {
        title: 'SL thực tế',
        dataIndex: 'numReal',
        key: 'numReal:4',
    },
    {
        title: 'Tổng thực tế',
        dataIndex: 'totalReal',
        key: 'totalReal:5',
    },
    {
        title: 'Tổng chênh lệch',
        dataIndex: 'totalDiff',
        key: 'totalDiff:6',
    },
    {
        title: 'Tổng giá trị lệch',
        dataIndex: 'totalValueDiff',
        key: 'totalValueDiff:7',
    },
    {
        title: 'SL lệch tăng',
        dataIndex: 'numIncr',
        key: 'numIncr:8',
    },
    {
        title: 'Tổng giá trị tăng',
        dataIndex: 'totalValueIncr',
        key: 'totalValueIncr:9',
    },
    {
        title: 'SL lệch giảm',
        dataIndex: 'numDesc',
        key: 'numDesc:10',
    },
    {
        title: 'Tổng giá trị giảm',
        dataIndex: 'totalValueDesc',
        key: 'totalValueDesc:11',
    },
    {
        title: 'Ghi chú',
        dataIndex: 'note',
        key: 'note:12',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status:13',
    },
];

//end stockTakes

//transaction
//invoice
export const colsInvoices = [
    {
        title: 'Mã hóa đơn',
        dataIndex: 'code',
        key: 'code:1',
    },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time:2',
    },
    {
        title: 'Ngày bán',
        dataIndex: 'dateSell',
        key: 'dateSell:3',
    },
    {
        title: 'Ngày cập nhật',
        dataIndex: 'dateUpdated',
        key: 'dateUpdated:4',
    },
    {
        title: 'Mã trả hàng',
        dataIndex: 'codeReturns',
        key: 'codeReturns:5',
    },
    {
        title: 'Khách hàng',
        dataIndex: 'nameCustomer',
        key: 'nameCustomer:6',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email:7',
    },
    {
        title: 'Điện thoại',
        dataIndex: 'phone',
        key: 'phone:8',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address:9',
    },
    {
        title: 'Khu vực',
        dataIndex: 'district',
        key: 'district:10',
    },
    {
        title: 'Phường, xã',
        dataIndex: 'subDistrict',
        key: 'subDistrict:11',
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'birthday',
        key: 'birthday:12',
    },
    {
        title: 'Tổng tiền hàng',
        dataIndex: 'totalPrice',
        key: 'totalPrice:13',
    },
    {
        title: 'Giảm giá',
        dataIndex: 'saleOff',
        key: 'saleOff:14',
    },
    {
        title: 'Khách cần trả',
        dataIndex: 'totalPayment',
        key: 'totalPayment:15',
    },
    {
        title: 'Khách đã trả',
        dataIndex: 'totalPaid',
        key: 'totalPaid:16',
    },
    {
        title: 'Ghi chú',
        dataIndex: 'note',
        key: 'note:17',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status:18',
    },
];

//end invoices
//returns
export const colsReturns = [
    {
        title: 'Mã trả hàng',
        dataIndex: 'code',
        key: 'code:1',
    },
    {
        title: 'Mã hóa đơn',
        dataIndex: 'codeInvoices',
        key: 'codeInvoices:2',
    },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time:3',
    },
    {
        title: 'Ngày trả',
        dataIndex: 'dateReturns',
        key: 'dateReturns:4',
    },
    {
        title: 'Khách hàng',
        dataIndex: 'nameCustomer',
        key: 'nameCustomer:5',
    },
    {
        title: 'Tổng tiền hàng trả',
        dataIndex: 'totalPrice',
        key: 'totalPrice:6',
    },
    {
        title: 'Giảm giá',
        dataIndex: 'saleOff',
        key: 'saleOff:7',
    },
    {
        title: 'Tổng sau giảm giá',
        dataIndex: 'totalPriceAfterSaleOff',
        key: 'totalPriceAfterSaleOff:8',
    },
    {
        title: 'Phí trả hàng',
        dataIndex: 'feeReturns',
        key: 'feeReturns:9',
    },
    {
        title: 'Thu khác hoàn lại',
        dataIndex: 'collectBonus',
        key: 'collectBonus:10',
    },
    {
        title: 'Cần trả khách',
        dataIndex: 'totalPaymentForCustomer',
        key: 'totalPaymentForCustomer:11',
    },
    {
        title: 'Đã trả khách',
        dataIndex: 'totalPaidForCustomer',
        key: 'totalPaidForCustomer:12',
    },
    {
        title: 'Ghi chú',
        dataIndex: 'note',
        key: 'note:13',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status:14',
    },
];

//end returns
//purchase
export const colsPurchase = [
    {
        title: 'Mã nhập hàng',
        dataIndex: 'code',
        key: 'code:1',
    },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time:2',
    },
    {
        title: 'Ngày nhập',
        dataIndex: 'datePurchase',
        key: 'datePurchase:3',
    },
    {
        title: 'Ngày cập nhật',
        dataIndex: 'dateUpdated',
        key: 'dateUpdated:4',
    },
    {
        title: 'Nhà cung cấp',
        dataIndex: 'nameSupplier',
        key: 'nameSupplier:5',
    },
    {
        title: 'Tổng số lượng',
        dataIndex: 'totalNum',
        key: 'totalNum:6',
    },
    {
        title: 'Tổng số mặt hàng',
        dataIndex: 'totalNumProduct',
        key: 'totalNumProduct:7',
    },
    {
        title: 'Tổng tiền hàng',
        dataIndex: 'totalPrice',
        key: 'totalPrice:8',
    },
    {
        title: 'Giảm giá',
        dataIndex: 'saleOff',
        key: 'saleOff:9',
    },
    {
        title: 'Cần trả NCC',
        dataIndex: 'totalPayment',
        key: 'totalPayment:10',
    },
    {
        title: 'Tiền đã trả NCC',
        dataIndex: 'totalPaid',
        key: 'totalPaid:11',
    },
    {
        title: 'Ghi chú',
        dataIndex: 'note',
        key: 'note:12',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status:13',
    },
];

//end purchase
// returnsPurchase
export const colsReturnsPurchase = [
    {
        title: 'Mã trả hàng nhập',
        dataIndex: 'code',
        key: 'code:1',
    },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time:2',
    },
    {
        title: 'Ngày trả',
        dataIndex: 'dateReturns',
        key: 'dateReturns:3',
    },
    {
        title: 'Nhà cung cấp',
        dataIndex: 'nameSupplier',
        key: 'nameSupplier:4',
    },
    {
        title: 'Tổng số lượng',
        dataIndex: 'totalNum',
        key: 'totalNum:5',
    },
    {
        title: 'Tổng số mặt hàng',
        dataIndex: 'totalNumProduct',
        key: 'totalNumProduct:6',
    },
    {
        title: 'Tổng tiền hàng trả',
        dataIndex: 'totalPrice',
        key: 'totalPrice:7',
    },
    {
        title: 'Giảm giá',
        dataIndex: 'saleOff',
        key: 'saleOff:8',
    },
    {
        title: 'NCC cần trả',
        dataIndex: 'totalPayment',
        key: 'totalPayment:9',
    },
    {
        title: 'NCC đã trả',
        dataIndex: 'totalPaid',
        key: 'totalPaid:10',
    },
    {
        title: 'Ghi chú',
        dataIndex: 'note',
        key: 'note:11',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status:12',
    },
];

//end returnsPurchase

//partner
//customer
export const colsCustomer = [
    {
        title: 'Mã khách hàng',
        dataIndex: 'code',
        key: 'code:1',
    },
    {
        title: 'Tên khách hàng',
        dataIndex: 'name',
        key: 'name:2',
    },
    {
        title: 'Loại khách',
        dataIndex: 'categoryCustomer',
        key: 'categoryCustomer:3',
    },
    {
        title: 'Điện thoại',
        dataIndex: 'phone',
        key: 'phone:4',
    },
    {
        title: 'Nhóm khách hàng',
        dataIndex: 'group',
        key: 'group:5',
    },
    {
        title: 'Giới tính',
        dataIndex: 'sex',
        key: 'sex:6',
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'birthday',
        key: 'birthday:7',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email:8',
    },
    {
        title: 'Facebook',
        dataIndex: 'facebook',
        key: 'facebook:9',
    },
    {
        title: 'Công ty',
        dataIndex: 'company',
        key: 'company:10',
    },
    {
        title: 'Mã số thuế',
        dataIndex: 'taxCode',
        key: 'taxCode:11',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address:12',
    },
    {
        title: 'Khu vực',
        dataIndex: 'district',
        key: 'district:13',
    },
    {
        title: 'Phường/xã',
        dataIndex: 'subDistrict',
        key: 'subDistrict:14',
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'dateCreated',
        key: 'dateCreated:15',
    },
    {
        title: 'Ngày GD cuối',
        dataIndex: 'lastDateTransaction',
        key: 'lastDateTransaction:16',
    },
    {
        title: 'Nợ hiện tại',
        dataIndex: 'debt',
        key: 'debt:17',
    },
    {
        title: 'Tổng mua',
        dataIndex: 'totalBuy',
        key: 'totalBuy:18',
    },
    {
        title: 'Tổng mua trừ trả hàng',
        dataIndex: 'totalBuyWithReturns',
        key: 'totalBuyWithReturns:19',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status:20',
    },
];

//end customer
//supplier
export const colsSupplier = [
    {
        title: 'Mã NCC',
        dataIndex: 'code',
        key: 'code:1',
    },
    {
        title: 'Tên NCC',
        dataIndex: 'name',
        key: 'name:2',
    },
    {
        title: 'Điện thoại',
        dataIndex: 'phone',
        key: 'phone:3',
    },
    {
        title: 'Nhóm NCC',
        dataIndex: 'group',
        key: 'group:4',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email:5',
    },
    {
        title: 'Công ty',
        dataIndex: 'company',
        key: 'company:6',
    },
    {
        title: 'Mã số thuế',
        dataIndex: 'taxCode',
        key: 'taxCode:7',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address:8',
    },
    {
        title: 'Khu vực',
        dataIndex: 'district',
        key: 'district:9',
    },
    {
        title: 'Phường/xã',
        dataIndex: 'subDistrict',
        key: 'subDistrict:10',
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'dateCreated',
        key: 'dateCreated:11',
    },
    {
        title: 'Nợ cần trả hiện tại',
        dataIndex: 'debt',
        key: 'debt:12',
    },
    {
        title: 'Tổng bán',
        dataIndex: 'totalSell',
        key: 'totalSell:13',
    },
    {
        title: 'Tổng bán trừ trả hàng',
        dataIndex: 'totalSellWithReturns',
        key: 'totalSellWithReturns:14',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status:15',
    },
];

//end supplier
//cashbook
export const colsCashBook = [
    {
        title: 'Mã phiếu',
        dataIndex: 'code',
        key: 'code:1',
    },
    {
        title: 'Thời gian',
        dataIndex: 'name',
        key: 'name:2',
    },
    {
        title: 'Ngày thu/chi',
        dataIndex: 'dateCreated',
        key: 'dateCreated:3',
    },
    {
        title: 'Loại thu chi',
        dataIndex: 'type',
        key: 'type:4',
    },
    {
        title: 'Mã người nộp/nhận',
        dataIndex: 'codePartner',
        key: 'codePartner:5',
    },
    {
        title: 'Người nộp/nhận',
        dataIndex: 'namePartner',
        key: 'namePartner:6',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone:7',
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address:8',
    },
    {
        title: 'Giá trị',
        dataIndex: 'totalAmount',
        key: 'totalAmount:9',
    },
    {
        title: 'Ghi chú',
        dataIndex: 'note',
        key: 'note:10',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status:11',
    },
];

export const colVOfEndOfDay = [
    { title: 'Mã chứng từ', dataIndex: 'code', key: 'code' },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'SL sản phẩm ',
        dataIndex: 'totalNumProduct',
        key: 'totalNumProduct',
    },
    {
        title: 'Doanh thu',
        dataIndex: 'revenue',
        key: 'revenue',
    },
    {
        title: 'Thu khác ',
        dataIndex: 'revenueOther',
        key: 'revenueOther',
    },
    {
        title: 'Thực thu',
        dataIndex: 'revenueReal',
        key: 'revenueReal',
    },
];

export const colHOfEndOfDay = [
    { title: 'Mã chứng từ', dataIndex: 'code', key: 'code' },
    {
        title: 'Khách hàng',
        dataIndex: 'customer',
        key: 'customer',
    },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'T.Toán',
        dataIndex: 'paymentType',
        key: 'paymentType',
    },
    {
        title: 'SLSP',
        dataIndex: 'totalNumProduct',
        key: 'totalNumProduct',
    },
    {
        title: 'Tổng tiền hàng',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
    },
    {
        title: 'Giảm giá HĐ',
        dataIndex: 'saleOff',
        key: 'saleOff',
    },
    {
        title: 'Doanh thu',
        dataIndex: 'revenue',
        key: 'revenue',
    },
    {
        title: 'Thu khác ',
        dataIndex: 'revenueOther',
        key: 'revenueOther',
    },
    {
        title: 'Thực thu',
        dataIndex: 'revenueReal',
        key: 'revenueReal',
    },
    {
        title: 'Ghi nợ',
        dataIndex: 'debt',
        key: 'debt',
    },
];
