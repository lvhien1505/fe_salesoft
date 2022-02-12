import Layout from 'components/layout/Layout';
import Content from 'components/merchandise/scene-stock-takes';
import StockTakesState from 'contexts/StockTakesState';

const SceneStockTakes = () => {
    return (
        <Layout namePage="stockTakes" nameSelected="merchandise">
            <StockTakesState>
                <Content />
            </StockTakesState>
        </Layout>
    );
};

export default SceneStockTakes;
