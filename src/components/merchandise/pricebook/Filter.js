import { useState, useContext } from 'react';
import { Row, Col } from 'antd';
import CardFilter from 'components/common/CardFilter';
import { InputString } from 'components/ui/input/Input';
import Icon from 'components/ui/icon/Icon';
import Record from 'components/common/manage/Record';
import PriceBookContext from 'contexts/createContext/PriceBookContext';
import ModalTablePrice from '../modals/ModalTablePrice';

import '../styles/filter.scss';

const FilterTablePrice = ({ data }) => {
    const { tablePrices, selectTablePrice } = useContext(PriceBookContext);
    const [typeModal, setTypeModal] = useState('add');
    const [visible, setVisible] = useState(false);

    const onActiveModal = (type) => {
        setTypeModal(type);
        setVisible(true);
    };

    const onChooseTablePrice = (tp) => {
        selectTablePrice(tp);
    };
    return (
        <CardFilter
            title="Bảng giá"
            suffix={
                <Icon
                    className="ri-add-circle-line"
                    onClick={() => onActiveModal('add')}
                />
            }
        >
            <div className="filter-category-product">
                <InputString
                    placeholder="Tìm kiếm bảng giá"
                    size="small"
                    prefix={<Icon className="ri-search-line" />}
                />
                <div className="list-category">
                    {tablePrices.length > 0
                        ? tablePrices.map((item, index) => (
                              <div
                                  className="item-category"
                                  onClick={() => onChooseTablePrice(item)}
                                  tabIndex={index}
                                  key={index}
                              >
                                  <span className="title">{item.name}</span>
                                  <span
                                      className="icon"
                                      onClick={() => onActiveModal('update')}
                                  >
                                      <Icon className="ri-pencil-line" />
                                  </span>
                              </div>
                          ))
                        : null}
                </div>
            </div>
            {visible ? (
                <ModalTablePrice
                    type={typeModal}
                    visible={visible}
                    onCancel={() => setVisible(false)}
                />
            ) : null}
        </CardFilter>
    );
};

const FilterCategoryProduct = () => {
    const { categories } = useContext(PriceBookContext);
    const [defaultCategory, setDefaultCategory] = useState('all');

    const onChooseCategory = (type, category) => {
        setDefaultCategory(type);
    };

    return (
        <CardFilter title="Nhóm hàng">
            <div className="filter-category-product">
                <InputString
                    placeholder="Tìm kiếm nhóm hàng"
                    size="small"
                    prefix={<Icon className="ri-search-line" />}
                />
                <div className="list-category">
                    <div
                        className={
                            defaultCategory === 'all'
                                ? 'item-category item-category-default'
                                : 'item-category'
                        }
                        onClick={() => onChooseCategory('all')}
                        tabIndex={0}
                    >
                        <span className="title">Tất cả</span>
                    </div>
                    {categories.length > 0
                        ? categories.map((item, index) => (
                              <div
                                  className="item-category"
                                  onClick={() => onChooseCategory('child')}
                                  tabIndex={index + 1}
                                  key={index + 1}
                              >
                                  <span className="title">{item.name}</span>
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </CardFilter>
    );
};

const Filter = () => {
    return (
        <Row gutter={[0, 16]}>
            <Col span={24}>
                <FilterTablePrice />
            </Col>
            <Col span={24}>
                <FilterCategoryProduct />
            </Col>
            <Col span={24}>
                <Record />
            </Col>
        </Row>
    );
};

export default Filter;
