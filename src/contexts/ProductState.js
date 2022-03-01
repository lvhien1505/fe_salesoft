import { useReducer, useEffect } from 'react';
import ProductContext from 'contexts/createContext/ProductContext';
import productReducer from 'contexts/reducers/product';
import {
    getProducts,
    selectProduct,
    getCategories,
    selectCategory,
    getBrands,
    selectBrand,
} from 'contexts/action-creators/product';

import productApi from 'apis/productApi';
import categoryApi from 'apis/categoryApi';
import brandApi from 'apis/brandApi';
import openNotification from 'helpers/notification';

const ProductState = ({ children }) => {
    const initialState = {
        products: [],
        categories: [],
        brands: [],
        productSelected: {},
        categorySelected: {},
        brandSelected: {},
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    //Category product
    const getCategoriesProduct = async () => {
        try {
            let fetch = await categoryApi.getAll();

            if (fetch.status) {
                dispatch(getCategories(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const createCategory = async (category) => {
        try {
            let fetch = await categoryApi.create(category);

            if (fetch.status) {
                getCategoriesProduct();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const updateCategory = async (id, category) => {
        try {
            let fetch = await categoryApi.update(id, category);

            if (fetch.status) {
                onSelectCategory({
                    label: category.name,
                    value: id,
                });
                getCategoriesProduct();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const removeCategory = async (id) => {
        try {
            let fetch = await categoryApi.remove(id);

            if (fetch.status) {
                onSelectCategory({
                    label: '',
                    value: '',
                });
                getCategoriesProduct();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onSelectCategory = (category) => {
        dispatch(selectCategory(category));
    };

    //Brand product
    const getBrandProduct = async () => {
        try {
            let fetch = await brandApi.getAll();

            if (fetch.status) {
                dispatch(getBrands(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const createBrand = async (category) => {
        try {
            let fetch = await brandApi.create(category);

            if (fetch.status) {
                getBrandProduct();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const updateBrand = async (id, brand) => {
        try {
            let fetch = await brandApi.update(id, brand);

            if (fetch.status) {
                onSelectBrand({
                    label: brand.name,
                    value: id,
                });
                getBrandProduct();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const removeBrand = async (id) => {
        try {
            let fetch = await brandApi.remove(id);

            if (fetch.status) {
                onSelectBrand({
                    label: '',
                    value: '',
                });
                getBrandProduct();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onSelectBrand = (brand) => {
        dispatch(selectBrand(brand));
    };

    //Product
    const getProductsWithLimit = async () => {
        try {
            let fetch = await productApi.getProductsWithLimit(1, 10);

            if (fetch.status) {
                dispatch(getProducts(fetch.data));
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const createProduct = async (product) => {
        try {
            let fetch = await productApi.create(product);

            if (fetch.status) {
                getProductsWithLimit();
                openNotification('success', fetch.message);
            }
        } catch (error) {
            openNotification('error', 'Lỗi máy chủ');
        }
    };

    const onSelectProduct = (product) => {
        dispatch(selectProduct(product));
    };

    useEffect(() => {
        getCategoriesProduct();
        getProductsWithLimit();
        getBrandProduct();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                categories: state.categories,
                brands: state.brands,
                productSelected:state.productSelected,
                categorySelected: state.categorySelected,
                brandSelected: state.brandSelected,
                createProduct: createProduct,
                selectProduct:onSelectProduct,
                createCategory: createCategory,
                updateCategory: updateCategory,
                removeCategory: removeCategory,
                selectCategory: onSelectCategory,
                createBrand: createBrand,
                updateBrand: updateBrand,
                removeBrand: removeBrand,
                selectBrand: onSelectBrand,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductState;
