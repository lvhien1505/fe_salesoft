import Layout from 'components/layout/Layout';
import Content from 'components/partner/supplier';
import MangeState from 'contexts/ManageState';
import { colsSupplier } from 'constants/columns';
import { keyOfColsSupplier } from 'constants/defaultKeyOfCols';

const Supplier = () => {
	return (
		<Layout namePage="supplier" nameSelected="partner">
			<MangeState inititalCols={colsSupplier} keyOfCols={keyOfColsSupplier}>
				<Content />
			</MangeState>
		</Layout>
	);
};

export default Supplier;