import SearchManage from 'components/common/manage/Search';

const Search = () => {
    const listField = [
        {
            placeholder: 'Theo mã hàng',
            name: 'infoCustomer',
        },
        {
            placeholder: 'Theo tên hàng',
            name: 'infoCustomer',
        },
    ];
    return (
        <SearchManage
            listField={listField}
            placeholderMain="Theo mã, tên hàng"
        />
    );
};

export default Search;
