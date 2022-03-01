import { useState, forwardRef } from 'react';
import moment from 'moment';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi';
import PropTypes from 'prop-types';

import './styles/datePicker.scss';

const DatePicker = forwardRef(
    (
        {
            defaultDate,
            isCustom,
            withPortal,
            showTime,
            dateFormat,
            placeholder,
            size
        },
        ref
    ) => {
        registerLocale('vi', vi);
        if (defaultDate === null) {
            defaultDate = ""
        } else if (defaultDate) {
            let format = showTime ? 'DD-MM-YYYY hh:mm' : 'DD-MM-YYYY';
            defaultDate = moment(defaultDate, format, true).toDate();
        } else {
            defaultDate = new Date();
        }

        const [startDate, setStartDate] = useState(defaultDate);

        const onChangeDatePicker = (date) => {
            setStartDate(date);
        };
        return (
            <ReactDatePicker
                placeholderText={placeholder}
                selected={startDate}
                onChange={onChangeDatePicker}
                showYearDropdown
                dropdownMode="select"
                showTimeSelect={showTime}
                timeFormat="p"
                timeIntervals={15}
                timeCaption="Giờ"
                dateFormat={dateFormat}
                locale="vi"
                className={
                    'ant-input ant-input-borderless input--format' +
                    ' ' +
                    (isCustom ? 'datepicker--custom' : '') + (size === 'large' ? ' ant-input-lg' : ' ant-input-sm')
                }
                withPortal={withPortal}
                ref={ref}
            />
        );
    }
);

DatePicker.defaultProps = {
    isCustom: true,
    withPortal: true,
    showTime: false,
    dateFormat: 'Pp',
    placeholder: '',
    size:'small'
};

DatePicker.propTypes = {
    isCustom: PropTypes.bool,
    withPortal: PropTypes.bool,
    dateFormat: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.string,
};

export default DatePicker;
