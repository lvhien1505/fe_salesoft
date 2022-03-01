import { AutoComplete } from 'antd';
import BtnActiveModalCustomer from 'components/partner/modals/ModalCustomer';
import Icon from 'components/ui/icon/Icon';
import './styles/autoComplete.scss';

const AutoCompleteCustomer = ({ placeholder, ...rest }) => {
    const onSearch = () => {};
    return (
        <AutoComplete
            placeholder={placeholder || 'Khách hàng'}
            bordered={false}
            className="autocomplete--format autocomplete-customer"
            onSearch={onSearch}
            {...rest}
        />
    );
};

const Default = () => {
    const style = {
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        width: '100%',
    };

    return (
        <div className="search-customer">
            <div className="prefix">
                <Icon className="ri-search-line" />
            </div>
            <AutoCompleteCustomer style={style} />
            <div className="modal-customer">
                <BtnActiveModalCustomer
                    iconClassName="ri-add-line"
                    type="default"
                    text=""
                    withContext={false}
                />
            </div>
        </div>
    );
};

export { AutoCompleteCustomer };

export default Default;
