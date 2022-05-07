import { GET_INVOICES, SELECT_INVOICE } from 'contexts/action-types/invoice';

export const getInvoices = (invoices)=>{
	return {
		type:GET_INVOICES,
		payload:{
			invoices:invoices
		}
	}
}

export const selectInvoices = (invoice)=>{
	return {
		type:SELECT_INVOICE,
		payload:{
			invoice:invoice
		}
	}
}
