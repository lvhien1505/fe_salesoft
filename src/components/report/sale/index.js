import { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Radio } from 'antd';
import ScreenReport from '../ScreenReport';
import CardFilter from 'components/common/CardFilter';
import ButtonCustom from 'components/ui/button/Button';
import { colVOfEndOfDay, colHOfEndOfDay } from 'constants/columns';

const GroupRadio = ({ data, defaultValue, onHandleChange }) => {
	const { Group } = Radio;

	return (
		<Group
			defaultValue={defaultValue}
			onChange={(e) => onHandleChange(e.target.value)}
		>
			<Row gutter={[0, 4]}>
				{data.map((radio, key) => (
					<Col span={24} key={key}>
						<Radio value={radio.value}>{radio.label}</Radio>
					</Col>
				))}
			</Row>
		</Group>
	);
};

const Content = () => {
	const [colsTable, setColsTable] = useState(colVOfEndOfDay);
	const [concernType, setConcernType] = useState('sale');
	const [reportType, setReportType] = useState('vertical');

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
			setColsTable(colHOfEndOfDay);
			setReportType('horitozal');
		} else {
			setColsTable(colVOfEndOfDay);
			setReportType('vertical');
		}
	};

	return (
		<Row gutter={[16, 16]}>
			<Col span={18}>
				<ScreenReport
					title="Báo cáo cuối ngày về bán hàng"
					colsTable={colsTable}
					styleContent={
						reportType === 'horitozal' ? { width: '95%' } : {}
					}
				/>
			</Col>
			<Col span={6}>
				<h3 style={{ fontWeight: '600' }}>Báo cáo bán hàng</h3>
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
											reportType === 'vertical'
												? 'Dọc'
												: 'Ngang'
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
			</Col>
		</Row>
	);
};

GroupRadio.defaultProps = {
	data: [],
};

GroupRadio.propTypes = {
	data: PropTypes.array,
	onHandleChange: PropTypes.func,
};
export default Content;
