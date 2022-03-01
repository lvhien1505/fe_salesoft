import { GET_CUSTOMERS, SELECT_CUSTOMER } from 'contexts/action-types/customer';

export const getCustomers = (customers)=>{
	return {
		type:GET_CUSTOMERS,
		payload:{
			customers:customers
		}
	}
}

export const selectCustomer = (customer)=>{
	return {
		type:SELECT_CUSTOMER,
		payload:{
			customer:customer
		}
	}
}
