import { useContext, useState, useMemo } from 'react';
import { Row, Col } from 'antd';
import ListProduct from './ListProduct';
import SaleCalculation from './SaleCalculation';
import SaleContext from 'contexts/createContext/SaleContext';

const Content = ({ nameBill, activeKey }) => {
	const state = useContext(SaleContext);
	const data = state.tabs.filter((tab) => tab.key === activeKey)[0];
	// declare totalPrice
	let totalPrice = data.products.reduce(
		(pre, current) => pre + current.totalPrice,
		0
	);

	if (isNaN(totalPrice)) {
		totalPrice = 0;
	}
	// declare valueSaleOff
	let valueSaleOff = data.valueSaleOff;
	if (isNaN(valueSaleOff)) {
		valueSaleOff = 0;
	}
	// declare totalPayment
	let totalPayment = totalPrice - valueSaleOff;
	// declare totalPaid
	let totalPaid = data.totalPaid;

	if (totalPaid === 0) {
		totalPaid = totalPayment;
	} else if (isNaN(totalPaid)) {
		totalPaid = 0;
	}

	//declare change
	let change = totalPaid - totalPayment;

	const styleColLeft = {
		height: '100%',
		padding: '0.5rem 0.5rem 0 0',
		overflowY: 'scroll',
	};

	const styleColRight = {
		height: '100%',
		padding: '0.5rem 0 0 0.5rem',
	};

	return useMemo(() => {
		return (
			<Row style={{ height: '100%' }}>
				<Col span={17} style={styleColLeft}>
					<ListProduct dataSource={data.products} />
				</Col>
				<Col span={7} style={styleColRight}>
					<SaleCalculation
						nameBill={nameBill}
						totalPrice={totalPrice}
						valueSaleOff={valueSaleOff}
						totalPayment={totalPayment}
						totalPaid={totalPaid}
						change={change}
						products={data.products}
					/>
				</Col>
			</Row>
		);
	}, [totalPrice, valueSaleOff, totalPaid]);
};

export default Content;
