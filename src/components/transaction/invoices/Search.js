import SearchManage from 'components/common/manage/Search';

const Search = () => {
	const listField = [
		{
			placeholder: 'Theo mã hóa đơn',
			name: 'codeInvoices',
		},
		{
			placeholder: 'Theo mã, tên hàng',
			name: 'infoProduct',
		},
		{
			placeholder: 'Theo mã, tên, số điện thoại khách hàng',
			name: 'infoCustomer',
		},
		{
			placeholder: 'Theo ghi chú',
			name: 'note',
		},
	];
	return (
		<SearchManage listField={listField} placeholderMain="Theo mã hóa đơn" />
	);
};

export default Search;
