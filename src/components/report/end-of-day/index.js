import { useState } from 'react';
import { Row, Col } from 'antd';
import ScreenReport from '../ScreenReport';
import Filter from './Filter';
import { colVOfEndOfDay, colHOfEndOfDay } from 'constants/columns';
import datas from 'apis/fakedata/dataReport';

const Content = () => {
	const [reportType, setReportType] = useState('vertical');

	const onChangeShowType = (type) => {
		setReportType(type);
	};

	return (
		<Row gutter={[32, 16]}>
			<Col span={18}>
				<ScreenReport
					title="Báo cáo cuối ngày về bán hàng"
					colsTable={
						reportType === 'vertical'
							? colVOfEndOfDay
							: colHOfEndOfDay
					}
					styleContent={
						reportType === 'horitozal' ? { width: '95%' } : {}
					}
					dataTable={datas.endOfDay}
				/>
			</Col>
			<Col span={6}>
				<h3 style={{ fontWeight: '600' }}>Báo cáo cuối ngày</h3>
				<Filter onChangeShowType={onChangeShowType} />
			</Col>
		</Row>
	);
};

export default Content;
