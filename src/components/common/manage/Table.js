import { useContext } from 'react';
import { Table } from 'antd';
import ManageContext from 'contexts/createContext/ManageContext';

const TableManage = () => {
	const { columns,keyOfCols } = useContext(ManageContext);
	let cols = [];
	keyOfCols.forEach((key)=>{
		for (let i = 0; i < columns.length; i++) {
			if(columns[i].key === key){
				cols.push(columns[i])
			}
		}
	})

	return <Table columns={cols}/>;
};

export default TableManage;