import SearchManage from 'components/common/manage/Search';

const Search = () => {
    const listField = [
        {
            placeholder: 'Theo mã, tên hàng',
            name: 'info',
        },
        {
            placeholder: 'Theo ghi chú, mô tả đặt hàng',
            name: 'note',
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
