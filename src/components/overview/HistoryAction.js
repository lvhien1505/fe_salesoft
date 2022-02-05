import { Timeline, Space } from 'antd';
import { Link } from 'react-router-dom';
import Icon from 'components/ui/icon/Icon';
import TextPrice from 'components/common/TextPrice';

const HistoryAction = () => {
	const { Item } = Timeline;
	return (
		<div className="history">
			<div className="history__title">
				<span>LỊCH SỬ GẦN ĐÂY</span>
			</div>
			<div className="history__content">
				<Timeline>
					<Item
						dot={
							<Icon
								className="ri-shopping-cart-line"
								style={{
									fontSize: '20px',
									fontWeight: 700,
									color: '#4bac4d',
								}}
							/>
						}
					>
						<Space direction="vertical" size={[4, 0]}>
							<span>
								<span>Trần Sang</span> vừa{' '}
								<Link to="/"> bán đơn hàng </Link> với giá trị{' '}
								<span
									style={{
										fontWeight: 700,
										color: '#4bac4d',
									}}
								>
									<TextPrice value={23000} />
								</span>
							</span>
							<span
								style={{
									fontSize: '0.75rem',
									fontStyle: 'italic',
								}}
							>
								5 phút trước
							</span>
						</Space>
					</Item>
					<Item
						dot={
							<Icon
								className="ri-reply-line"
								style={{
									fontSize: '20px',
									fontWeight: 700,
									color: '#ff8030',
								}}
							/>
						}
					>
						<Space direction="vertical" size={[4, 0]}>
							<span>
								<span>Trần Sang</span> vừa{' '}
								<Link to="/"> nhận trả hàng </Link> với giá trị{' '}
								<span
									style={{
										fontWeight: 700,
										color: '#4bac4d',
									}}
								>
									<TextPrice value={23000} />
								</span>
							</span>
							<span
								style={{
									fontSize: '0.75rem',
									fontStyle: 'italic',
								}}
							>
								5 phút trước
							</span>
						</Space>
					</Item>
					<Item
						dot={
							<Icon
								className="ri-file-edit-line"
								style={{
									fontSize: '20px',
									fontWeight: 700,
									color: '#237fcd',
								}}
							/>
						}
					>
						<Space direction="vertical" size={[4, 0]}>
							<span>
								<span>Trần Sang</span> vừa{' '}
								<Link to="/"> nhập đơn hàng </Link> với giá trị{' '}
								<span
									style={{
										fontWeight: 700,
										color: '#4bac4d',
									}}
								>
									<TextPrice value={23000} />
								</span>
							</span>
							<span
								style={{
									fontSize: '0.75rem',
									fontStyle: 'italic',
								}}
							>
								5 phút trước
							</span>
						</Space>
					</Item>
				</Timeline>
			</div>
		</div>
	);
};

export default HistoryAction;
