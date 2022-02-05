import { useState } from 'react';
import Icon from 'components/ui/icon/Icon';
import './styles/card.scss';

const CardFilter = ({ title, children }) => {
	const [visible, setVisible] = useState(true);
	return (
		<div className="card-filter">
			<div className="header">
				<span className="title">{title}</span>
				<span className="icon" onClick={() => setVisible(!visible)}>
					<Icon className={visible ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line"} />
				</span>
			</div>
			{visible ? <div className="content">{children}</div> : null}
		</div>
	);
};

export default CardFilter;
