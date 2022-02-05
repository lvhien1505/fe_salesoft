import { Button } from 'antd';
import PropTypes from 'prop-types';
import Icon from 'components/ui/icon/Icon';

import './button.scss';

const ButtonCustom = ({ type, text, isSuffix, ...rest }) => {
	return (
		<Button
			className={
				'btn--format' +
				' ' +
				(type === 'primary'
					? 'btn__primary--format'
					: type === 'secondary'
					? 'btn__secondary--format'
					: type === 'danger'
					? 'btn__danger--format'
					: type === 'default'
					? 'btn__default--format'
					: '')
			}
			{...rest}
		>
			{text}
			{isSuffix ? <Icon className="ri-arrow-down-s-fill" /> : null}
		</Button>
	);
};

ButtonCustom.defaultProps = {
	type: 'primary',
	text: 'Button',
	isSuffix: false,
};

ButtonCustom.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string,
	isSuffix: PropTypes.bool,
};

export default ButtonCustom;
