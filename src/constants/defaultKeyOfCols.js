//merchandise
//product
export const keyOfColsProduct = [
    'code:1',
    'name:2',
    'price:5',
    'costPrice:6',
    'inventory:8',
    'expectedSoldOut:10',
];

//end product
// pricebook
export const keyOfColsPriceBook = [
    'code:1',
    'name:2',
    'inventory:3',
    'costPrice:4',
    'price:5',
];

//end pricebook
//stockTakes
export const keyOfColsStockTakes = [
    'code:1',
    'time:2',
    'dateStockTakes:3',
    'numReal:4',
    'totalReal:5',
    'totalDiff:6',
    'status:13',
];
//end stockTakes

//transaction
//invoices
export const keyOfColsInvoices = [
    'code:1',
    'time:2',
    'codeReturns:5',
    'nameCustomer:6',
    'totalPrice:13',
    'saleOff:14',
    'totalPaid:16',
    'status:18',
];

//end invoices
//returns
export const keyOfColsReturns = [
    'code:1',
    'time:3',
    'nameCustomer:5',
    'totalPaymentForCustomer:8',
    'totalPaidForCustomer:9',
    'status:11',
];

//end returns
//purchase
export const keyOfColsPurchase = [
    'code:1',
    'time:2',
    'nameSupplier:5',
    'totalPayment:10',
    'status:13',
];

//end purchase
//returnPurchase
export const keyOfColsReturnsPurchase = [
    'code:1',
    'time:2',
    'nameSupplier:4',
    'totalPrice:7',
    'totalPayment:9',
    'totalPaid:10',
    'status:12',
];
//end returnPurchase

//partner
//customer
export const keyOfColsCustomer = [
    'code:1',
    'name:2',
    'phone:4',
    'debt:17',
    'totalBuy:18',
    'totalBuyWithReturns:19',
    'status:20',
];

//end customer
//supplier
export const keyOfColsSupplier = [
    'code:1',
    'name:2',
    'phone:3',
    'email:5',
    'debt:12',
    'totalSell:13',
    'totalSellWithReturns:14',
    'status:15',
];

//end supplier
//cashbook
export const keyOfColsCashBook = [
    'code:1',
    'time:2',
    'type:4',
    'namePartner:6',
    'totalAmount:9',
    'status:11',
];