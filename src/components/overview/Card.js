import { Row, Col } from 'antd';

import './styles/card.scss';

const Card = ({ title, subTitle, value, className }) => {
	return (
		<div className={'card' + ' ' + className}>
			<Row justify="space-between" align="middle">
				<Col>
					<Row>
						<h4>{title}</h4>
					</Row>
					<Row>
						<h5>{subTitle}</h5>
					</Row>
				</Col>
				<Col>
					<h2>{value}</h2>
				</Col>
			</Row>
		</div>
	);
};

export default Card;
