import SearchManage from 'components/common/manage/Search';

const Search = () => {
    const listField = [
        {
            placeholder: 'Theo mã phiếu kiểm',
            name: 'infoCustomer',
        },
        {
            placeholder: 'Theo mã, tên hàng',
            name: 'infoCustomer',
        },
    ];
    return (
        <SearchManage
            listField={listField}
            placeholderMain="Theo mã phiếu kiểm"
        />
    );
};

export default Search;
