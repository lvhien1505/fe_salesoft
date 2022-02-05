import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Row, Col, Button } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';

const ButtonModal = ({
	iconProps,
	buttonProps,
	modalProps,
	children,
	buttonGroups,
	onHandleAction,
	btnDefault,
}) => {
	const [visible, setVisible] = useState(false);

	const toggleModal = (trigger) => {
		setVisible(trigger);
	};

	const handleClickBtnSuccess = () => {
		const resultHandle = onHandleAction();
		if (resultHandle) {
			toggleModal(false);
		}
	};

	return (
		<>
			{btnDefault ? (
				<ButtonCustom
					text={buttonProps.text}
					icon={<Icon {...iconProps} />}
					onClick={() => toggleModal(true)}
					isSuffix={buttonProps.isSuffix ? true : false}
					{...buttonProps}
				/>
			) : (
				<Button
					icon={<Icon {...iconProps} />}
					onClick={() => toggleModal(true)}
					{...buttonProps}
				>
					{buttonProps.text}
				</Button>
			)}
			<Modal
				visible={visible}
				onCancel={() => toggleModal(false)}
				footer={null}
				{...modalProps}
			>
				{children}
				<Row gutter={[16, 16]} justify="end">
					<Col>
						<ButtonCustom
							type="danger"
							text="Bỏ qua"
							icon={<Icon className="ri-close-line" />}
							onClick={() => toggleModal(false)}
						/>
					</Col>
					{buttonGroups && <Col>{buttonGroups}</Col>}
					<Col>
						<ButtonCustom
							text="Cập nhật"
							icon={<Icon className="ri-check-line" />}
							onClick={handleClickBtnSuccess}
						/>
					</Col>
				</Row>
			</Modal>
		</>
	);
};

ButtonModal.defaultProps = {
	buttonProps: {
		text: '',
		iconClassName: '',
		isSuffix: false,
	},
	iconProps: {
		className: '',
	},
	btnDefault: true,
};

ButtonModal.propTypes = {
	buttonProps: PropTypes.object,
	iconProps: PropTypes.object,
	btnDefault: PropTypes.bool,
};

export default ButtonModal;
