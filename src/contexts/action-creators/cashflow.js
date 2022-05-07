import { GET_CASHFLOWS, SELECT_CASHFLOW } from 'contexts/action-types/cashflow';

export const getCashflows = (cashflows)=>{
	return {
		type:GET_CASHFLOWS,
		payload:{
			cashflows:cashflows
		}
	}
}

export const selectCashFlow = (cashflow)=>{
	return {
		type:SELECT_CASHFLOW,
		payload:{
			cashflow:cashflow
		}
	}
}
