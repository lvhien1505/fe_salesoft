import { GET_SUPPLIERS, SELECT_SUPPLIER } from 'contexts/action-types/supplier';

export const getSuppliers = (suppliers)=>{
	return {
		type:GET_SUPPLIERS,
		payload:{
			suppliers:suppliers
		}
	}
}

export const selectSupplier = (supplier)=>{
	return {
		type:SELECT_SUPPLIER,
		payload:{
			supplier:supplier
		}
	}
}

