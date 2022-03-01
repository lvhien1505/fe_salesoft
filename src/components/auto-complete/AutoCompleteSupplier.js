import { AutoComplete } from 'antd';
import BtnActiveModalSupplier from 'components/partner/modals/ModalSupplier';
import Icon from 'components/ui/icon/Icon';
import './styles/autoComplete.scss';

const AutoCompleteSupplier = ({ placeholder, ...rest }) => {
    const onSearch = () => {};
    return (
        <AutoComplete
            placeholder={placeholder || 'Nhà cung cấp'}
            bordered={false}
            className="autocomplete--format autocomplete-supplier"
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
        <div className="search-supplier">
            <div className="prefix">
                <Icon className="ri-search-line" />
            </div>
            <AutoCompleteSupplier style={style} />
            <div className="modal-supplier">
                <BtnActiveModalSupplier
                    iconClassName="ri-add-line"
                    type="default"
                    text=""
                />
            </div>
        </div>
    );
};

export { AutoCompleteSupplier };

export default Default;
