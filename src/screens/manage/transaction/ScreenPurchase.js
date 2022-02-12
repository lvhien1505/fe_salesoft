import Layout from 'components/layout/Layout';
import Content from 'components/transaction/purchase';
import MangeState from 'contexts/ManageState';
import { colsPurchase } from 'constants/columns';
import { keyOfColsPurchase } from 'constants/defaultKeyOfCols';

const Purchase = () => {
	return (
		<Layout namePage="purchase" nameSelected="transaction">
			<MangeState inititalCols={colsPurchase} keyOfCols={keyOfColsPurchase}>
				<Content />
			</MangeState>
		</Layout>
	);
};

export default Purchase;