import Header from './Header';
import './styles/layout.scss';

const LayoutSale = ({ type, children }) => {
    return (
        <div className="sale">
            <div className="sale__wrapper">
                <Header type={type ? type : 'sale'} />
                <div className="sale__content">{children}</div>
            </div>
        </div>
    );
};

export default LayoutSale;
