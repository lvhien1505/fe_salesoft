import Layout from 'components/layout/Layout';
import Content from 'components/merchandise/product';
import MangeState from 'contexts/ManageState';
import { colsProduct } from 'constants/columns';
import { keyOfColsProduct } from 'constants/defaultKeyOfCols';

const Product = () => {
	return (
		<Layout namePage="product" nameSelected="merchandise">
			<MangeState inititalCols={colsProduct} keyOfCols={keyOfColsProduct}>
				<Content />
			</MangeState>
		</Layout>
	);
};

export default Product;
