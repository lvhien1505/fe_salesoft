import SearchManage from 'components/common/manage/Search';

const Search = () => {
    const listField = [
        {
            placeholder: 'Theo mã phiếu',
            name: 'info',
        },
        {
            placeholder: 'Theo ghi chú',
            name: 'note',
        },
    ];
    return (
        <SearchManage
            listField={listField}
            placeholderMain="Theo mã phiếu"
        />
    );
};

export default Search;
