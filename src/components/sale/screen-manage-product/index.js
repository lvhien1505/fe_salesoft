import { useState } from 'react';
import ResizePanel from 'react-resize-panel';
import { Row, Col, Button, Space, Image } from 'antd';
import ListProduct from './ListProduct';
import ButtonCustom from 'components/ui/button/Button';
import ButtonModal from 'components/ui/button/ButtonModal';
import Pagnigation from 'components/common/Pagnigation';
import Icon from 'components/ui/icon/Icon';
import data from 'apis/fakedata/products.json';

import '../styles/screenManageProduct.scss';

const ScreenSelectProduct = () => {
	
	const [visible, setVisible] = useState(false);
	const styleResizePanel = {
		width: '100%',
		borderLeft: '2px solid #da624a',
		backgroundColor: '#fff',
		boxShadow: `0 0.46875rem 2.1875rem rgba(31, 10, 6, 0.03),
					0 0.9375rem 1.40625rem rgba(31, 10, 6, 0.03),
					0 0.25rem 0.53125rem rgba(31, 10, 6, 0.05),
					0 0.125rem 0.1875rem rgba(31, 10, 6, 0.03)`,
	};

	const turnOnScreen = () => {
		setVisible(true);
	};

	const turnOffScreen = () => {
		setVisible(false);
	};
	return (
		<>
			<ButtonCustom
				text="Màn hình sản phẩm"
				type="default"
				style={{ height: '40px' }}
				onClick={turnOnScreen}
			/>
			{visible ? (
				<div className="screen-product">
					<div
						style={{ width: '100%', height: '100%' }}
						onClick={turnOffScreen}
					></div>
					<ResizePanel
						direction="w"
						style={styleResizePanel}
						handleClass="resizable--custom"
						// borderClass="resizable__border--custom"
					>
						<div style={{ width: '100%', padding: '1rem 1.25rem' }}>
							<Row justify="space-between">
								<Col>
									<Space>
										<ButtonModal
											iconProps={{
												className: 'ri-add-line',
											}}
											buttonProps={{
												type: 'primary',
											}}
											btnDefault={false}
										/>
										<ButtonModal
											iconProps={{
												className: 'ri-filter-line',
											}}
											buttonProps={{
												type: 'primary',
											}}
											btnDefault={false}
										/>
										<ButtonModal
											iconProps={{
												className: 'ri-list-unordered',
											}}
											buttonProps={{
												type: 'primary',
											}}
											btnDefault={false}
										/>
										<Pagnigation />
									</Space>
								</Col>
								<Col>
									<Button
										icon={
											<Icon className="ri-close-line" />
										}
										type="danger"
										onClick={turnOffScreen}
									/>
								</Col>
							</Row>
							<Row
								style={{ marginTop: '1rem' }}
								gutter={[12, 12]}
							>
								<ListProduct dataSource={data.products} />
							</Row>
						</div>
					</ResizePanel>
				</div>
			) : null}
		</>
	);
};

export default ScreenSelectProduct;
