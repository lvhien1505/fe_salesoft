import { useEffect, useReducer } from 'react';
import SaleContext from 'contexts/createContext/SaleContext';
import saleReducer from 'contexts/reducers/sale';
import {
	addProduct,
	removeProduct,
	changeActiveKey,
	addTab,
	removeTab,
	changeTotalNum,
	changeValueSaleOffProduct,
	changeValueSaleOff,
	changeValuePayment,
	getProducts,
	resetTab
} from 'contexts/action-creators/sale';

import productApi from 'apis/productApi';
import invoiceApi from 'apis/invoiceApi';
import openNotification from 'helpers/notification';

const SaleState = ({ children }) => {

	const initialState = {
		tabs: [
			{
				key: '1',
				products: [],
				valueSaleOff: 0,
				totalPaid: 0,
			},
		],
		activeKey: '1',
		products: [],
		isChange:false,
		typeTablePrice:'default',
		tablePrices:[],
		productsOther:[]
	};

	const [state, dispatch] = useReducer(saleReducer, initialState);

	const onHandleChangeActiveKey = (activeKey) => {
		dispatch(changeActiveKey(activeKey));
	};

	const onHandleAddProduct = (product) => {
		dispatch(addProduct(product));
	};

	const onHandleRemoveProduct = (productIndex) => {
		dispatch(removeProduct(productIndex));
	};


	const onHandleAddTab = (tab, newActiveKey) => {
		dispatch(addTab(tab, newActiveKey));
	};

	const onHandleRemoveTab = (tab, newActiveKey) => {
		dispatch(removeTab(tab, newActiveKey));
	};

	const onHandleChangeTotalNum = (productIndex, value) => {
		dispatch(changeTotalNum(productIndex, value));
	};

	const onHandleChangeValueSaleOffProduct = (productIndex, value) => {
		dispatch(changeValueSaleOffProduct(productIndex, value));
	};

	const onHandleChangeValueSaleOff = (value) => {
		dispatch(changeValueSaleOff(value));
	};

	const onHandleChangeValuePayment = (value) => {
		dispatch(changeValuePayment(value));
	};

	const onHandleResetTab = () => {
		dispatch(resetTab());
	};

	//Product
    const getProductsWithLimit = async () => {
        try {
            let fetch = await productApi.getProductsWithLimit(1, 50);

            if (fetch.status) {
                dispatch(getProducts(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

	//Invoice
	const createInvoice = async (invoice) => {
        try {
            let fetch = await invoiceApi.create(invoice);

            if (fetch.status) {
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

	useEffect(() => {
        getProductsWithLimit();
    }, []);

	return (
		<SaleContext.Provider
			value={{
				isChange:state.isChange,
				products:state.products,
				tabs: state.tabs,
				activeKey: state.activeKey,
				changeActiveKey: onHandleChangeActiveKey,
				addTab: onHandleAddTab,
				removeTab: onHandleRemoveTab,
				addProduct: onHandleAddProduct,
				removeProduct:onHandleRemoveProduct,
				changeTotalNum: onHandleChangeTotalNum,
				changeValueSaleOffProduct: onHandleChangeValueSaleOffProduct,
				changeValueSaleOff: onHandleChangeValueSaleOff,
				changeValuePayment: onHandleChangeValuePayment,
				createInvoice:createInvoice,
				resetTab:onHandleResetTab,
				typeTablePrice:state.typeTablePrice,
				productsOther:state.productsOther
			}}
		>
			{children}
		</SaleContext.Provider>
	);
};

export default SaleState;
