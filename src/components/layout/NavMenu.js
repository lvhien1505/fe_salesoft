import Icon from 'components/ui/icon/Icon';
import MenuHome from 'components/layout/menu-dropdown/MenuHome';
import MenuBar from './MenuBar';

const NavMenu = ({ nameSelected, namePage }) => {
	return (
		<>
			<div className="navmenu__left">
				<MenuHome nameSelected={nameSelected}/>
			</div>
			<div className="navmenu__center">
				<MenuBar nameSelected={nameSelected} namePage={namePage}/>
			</div>
			<div className="navmenu__right">
				<div className="navmenu__content">
					<span>Bộ lọc</span>
					<Icon className="ri-menu-2-line" />
				</div>
			</div>
		</>
	);
};

export default NavMenu;
