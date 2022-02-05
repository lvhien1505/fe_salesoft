import { useState } from 'react';
import { Row, Col, Tabs, Form, Input, Collapse, Button, Modal } from 'antd';
import ImgCrop from 'antd-img-crop';
import {
	FieldInput,
	FieldInputNumber,
	FieldSelect,
} from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import UploadImage from 'components/ui/upload/UploadImage';
import BtnActiveModalUtils from './ModalUtils';

const CollapseCustom = ({ header, children }) => {
	const { Panel } = Collapse;
	return (
		<Collapse>
			<Panel header={header} key="1">
				{children}
			</Panel>
		</Collapse>
	);
};

const PropCollapseCustom = () => {
	return (
		<CollapseCustom header="Thuộc tính">
			<ButtonCustom
				icon={<Icon className="ri-add-line" />}
				type="secondary"
				text="Thêm thuộc tính"
			/>
		</CollapseCustom>
	);
};

const UnitCollapseCustom = () => {
	return (
		<CollapseCustom header="Đơn vị tính">
			<ButtonCustom
				icon={<Icon className="ri-add-line" />}
				type="secondary"
				text="Thêm đơn vị tính"
			/>
		</CollapseCustom>
	);
};

const ModalProduct = ({ type, visible, onCancel, ...rest }) => {
	const { TabPane } = Tabs;
	const { useForm, Item } = Form;

	const [formProduct] = useForm();

	const styles = {
		position: 'relative',
		top: '-70px',
	};

	const stylesDetailDesc = {
		title: {
			borderBottom: '1px solid #bfbfbf',
			padding: '0.75rem 0 0.75rem 0.75rem',
			backgroundColor: '#fafafa',
			border: '1px solid #bfbfbf',
			borderTopLeftRadius: '4px',
			borderTopRightRadius: '4px',
		},
		content: {
			border: '1px solid #bfbfbf',
			borderTop: 0,
			borderBottomLeftRadius: '4px',
			borderBottomRightRadius: '4px',
		},
	};

	const styleModalUtils = {
		position: 'absolute',
		bottom: '1px',
		right: '0',
	};

	const onSumitForm = () => {
		formProduct.submit();
	};

	const onFinishForm = (values) => {
		console.log(values);
	};

	return (
		<Modal
			title={type === 'add' ? 'Thêm hàng hóa' : 'Cập nhật'}
			visible={visible}
			onCancel={onCancel}
			{...rest}
			footer={null}
			width={900}
			centered
		>
			<Form form={formProduct} onFinish={onFinishForm}>
				<Tabs centered style={styles}>
					<TabPane tab="Thông tin" key="1">
						<Row justify="space-between" gutter={[36, 8]}>
							<Col span={12}>
								<FieldInput label="Tên hàng" name="name" />
								<div style={{ position: 'relative' }}>
									<FieldSelect
										label="Nhóm hàng"
										name="category"
										styles={{ paddingTop: '6px' }}
									/>
									<div style={styleModalUtils}>
										<BtnActiveModalUtils titleModal="nhóm hàng" />
									</div>
								</div>
								<div style={{ position: 'relative' }}>
									<FieldSelect
										label="Thương hiệu"
										name="brand"
										styles={{ paddingTop: '6px' }}
									/>
									<div style={styleModalUtils}>
										<BtnActiveModalUtils titleModal="thương hiệu" />
									</div>
								</div>
								<div style={{ position: 'relative' }}>
									<FieldSelect
										label="Vị trí"
										name="position"
										styles={{ paddingTop: '6px' }}
									/>
									<div style={styleModalUtils}>
										<BtnActiveModalUtils titleModal="vị trí" />
									</div>
								</div>
								<FieldInputNumber
									label="Tồn kho"
									name="inventory"
								/>
							</Col>
							<Col span={12}>
								<FieldInputNumber
									label="Giá vốn"
									name="costPrice"
								/>
								<FieldInputNumber
									label="Giá bán"
									name="price"
								/>
								<FieldInputNumber
									label="Trọng lượng"
									name="weight"
								/>
							</Col>
						</Row>
						<Row style={{ marginTop: '1rem' }}>
							<Col span={24}>
								<UploadImage max={5} />
							</Col>
						</Row>
						<Row style={{ marginTop: '1rem' }}>
							<Col span={24}>
								<PropCollapseCustom />
							</Col>
						</Row>
						<Row style={{ marginTop: '1rem' }}>
							<Col span={24}>
								<UnitCollapseCustom />
							</Col>
						</Row>
					</TabPane>
					<TabPane tab="Mô tả chi tiết" key="2">
						<div>
							<div style={stylesDetailDesc.title}>
								<h4 style={{ margin: 0 }}>Định mức tồn</h4>
							</div>
							<div style={stylesDetailDesc.content}>
								<Row
									style={{ padding: '1rem 2rem' }}
									gutter={[32, 0]}
								>
									<Col span={12}>
										<FieldInputNumber
											label="Ít nhất"
											name="lessEstimate"
										/>
									</Col>
									<Col span={12}>
										<FieldInputNumber
											label="Nhiều nhất"
											name="mostEstimate"
										/>
									</Col>
								</Row>
							</div>
						</div>
						<div style={{ marginTop: '2rem' }}>
							<div style={stylesDetailDesc.title}>
								<h4 style={{ margin: 0 }}>Mô tả</h4>
							</div>
							<div style={stylesDetailDesc.content}>
								<Item name="desciption">
									<Input.TextArea
										bordered={false}
										autoSize={{ minRows: 4, maxRows: 4 }}
									/>
								</Item>
							</div>
						</div>
						<div style={{ marginTop: '2rem' }}>
							<div style={stylesDetailDesc.title}>
								<h4 style={{ margin: 0 }}>
									Mẫu ghi chú (Hóa đơn...)
								</h4>
							</div>
							<div style={stylesDetailDesc.content}>
								<Item name="notePattern">
									<Input.TextArea
										bordered={false}
										autoSize={{ minRows: 4, maxRows: 4 }}
									/>
								</Item>
							</div>
						</div>
					</TabPane>
				</Tabs>
			</Form>
		</Modal>
	);
};

const BtnActiveModalProduct = ({ text, iconClassName, type, ...rest }) => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<ButtonCustom
				text={text}
				icon={
					<Icon
						className={
							iconClassName ? iconClassName : 'ri-add-line'
						}
					/>
				}
				type={type}
				onClick={() => setVisible(true)}
				{...rest}
			/>
			<ModalProduct
				type="add"
				visible={visible}
				onCancel={() => setVisible(false)}
			/>
		</>
	);
};

export { ModalProduct };

export default BtnActiveModalProduct;
