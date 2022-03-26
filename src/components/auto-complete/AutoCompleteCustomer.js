import { useState } from 'react';
import { AutoComplete, Space } from 'antd';
import BtnActiveModalCustomer from 'components/partner/modals/ModalCustomer';
import Icon from 'components/ui/icon/Icon';
import PropTypes from 'prop-types';
import './styles/autoComplete.scss';
import customerApi from 'apis/customerApi';
import openNotification from 'helpers/notification';

const AutoCompleteCustomer = ({
    placeholder,
    options,
    onSearch,
    onSelect,
    customerSelected,
    onClear,
    ...rest
}) => {
    return (
        <div className="wrapper-autocomplete">
            <AutoComplete
                placeholder={placeholder || 'Khách hàng'}
                bordered={false}
                className="autocomplete--format autocomplete-customer"
                onSearch={onSearch}
                onSelect={onSelect}
                options={options}
                {...rest}
            />

            {customerSelected.value ? (
                <div className="content-value">
                    <Space align="center">
                        <span>{customerSelected.value}</span>
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
    const [customerSelected, setCustomerSelected] = useState({});

    const style = {
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        width: '100%',
    };

    const onFinishAdd = async (values) => {
        try {
            let fetch = await customerApi.create(values);

            if (fetch.status) {
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const searchCustomer = async (name) => {
        try {
            let fetch = await customerApi.searchName(name);

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
        if (customerSelected.value) {
            setCustomerSelected({});
        }
        clearTimeout(timer);

        timer = setTimeout(() => {
            searchCustomer(value);
        }, 1000);
    };

    const onSelect = (value, option) => {
        setCustomerSelected(option);
        getOption(option);
    };

    const onClear = () => {
        setCustomerSelected({});
        getOption({
            value: '',
            _id: '',
        });
    };

    return (
        <div className="search-customer">
            <div className="prefix">
                <Icon className="ri-search-line" />
            </div>
            <AutoCompleteCustomer
                style={style}
                placeholder={placeholder}
                onSearch={onSearch}
                onSelect={onSelect}
                options={options}
                customerSelected={customerSelected}
                onClear={onClear}
            />
            {isSuffix ? (
                <div className="modal-customer">
                    <BtnActiveModalCustomer
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

export { AutoCompleteCustomer };

export default Default;
