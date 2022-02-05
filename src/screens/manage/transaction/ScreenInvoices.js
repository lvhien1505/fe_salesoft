import Layout from 'components/layout/Layout';
import Content from 'components/transaction/invoices';
import MangeState from 'contexts/ManageState';
import { colsProduct } from 'constants/columns';
import { keyOfColsProduct } from 'constants/defaultKeyOfCols';

const Invoices = () => {
	return (
		<Layout namePage="invoices" nameSelected="transaction">
			<MangeState inititalCols={colsProduct} keyOfCols={keyOfColsProduct}>
				<Content />
			</MangeState>
		</Layout>
	);
};

export default Invoices;