import { AutoComplete } from 'antd';
import ModalCustomer from 'components/modals/Customer';
import Icon from 'components/ui/icon/Icon';
import './search.scss';

const SearchCustomer = ({ ...rest }) => {
	return (
		<div className="search-customer">
			<div className="prefix">
				<Icon className="ri-search-line" />
			</div>
			<AutoComplete
				{...rest}
				placeholder="Khách hàng"
				bordered={false}
				className="autocomplete--format autocomplete-customer"
			/>
			<div className="modal-customer">
				<ModalCustomer
					iconProps={{
						className: 'ri-add-line',
					}}
					buttonProps={{
						type: 'default',
						text: '',
						style: { width: '1rem' },
					}}
				/>
			</div>
		</div>
	);
};

export default SearchCustomer;
