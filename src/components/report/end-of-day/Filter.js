import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import CardFilter from 'components/common/CardFilter';
import ButtonCustom from 'components/ui/button/Button';

const Filter = ({ onChangeShowType }) => {
	const [reportType, setReportType] = useState('vertical');
	const [concernType, setConcernType] = useState('sale');

	const dataShowType = [{ value: 'report', label: 'Báo cáo' }];
	const dataConcern = [
		{ value: 'sale', label: 'Bán hàng' },
		{ value: 'cashflow', label: 'Thu chi' },
		{ value: 'merchandise', label: 'Hàng hóa' },
	];

	const onChangeConcern = (value) => {
		setConcernType(value);
	};

	const onSelectReportType = () => {
		if (reportType === 'vertical') {
			setReportType('horitozal');
			onChangeShowType('horitozal');
		} else {
			setReportType('vertical');
			onChangeShowType('vertical');
		}
	};

	return (
		<Row gutter={[0, 16]}>
			<Col span={24}>
				<CardFilter title="Kiểu hiển thị">
					<Row align="middle" justify="space-between">
						<Col>
							<GroupRadio
								data={dataShowType}
								defaultValue="report"
							/>
						</Col>
						<Col>
							<ButtonCustom
								text={
									reportType === 'vertical' ? 'Dọc' : 'Ngang'
								}
								onClick={onSelectReportType}
							/>
						</Col>
					</Row>
				</CardFilter>
			</Col>
			<Col span={24}>
				<CardFilter title="Mối quan tâm">
					<GroupRadio
						data={dataConcern}
						defaultValue="sale"
						onHandleChange={onChangeConcern}
					/>
				</CardFilter>
			</Col>
			<Col span={24}>
				<CardFilter title="Chọn ngày"></CardFilter>
			</Col>
			<Col span={24}>
				<CardFilter title="Lọc khách hàng"></CardFilter>
			</Col>
			{concernType === 'sale' ? (
				<>
					<Col span={24}>
						<CardFilter title="Phương thức thanh toán"></CardFilter>
					</Col>
				</>
			) : concernType === 'cashflow' ? (
				<>
					<Col span={24}>
						<CardFilter title="Phương thức thanh toán"></CardFilter>
					</Col>
					<Col span={24}>
						<CardFilter title="Loại thu chi"></CardFilter>
					</Col>
				</>
			) : (
				<>
					<Col span={24}>
						<CardFilter title="Lọc hàng hóa"></CardFilter>
					</Col>
					<Col span={24}>
						<CardFilter title="Loại hàng"></CardFilter>
					</Col>
					<Col span={24}>
						<CardFilter title="Lọc thuộc tính"></CardFilter>
					</Col>
					<Col span={24}>
						<CardFilter title="Nhóm hàng"></CardFilter>
					</Col>
				</>
			)}
		</Row>
	);
};

export default Filter;
