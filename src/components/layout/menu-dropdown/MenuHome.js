import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from 'components/ui/icon/Icon';

const MenuItem = ({ label, path, iconClassName, ...rest }) => {
	const navigate = useNavigate();
	const redirectPage = (path) => {
		return navigate(path);
	};

	return (
		<li onClick={() => redirectPage(path)} {...rest}>
			<Icon className={iconClassName} />
			<span>{label}</span>
		</li>
	);
};

const MenuHome = ({nameSelected}) => {
	const [visibleMenu, setVisibleMenu] = useState(false);

	const listMenuItem = [
		{
			label: 'Tổng quan',
			path: '/',
			iconClassName: 'ri-eye-line',
			nameSelected: 'overview',
		},
		{
			label: 'Hàng hóa',
			path: '/products',
			iconClassName: 'ri-inbox-archive-line',
			nameSelected: 'merchandise',
		},
		{
			label: 'Giao dịch',
			path: '/invoices',
			iconClassName: 'ri-arrow-left-right-line',
			nameSelected: 'transaction',
		},
		{
			label: 'Đối tác',
			path: '/customers',
			iconClassName: 'ri-user-3-line',
			nameSelected: 'partner',
		},
		{
			label: 'Sổ quỹ',
			path: '/cashbook',
			iconClassName: 'ri-exchange-dollar-line',
			nameSelected: 'cashbook',
		},
		{
			label: 'Báo cáo',
			path: '/report/end-of-day',
			iconClassName: 'ri-line-chart-line',
			nameSelected: 'report',
		},
		{
			label: 'Bán hàng',
			path: '/sale',
			iconClassName: 'ri-shopping-basket-2-line',
			nameSelected: '',
		},
	];

	const toggleMenu = () => {
		setVisibleMenu(!visibleMenu);
	};

	return (
		<>
		{console.log('render')}
			<div className="navmenu__content" onClick={toggleMenu}>
				<Icon
					className={
						!visibleMenu ? 'ri-menu-2-line' : 'ri-menu-3-line'
					}
				/>
				<span>{!visibleMenu ? 'Menu' : 'Tắt Menu'}</span>
			</div>
			<div
				className="dropdown-menu"
				style={
					!visibleMenu
						? { visibility: 'hidden' }
						: {
								visibility: 'visible',
								opacity: 1,
								left: '-17px',
						  }
				}
			>
				<ul>
					{listMenuItem.map((item, key) => (
						<MenuItem
							label={item.label}
							path={item.path}
							iconClassName={item.iconClassName}
							key={key}
							className={
								item.nameSelected === nameSelected
									? 'menu-item--selected'
									: ''
							}
						/>
					))}
				</ul>
			</div>
		</>
	);
};

export default MenuHome;
