import { Row, Col } from 'antd';
import Filter from './Filter';
import Search from './Search';
import GroupButton from './GroupButton';
import Table from 'components/common/manage/Table';
import '../styles/main.scss';

const Content = () => {
	return (
		<Row gutter={[8, 8]}>
			<Col span={24}>
				<Row gutter={[20, 8]}>
					<Col span={6}>
						<h3 style={{ fontWeight: '600' }}>Hàng hóa</h3>
					</Col>
					<Col span={18}>
						<Row justify="space-between" gutter={[0,8]}>
							<Col span={10}>
								<Search />
							</Col>
							<Col>
								<GroupButton />
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col span={24}>
				<Row gutter={[20, 8]}>
					<Col span={6}>
						<Filter />
					</Col>
					<Col span={18}>
						<Table />
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Content;
