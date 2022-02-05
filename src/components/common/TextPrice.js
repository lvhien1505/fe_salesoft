import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

const TextPrice = ({ value }) => {
    return (
        <CurrencyFormat
            value={value}
            displayType={'text'}
            thousandSeparator={true}
        />
    );
};

TextPrice.defaultProps = {
    value: 0,
};

TextPrice.propTypes = {
    value: PropTypes.number,
};

export default TextPrice;
