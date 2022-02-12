import BtnActiveModalInvoices from 'components/scene-returns/modals/ModalInvoices';
import Tabs from 'components/scene-returns/tabs';
import SceneReturnsState from 'contexts/SceneReturnsState';

import LayoutSale from 'components/layout/LayoutSale';

const Sale = () => {
	return (
		<LayoutSale type="returns">
			<div style={{ position: 'relative', height: '100%' }}>
				<SceneReturnsState>
					<Tabs />
					<div
						style={{ position: 'absolute', top: 0, right: '2rem' }}
					>
						<BtnActiveModalInvoices />
					</div>
				</SceneReturnsState>
			</div>
		</LayoutSale>
	);
};

export default Sale;
