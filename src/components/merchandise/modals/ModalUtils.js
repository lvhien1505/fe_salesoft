import { useState } from 'react';
import { Form, Modal, Button, Space } from 'antd';
import { FieldInput } from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';

const ModalUtils = ({ type, title, visible, onCancel, ...rest }) => {
	title = ' ' + title;
	const [form] = Form.useForm();
	const onSumitForm = () => {
		form.submit();
	};

	const onFinishForm = (values) => {
		console.log(values);
	};

	return (
		<Modal
			title={type === 'add' ? 'Thêm' + title : 'Cập nhật' + title}
			visible={visible}
			onCancel={onCancel}
			{...rest}
			footer={null}
			width={500}
		>
			<Form form={form} onFinish={onFinishForm}>
				<FieldInput label={'Tên' + title} name="name" />
			</Form>
		</Modal>
	);
};

const BtnActiveModalUtils = ({ titleModal, ...rest }) => {
	const [typeModal, setTypeModal] = useState('add');
	const [visible, setVisible] = useState(false);

	const styleBtn = { border: '0', boxShadow: 'none', width: '1.5rem' };

	const onActiveModal = (type) => {
		setTypeModal(type);
		setVisible(true);
	};

	return (
		<>
			<Button
				icon={<Icon className="ri-pencil-fill" />}
				onClick={() => onActiveModal('update')}
				{...rest}
				style={styleBtn}
			/>
			<Button
				icon={<Icon className="ri-add-line" />}
				onClick={() => onActiveModal('add')}
				{...rest}
				style={styleBtn}
			/>

			<ModalUtils
				type={typeModal}
				title={titleModal}
				visible={visible}
				onCancel={() => setVisible(false)}
			/>
		</>
	);
};

export default BtnActiveModalUtils;
