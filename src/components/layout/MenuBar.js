import { useNavigate } from 'react-router-dom';

const MenuBar = ({nameSelected,namePage}) => {
	const navigate = useNavigate();
	const menu = [
		{
			name: 'overview',
			childs: [
				{
					name: 'overview',
					label: 'Tổng quan',
					path: '/',
				},
			],
		},
		{
			name: 'merchandise',
			childs: [
				{
					name: 'product',
					label: 'Danh mục',
					path: '/products',
				},
				{
					name: 'price',
					label: 'Thiết lập giá',
					path: '/prices',
				},
				{
					name: 'stockTake',
					label: 'Kiểm kho',
					path: '/stock-take',
				},
			],
		},
		{
			name: 'stockTakeScreen',
			childs: [
				{
					name: 'stockTakeScreen',
					label: 'Kiểm kho',
					path: '/stock-take/screen',
				},
			],
		},
		{
			name: 'transaction',
			childs: [
				{
					name: 'invoices',
					label: 'Hóa đơn',
					path: '/invoices',
				},
				{
					name: 'returns',
					label: 'Trả hàng',
					path: '/returns',
				},
				{
					name: 'purchase',
					label: 'Nhập hàng',
					path: '/purchase',
				},
				{
					name: 'purchaseReturn',
					label: 'Trả hàng nhập',
					path: '/returns-purchase',
				},
			],
		},
		{
			name: 'partner',
			childs: [
				{
					name: 'customer',
					label: 'Khách hàng',
					path: '/customers',
				},
				{
					name: 'supplier',
					label: 'Nhà cung cấp',
					path: '/suppliers',
				},
			],
		},
		{
			name: 'cashbook',
			childs: [
				{
					name: 'cashbook',
					label: 'Sổ quỹ',
					path: '/cashbook',
				},
			],
		},
		{
			name: 'report',
			childs: [
				{
					name: 'endOfDay',
					label: 'Cuối ngày',
					path: '/report/end-of-day',
				},
				{
					name: 'sale',
					label: 'Bán hàng',
					path: '/report/sale',
				},
				{
					name: 'merchandise',
					label: 'Hàng hóa',
					path: '/report/merchandise',
				},
				{
					name: 'customer',
					label: 'Khách hàng',
					path: '/report/customer',
				},
				{
					name: 'supplier',
					label: 'Nhà cung cấp',
					path: '/report/supplier',
				},
				{
					name: 'finace',
					label: 'Tài chính',
					path: '/report/finace',
				},
			],
		},
	];
	const selectedMenu = menu.filter((item) => nameSelected === item.name)[0];

	const redirectPage = (path) => {
		return navigate(path);
	};

	return (
		<div className="navmenu__content">
			<ul>
				{selectedMenu.childs.length > 0
					? selectedMenu.childs.map((child, key) => (
							<li
								key={key}
								onClick={() => redirectPage(child.path)}
								className={
									child.name === namePage
										? 'child-page--selected'
										: ''
								}
							>
								<span className="label">{child.label}</span>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
};

export default MenuBar;
