import Layout from 'components/layout/Layout';
import Content from 'components/transaction/returns';
import MangeState from 'contexts/ManageState';
import { colsReturns } from 'constants/columns';
import { keyOfColsReturns } from 'constants/defaultKeyOfCols';

const Returns = () => {
	return (
		<Layout namePage="returns" nameSelected="transaction">
			<MangeState inititalCols={colsReturns} keyOfCols={keyOfColsReturns}>
				<Content />
			</MangeState>
		</Layout>
	);
};

export default Returns;