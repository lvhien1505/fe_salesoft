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
        },
        ref
    ) => {
        registerLocale('vi', vi);
        if (defaultDate) {
            defaultDate = moment(
                defaultDate,
                'DD-MM-YYYY hh:mm',
                true
            ).toDate();
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
                    (isCustom ? 'datepicker--custom' : '')
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
    placeholder:''
};

DatePicker.propTypes = {
    isCustom: PropTypes.bool,
    withPortal: PropTypes.bool,
    dateFormat: PropTypes.string,
    placeholder: PropTypes.string,
};

export default DatePicker;
