import { useContext,useState } from 'react';
import { Row, Col } from 'antd';
import Filter from './Filter';
import Search from './Search';
import GroupButton from './GroupButton';
import Table from 'components/common/manage/Table';
import SupplierContext from 'contexts/createContext/SupplierContext';
import ModalInfoSupplier from '../modals/ModalInfoSupplier';
import '../styles/main.scss';

const Content = () => {
	const { suppliers, selectSupplier } = useContext(SupplierContext);
    const [visible, setVisible] = useState(false);

    const onClickRow = (record) => {
        selectSupplier(record);
        setVisible(true);
    };

    const onRow = (record) => {
        return {
            onClick: () => onClickRow(record),
        };
    };

	return (
		<Row gutter={[8, 8]}>
			<Col span={24}>
				<Row gutter={[20, 8]}>
					<Col span={6}>
						<h3 style={{ fontWeight: '600' }}>Nhà cung cấp</h3>
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
						<Table data={suppliers} onRow={onRow}/>
					</Col>
				</Row>
			</Col>
			<ModalInfoSupplier
                visible={visible}
                onCancel={() => setVisible(false)}
            />
		</Row>
	);
};

export default Content;
