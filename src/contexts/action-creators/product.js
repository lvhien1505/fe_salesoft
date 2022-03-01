import {
	GET_PRODUCTS,
	GET_CATEGORIES,
	SELECT_PRODUCT,
	SELECT_CATEGORY,
	GET_BRANDS,
	SELECT_BRAND
} from 'contexts/action-types/product';

export const getProducts = (products)=>{
	return {
		type:GET_PRODUCTS,
		payload:{
			products:products
		}
	}
}

export const selectProduct = (product)=>{
	return {
		type:SELECT_PRODUCT,
		payload:{
			product:product
		}
	}
}

export const getCategories = (categories)=>{
	return {
		type:GET_CATEGORIES,
		payload:{
			categories:categories
		}
	}
}

export const selectCategory = (category)=>{
	return {
		type:SELECT_CATEGORY,
		payload:{
			category:category
		}
	}
}

export const getBrands = (brands)=>{
	return {
		type:GET_BRANDS,
		payload:{
			brands:brands
		}
	}
}

export const selectBrand = (brand)=>{
	return {
		type:SELECT_BRAND,
		payload:{
			brand:brand
		}
	}
}


