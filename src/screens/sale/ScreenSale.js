import { useMemo } from 'react';
import ScreenProduct from 'components/sale/screen-product';
import Tabs from 'components/sale/tabs';
import SaleState from 'contexts/SaleState';

import LayoutSale from 'components/layout/LayoutSale';

const Sale = () => {
	return (
		<LayoutSale>
			<div style={{ position: 'relative', height: '100%' }}>
				<SaleState>
					<Tabs />
					<div
						style={{ position: 'absolute', top: 0, right: '2rem' }}
					>
						<ScreenProduct />
					</div>
				</SaleState>
			</div>
		</LayoutSale>
	);
};

export default Sale;
