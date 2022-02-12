import Layout from 'components/layout/Layout';
import Content from 'components/transaction/invoices';
import MangeState from 'contexts/ManageState';
import { colsInvoices } from 'constants/columns';
import { keyOfColsInvoices } from 'constants/defaultKeyOfCols';

const Invoices = () => {
	return (
		<Layout namePage="invoices" nameSelected="transaction">
			<MangeState inititalCols={colsInvoices} keyOfCols={keyOfColsInvoices}>
				<Content />
			</MangeState>
		</Layout>
	);
};

export default Invoices;