import CardFilter from '../CardFilter';
import GroupRadio from '../GroupRadio';

const Record = () => {
    const data = [
        { label: '10', value: 10 },
        { label: '15', value: 15 },
        { label: '20', value: 20 },
        { label: '30', value: 30 },
        { label: '50', value: 50 },
    ];
    return (
        <CardFilter title="Số bản ghi">
            <GroupRadio data={data} defaultValue={10} direction="vertical"/>
        </CardFilter>
    );
};

export default Record;
