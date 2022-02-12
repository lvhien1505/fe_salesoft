import ScreenSelectProduct from 'components/common/ScreenSelectProduct';
import ListProduct from './ListProduct';
import data from 'apis/fakedata/products.json';

const ScreenProduct = () => {
    const buttonProps = {
        style: {
            height: '34px',
            borderRadius: '0.36rem',
            width:'34px'
        },
        type:'secondary'
    };
    return (
        <ScreenSelectProduct buttonProps={buttonProps}>
            <ListProduct dataSource={data.productsStockTakes} />
        </ScreenSelectProduct>
    );
};

export default ScreenProduct;
