import Layout from 'components/layout/Layout';
import Content from 'components/cashbook';
import MangeState from 'contexts/ManageState';
import { colsCashBook } from 'constants/columns';
import { keyOfColsCashBook } from 'constants/defaultKeyOfCols';

const CashBook = () => {
	return (
		<Layout namePage="cashbook" nameSelected="cashbook">
			<MangeState inititalCols={colsCashBook} keyOfCols={keyOfColsCashBook}>
				<Content />
			</MangeState>
		</Layout>
	);
};

export default CashBook;