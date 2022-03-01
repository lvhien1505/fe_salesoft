import { useState } from 'react';
import { Row, Col } from 'antd';
import CardFilter from 'components/common/CardFilter';
import { InputString } from 'components/ui/input/Input';
import Icon from 'components/ui/icon/Icon';
import Record from 'components/common/manage/Record';
import Select from 'components/ui/select/Select';

import '../styles/filter.scss';

const FilterTablePrice = () => {
    return (
        <CardFilter
            title="Bảng giá"
            suffix={
                <Icon
                    className="ri-add-circle-line"    
                />
            }
        >
            <Select mode="multiple" style={{width:'100%'}} placeholder="Chọn bảng giá"/>
        </CardFilter>
    );
};

const FilterCategoryProduct = () => {
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
                        tabIndex={1}
                    >
                        <span className="title">Tất cả</span>
                    </div>
                    <div
                        className="item-category"
                        onClick={() => onChooseCategory('child')}
                        tabIndex={2}
                    >
                        <span className="title">Thuốc lá</span>
                    </div>
                    <div
                        className="item-category"
                        onClick={() => onChooseCategory('child')}
                        tabIndex={3}
                    >
                        <span className="title">Sữa</span>
                    </div>
                    <div
                        className="item-category"
                        onClick={() => onChooseCategory('child')}
                        tabIndex={4}
                    >
                        <span className="title">Nước ngọt</span>
                    </div>
                    <div
                        className="item-category"
                        onClick={() => onChooseCategory('child')}
                        tabIndex={5}
                    >
                        <span className="title">Mỹ phẩm</span>
                    </div>
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
                <Record/>
            </Col>
        </Row>
    );
};

export default Filter;
