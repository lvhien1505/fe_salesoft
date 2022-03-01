import Layout from 'components/layout/Layout';
import Content from 'components/transaction/scene-returns-purchase';
import SceneReturnsPurchaseState from 'contexts/SceneReturnsPurchaseState';

const SceneReturnsPurchase = () => {
    return (
        <Layout namePage="returnsPurchase" nameSelected="transaction">
            <SceneReturnsPurchaseState>
                <Content />
            </SceneReturnsPurchaseState>
        </Layout>
    );
};

export default SceneReturnsPurchase;
