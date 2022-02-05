import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Image } from 'antd';
import Logo from 'components/ui/logo/Logo';
import Icon from 'components/ui/icon/Icon';
import ImgUser from 'assets/images/user.png';

const Header = ({ type }) => {
    const navigate = useNavigate();

    const redirectPage = (path) => {
        navigate(path);
    };
    return (
        <div className={type === 'manage' ? 'manage__header' : 'sale__header'}>
            <Logo />
            <div
                className={
                    type === 'manage' ? 'manage__sidelogo' : 'sale__sidelogo'
                }
            >
                <ul>
                    {type === 'manage' ? (
                        <li onClick={() => redirectPage('/sale')}>
                            <Icon className="ri-shopping-basket-2-line" />
                        </li>
                    ) : (
                        <li onClick={() => redirectPage('/')}>
                            <Icon className="ri-store-line" />
                        </li>
                    )}
                    <li>
                        <Icon className="ri-notification-2-line" />
                    </li>
                    <li className="user-information">
                        <Image
                            src={ImgUser}
                            preview={false}
                            width={38}
                            height={38}
                        />

                        <Icon className="ri-arrow-down-s-line" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

Header.defaultProps = {
    type: 'manage',
};

Header.propsType = {
    type: PropTypes.string,
};

export default Header;
