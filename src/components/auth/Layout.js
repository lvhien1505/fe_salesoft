import Logo from 'components/ui/logo/Logo';
import './styles/auth.scss';

const Layout = ({ title, children, className }) => {
    return (
        <div className="auth">
            <div
                className={
                    className ? 'auth__form' + ' ' + className : 'auth__form'
                }
            >
                <div className="auth__title">
                    <span>{title}</span>
                </div>
                <div className="auth__logo">
                    <Logo />
                </div>
                <div className={'auth__content'}>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
