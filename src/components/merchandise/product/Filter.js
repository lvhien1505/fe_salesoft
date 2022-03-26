import { useState, useContext } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import GroupCheckbox from 'components/common/GroupCheckbox';
import CardFilter from 'components/common/CardFilter';
import Record from 'components/common/manage/Record';
import { ModalCategory } from '../modals/ModalCategory';
import { InputString } from 'components/ui/input/Input';
import Icon from 'components/ui/icon/Icon';
import ProductContext from 'contexts/createContext/ProductContext';

import '../styles/filter.scss';

const FilterCategoryProduct = ({ data }) => {
    const [typeModal, setTypeModal] = useState('add');
    const [visible, setVisible] = useState(false);
    const [defaultCategory, setDefaultCategory] = useState('all');

    const onActiveModal = (type) => {
        setTypeModal(type);
        setVisible(true);
    };

    const onChooseCategory = (type, category) => {
        setDefaultCategory(type);
    };

    return (
        <CardFilter
            title="Nhóm hàng"
            suffix={
                <Icon
                    className="ri-add-circle-line"
                    onClick={() => onActiveModal('add')}
                />
            }
        >
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
                    {data.length > 0
                        ? data.map((item, index) => (
                              <div
                                  className="item-category"
                                  onClick={() => onChooseCategory('child')}
                                  tabIndex={index + 1}
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
            <ModalCategory
                type={typeModal}
                visible={visible}
                onCancel={() => setVisible(false)}
            />
        </CardFilter>
    );
};

const Filter = () => {
    const { categories } = useContext(ProductContext);
    const dataTypeProduct = [
        { label: 'Hàng hóa', value: 'product' },
        { label: 'Combo - Đóng gói', value: 'combo' },
    ];

    const dataInventory = [
        { label: 'Tất cả', value: 'all' },
        { label: 'Dưới định mức tồn', value: 'combo' },
        { label: 'Vượt định mức tồn', value: 'all' },
        { label: 'Còn hàng  trong kho', value: 'combo' },
        { label: 'Hết hàng trong kho', value: 'combo' },
    ];

    const dataShow = [
        { label: 'Hàng đang kinh doanh', value: 'all' },
        { label: 'Hàng ngừng kinh doanh', value: 'combo' },
        { label: 'Tất cả', value: 'combo' },
    ];
    return (
        <Row gutter={[0, 16]}>
            <Col span={24}>
                <CardFilter title="Loại hàng">
                    <GroupCheckbox
                        data={dataTypeProduct}
                        defaultValue={['product', 'combo']}
                    />
                </CardFilter>
            </Col>
            <Col span={24}>
                <FilterCategoryProduct data={categories} />
            </Col>
            <Col span={24}>
                <CardFilter title="Tồn kho">
                    <GroupRadio data={dataInventory} defaultValue="all" />
                </CardFilter>
            </Col>
            <Col span={24}>
                <CardFilter title="Ngày dự kiến hết hàng"></CardFilter>
            </Col>

            <Col span={24}>
                <CardFilter title="Lựa chọn hiển thị">
                    <GroupRadio data={dataShow} defaultValue="all" />
                </CardFilter>
            </Col>
            <Col span={24}>
                <Record />
            </Col>
        </Row>
    );
};

export default Filter;
