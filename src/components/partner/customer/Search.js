import SearchManage from 'components/common/manage/Search';

const Search = () => {
	const listField = [
		{
			placeholder: 'Theo mã, tên, điện thoại',
			name: 'infoCustomer',
		},
		{
			placeholder: 'Theo email',
			name: 'infoCustomer',
		},
		{
			placeholder: 'Theo ghi chú',
			name: 'note',
		},
		{
			placeholder: 'Theo mã hóa đơn',
			name: 'infoProduct',
		},
	];
	return (
		<SearchManage listField={listField} placeholderMain="Theo mã, tên, điện thoại" />
	);
};

export default Search;
