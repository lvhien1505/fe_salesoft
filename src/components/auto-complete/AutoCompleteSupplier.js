import { AutoComplete } from 'antd';
import BtnActiveModalSupplier from 'components/partner/modals/ModalSupplier';
import Icon from 'components/ui/icon/Icon';
import PropTypes from 'prop-types';
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

const Default = ({ placeholder, isSuffix }) => {
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
            <AutoCompleteSupplier style={style} placeholder={placeholder} />
            {isSuffix ? (
                <div className="modal-supplier">
                    <BtnActiveModalSupplier
                        iconClassName="ri-add-line"
                        type="default"
                        text=""
                        withContext={false}
                    />
                </div>
            ) : null}
        </div>
    );
};

Default.defaultProps = {
    isSuffix: true,
};

Default.propTypes = {
    isSuffix: PropTypes.bool,
};

export {AutoCompleteSupplier};

export default Default;
