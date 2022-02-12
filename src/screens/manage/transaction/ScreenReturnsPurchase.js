import Layout from 'components/layout/Layout';
import Content from 'components/transaction/returns-purchase';
import MangeState from 'contexts/ManageState';
import { colsReturnsPurchase } from 'constants/columns';
import { keyOfColsReturnsPurchase } from 'constants/defaultKeyOfCols';

const ReturnsPurchase = () => {
	return (
		<Layout namePage="returnsPurchase" nameSelected="transaction">
			<MangeState inititalCols={colsReturnsPurchase} keyOfCols={keyOfColsReturnsPurchase}>
				<Content />
			</MangeState>
		</Layout>
	);
};

export default ReturnsPurchase;