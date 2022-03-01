import Layout from 'components/layout/Layout';
import Content from 'components/transaction/scene-purchase';
import ScenePurchaseState from 'contexts/ScenePurchaseState';

const ScenePurchase = () => {
    return (
        <Layout namePage="purchase" nameSelected="transaction">
            <ScenePurchaseState>
                <Content />
            </ScenePurchaseState>
        </Layout>
    );
};

export default ScenePurchase;
