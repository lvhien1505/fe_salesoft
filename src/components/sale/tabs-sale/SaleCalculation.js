import { useState, useContext } from 'react';
import { Row, Col, Button, Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import { InputNumber } from 'components/ui/input/Input';
import Icon from 'components/ui/icon/Icon';
import SearchCustomer from 'components/search/SearchCustomer';
import TextPrice from 'components/common/TextPrice';
import { MomentHour, MomentDate } from 'components/common/Moment';
import SaleContext from 'contexts/createContext/SaleContext';

const Field = ({ label, suffixLabel, children, styleLabel }) => {
	const style = {
		display: 'flex',
		justifyContent: 'flex-end',
	};
	return (
		<Col span={24}>
			<Row align="middle">
				<Col span={12}>
					<span style={styleLabel}>{label}</span>
					{suffixLabel}
				</Col>
				<Col span={12} style={style}>
					{children}
				</Col>
			</Row>
		</Col>
	);
};

const FieldDiscount = ({ valueSaleOff, totalPrice }) => {
	const { changeValueSaleOff } = useContext(SaleContext);

	const styleBtn = {
		position: 'absolute',
		top: '7px',
		left: '-1px',
	};

	const onChangeValue = (value) => {
		if (value <= 0 || isNaN(value)) {
			value = 0;
		}
		if (value >= totalPrice) {
			return changeValueSaleOff(totalPrice);
		}
		changeValueSaleOff(value);
	};

	return (
		<Field label="Giảm giá">
			<div style={{ position: 'relative' }}>
				<InputNumber
					value={valueSaleOff}
					style={{ color: '#4bac4d', fontWeight: '600' }}
					onValueChange={(values) => onChangeValue(values.floatValue)}
				/>
				<ButtonCustom text={'VND'} style={styleBtn} />
			</div>
		</Field>
	);
};

const SaleCalculation = ({
	nameBill,
	products,
	totalPrice,
	valueSaleOff,
	totalPayment,
	totalPaid,
	change,
}) => {
	const styleBtn = {
		width: '100%',
		padding: '1.25rem 0',
		borderRadius: '0.25rem',
	};

	const { changeValuePayment } = useContext(SaleContext);

	const onChangeValue = (value) => {
		if (value <= 0 || isNaN(value)) {
			value = 0;
		}
		changeValuePayment(value);
	};

	const onFinish = ()=>{
		console.log(products,totalPrice,valueSaleOff,totalPayment,totalPaid,change);
	}

	return (
		<Row gutter={[0, 16]}>
			<Field label={<ButtonCustom type="secondary" text={nameBill} />}>
				<Space>
					<span>
						<MomentHour />
					</span>
					<span>
						<MomentDate />
					</span>
				</Space>
			</Field>
			<Field label="Người bán">
				<span>Tran sang</span>
			</Field>
			<Col span={24}>
				<SearchCustomer style={{ width: '100%' }} />
			</Col>
			<Field label="Tổng tiền hàng" styleLabel={{ fontWeight: 600 }}>
				<span style={{ fontWeight: '600' }}>
					<TextPrice value={totalPrice} />
				</span>
			</Field>
			<FieldDiscount
				valueSaleOff={valueSaleOff}
				totalPrice={totalPrice}
			/>
			<Field label="Khách cần trả" styleLabel={{ fontWeight: 600 }}>
				<span style={{ fontWeight: '600' }}>
					<TextPrice value={totalPayment} />
				</span>
			</Field>
			<Field label="Thanh toán">
				<InputNumber
					value={totalPaid || 0}
					style={{ color: '#4bac4d', fontWeight: '600' }}
					onValueChange={(values) => onChangeValue(values.floatValue)}
				/>
			</Field>
			<Field label={change >= 0 ? 'Tiền thừa' : 'Khách thiếu'}>
				<span>
					<TextPrice value={change >= 0 ? change : -change} />
				</span>
			</Field>
			<Col span={24}>
				<Row align="middle" gutter={[8, 8]}>
					<Col span={4}>
						<ButtonCustom
							text="IN"
							style={styleBtn}
							type={'danger'}
						/>
					</Col>
					<Col span={20}>
						<ButtonCustom
							text="THANH TOÁN"
							style={styleBtn}
							type={'secondary'}
							onClick={onFinish}
						/>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default SaleCalculation;
