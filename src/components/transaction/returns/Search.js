import SearchManage from 'components/common/manage/Search';

const Search = () => {
	const listField = [
		{
			placeholder: 'Theo mã phiếu trả',
			name: 'infoCustomer',
		},
		{
			placeholder: 'Theo mã hóa đơn',
			name: 'codeInvoices',
		},
		{
			placeholder: 'Theo mã hàng, tên hàng',
			name: 'infoProduct',
		},
		{
			placeholder: 'Theo mã, tên, số điện thoại khách hàng',
			name: 'infoProduct',
		},
		{
			placeholder: 'Theo ghi chú',
			name: 'note',
		},
	];
	return (
		<SearchManage listField={listField} placeholderMain="Theo mã phiếu trả" />
	);
};

export default Search;
