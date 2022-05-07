import { useContext } from 'react';
import ScreenSelectProduct from 'components/common/ScreenSelectProduct';
import ListProduct from './ListProduct';
import ScenePurchaseContext from 'contexts/createContext/ScenePurchaseContext';

const ScreenProduct = () => {
    const { products } = useContext(ScenePurchaseContext);

    const buttonProps = {
        style: {
            height: '34px',
            borderRadius: '0.36rem',
            width: '34px',
        },
        type: 'secondary',
    };
    return (
        <ScreenSelectProduct buttonProps={buttonProps}>
            <ListProduct dataSource={products} />
        </ScreenSelectProduct>
    );
};

export default ScreenProduct;
