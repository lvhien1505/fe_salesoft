import SearchManage from 'components/common/manage/Search';

const Search = () => {
	const listField = [
		{
			placeholder: 'Theo mã, tên, điện thoại',
			name: 'infoProduct',
		},
		{
			placeholder: 'Theo email',
			name: 'infoProduct',
		},
		
		{
			placeholder: 'Theo mã số thuế',
			name: 'note',
		},
	];
	return (
		<SearchManage listField={listField} placeholderMain="Theo mã, tên, điện thoại" />
	);
};

export default Search;
