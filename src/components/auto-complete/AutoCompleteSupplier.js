import { useState } from 'react';
import { AutoComplete, Space } from 'antd';
import BtnActiveModalSupplier from 'components/partner/modals/ModalSupplier';
import Icon from 'components/ui/icon/Icon';
import PropTypes from 'prop-types';
import supplierApi from 'apis/supplierApi';
import openNotification from 'helpers/notification';
import './styles/autoComplete.scss';

const AutoCompleteSupplier = ({
    placeholder,
    options,
    onSearch,
    onSelect,
    supplierSelected,
    onClear,
    ...rest
}) => {
    return (
        <div className="wrapper-autocomplete">
            <AutoComplete
                placeholder={placeholder || 'Nhà cung cấp'}
                bordered={false}
                className="autocomplete--format autocomplete-supplier"
                onSearch={onSearch}
                onSelect={onSelect}
                options={options}
                {...rest}
            />
            {supplierSelected.value ? (
                <div className="content-value">
                    <Space align="center">
                        <span>{supplierSelected.value}</span>
                        <span onClick={onClear} className="icon-clear">
                            <Icon className="ri-close-line" />
                        </span>
                    </Space>
                </div>
            ) : null}
        </div>
    );
};

const Default = ({ placeholder, isSuffix, getOption }) => {
    let timer = null;
    const [options, setOptions] = useState([]);
    const [supplierSelected, setSupplierSelected] = useState({});

    const style = {
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        width: '100%',
    };

    const onFinishAdd = async (values) => {
        try {
            let fetch = await supplierApi.create(values);

            if (fetch.status) {
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const searchSupplier = async (name) => {
        try {
            let fetch = await supplierApi.searchName(name);

            if (fetch.status) {
                let data = fetch.data.map((item) => {
                    let value = item.name;
                    if (item.phone[0]) {
                        return {
                            value: value + ' - ' + item.phone[0],
                            _id: item._id,
                        };
                    } else {
                        if (item.phone[1]) {
                            return {
                                value: value + ' - ' + item.phone[1],
                                _id: item._id,
                            };
                        }
                    }
                    return {
                        value: value,
                        _id: item._id,
                    };
                });
                setOptions([...data]);
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onSearch = (value) => {
        if (supplierSelected.value) {
            setSupplierSelected({});
        }
        clearTimeout(timer);

        timer = setTimeout(() => {
            searchSupplier(value);
        }, 1000);
    };

    const onSelect = (value, option) => {
        setSupplierSelected(option);
        getOption(option);
    };

    const onClear = () => {
        setSupplierSelected({});
        getOption({
            value: '',
            _id: '',
        });
    };

    return (
        <div className="search-supplier">
            <div className="prefix">
                <Icon className="ri-search-line" />
            </div>
            <AutoCompleteSupplier
                style={style}
                placeholder={placeholder}
                onSearch={onSearch}
                onSelect={onSelect}
                options={options}
                supplierSelected={supplierSelected}
                onClear={onClear}
            />
            {isSuffix ? (
                <div className="modal-supplier">
                    <BtnActiveModalSupplier
                        iconClassName="ri-add-line"
                        type="default"
                        text=""
                        withContext={false}
                        onFinishAdd={onFinishAdd}
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

export { AutoCompleteSupplier };

export default Default;
