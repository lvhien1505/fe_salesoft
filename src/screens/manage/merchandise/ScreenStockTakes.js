import Layout from 'components/layout/Layout';
import Content from 'components/merchandise/stock-takes';
import MangeState from 'contexts/ManageState';
import { colsStockTakes } from 'constants/columns';
import { keyOfColsStockTakes } from 'constants/defaultKeyOfCols';

const StockTakes = () => {
	return (
		<Layout namePage="stockTakes" nameSelected="merchandise">
			<MangeState inititalCols={colsStockTakes} keyOfCols={keyOfColsStockTakes}>
				<Content />
			</MangeState>
		</Layout>
	);
};

export default StockTakes;