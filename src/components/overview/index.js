import { Row, Col } from 'antd';
import Card from './Card';
import HistoryAction from './HistoryAction';
import ChartSales from './ChartSales';

import './styles/history.scss';

const ContentOverview = ({ className }) => {
	return (
		<Row gutter={[24, 16]} style={{ height: '100%',paddingBottom:'1.25rem' }}>
			<Col span={17} >
				<Row gutter={[24, 16]}>
					<Col span={8}>
						<Card
							title="Doanh số"
							subTitle={'2 hóa đơn'}
							value={'46,000 VND'}
							className="card-sales"
						/>
					</Col>
					<Col span={8}>
						<Card
							title="Trả hàng"
							subTitle={'0 phiếu'}
							value={'86,000 VND'}
							className="card-returns"
						/>
					</Col>
					<Col span={8}>
						<Card
							title="So với cùng kì "
							subTitle={'Tăng'}
							value={'99%'}
							className="card-growth--up"
						/>
					</Col>
				</Row>
				<Row style={{ marginTop: '1.25rem' }}>
					<Col span={24}>
						<ChartSales />
					</Col>
				</Row>
			</Col>
			<Col span={7}>
				<HistoryAction />
			</Col>
		</Row>
	);
};

export default ContentOverview;
