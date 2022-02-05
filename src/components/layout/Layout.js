import Header from './Header';
import NavMenu from './NavMenu';
import './styles/layout.scss';

const Layout = ({ namePage, nameSelected, children }) => {
	return (
		<div className="manage">
			<div className="manage__wrapper">
				<Header />
				<div className="manage__navmenu">
					<NavMenu namePage={namePage} nameSelected={nameSelected} />
				</div>
				<div className="manage__content">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
