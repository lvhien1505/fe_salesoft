import { AutoComplete } from 'antd';
import Icon from 'components/ui/icon/Icon';

import cities from 'apis/vietnam-location-json/cities.json';
import districts from 'apis/vietnam-location-json/districts.json';
import wards from 'apis/vietnam-location-json/wards.json';
import './styles/autoComplete.scss';

const AutoCompleteAddress = ({ options, placeholder, onSelect, ...rest }) => {
    const style = {
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        width: '100%',
    };

    return (
        <div className="search-address">
            <div className="prefix">
                <Icon className="ri-search-line" />
            </div>
            <AutoComplete
                placeholder={placeholder}
                bordered={false}
                className="autocomplete--format autocomplete-address"
                onSelect={onSelect}
                options={options}
                style={style}
                {...rest}
            />
        </div>
    );
};

const AutoCompleteCity = ({ onSelect, defaultValue }) => {
    let options = cities.map((city) => ({
        value: city.name_with_type,
        code: city.code,
    }));

    return (
        <AutoCompleteAddress
            placeholder={'Chọn Tỉnh/Thành phố'}
            bordered={false}
            options={options}
            onSelect={onSelect}
            defaultValue={defaultValue}
        />
    );
};

const AutoCompleteDistrict = ({ parentCode, onSelect, defaultValue }) => {
    let filterDistricts = [];
    if (parentCode) {
        filterDistricts = districts.filter(
            (district) => district.parent_code === parentCode
        );
    }
    let options = filterDistricts.map((district) => ({
        value: district.name_with_type,
        code: district.code,
    }));

    return (
        <AutoCompleteAddress
            placeholder={'Chọn Quận/Huyện'}
            bordered={false}
            options={options}
            onSelect={onSelect}
            defaultValue={defaultValue}
        />
    );
};

const AutoCompleteSubDistrict = ({ parentCode, onSelect, defaultValue }) => {
    let filterSubDistricts = [];
    if (parentCode) {
        filterSubDistricts = wards.filter(
            (ward) => ward.parent_code === parentCode
        );
    }
    let options = filterSubDistricts.map((subDistrict) => ({
        value: subDistrict.name_with_type,
        code: subDistrict.code,
    }));

    return (
        <AutoCompleteAddress
            placeholder={'Chọn Phường/Xã'}
            bordered={false}
            options={options}
            onSelect={onSelect}
            defaultValue={defaultValue}
        />
    );
};

export { AutoCompleteCity, AutoCompleteDistrict, AutoCompleteSubDistrict };
