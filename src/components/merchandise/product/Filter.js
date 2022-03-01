import { useState } from 'react';
import { Row, Col } from 'antd';
import GroupRadio from 'components/common/GroupRadio';
import GroupCheckbox from 'components/common/GroupCheckbox';
import CardFilter from 'components/common/CardFilter';
import Record from 'components/common/manage/Record';
import { ModalCategory } from '../modals/ModalCategory';
import { InputString } from 'components/ui/input/Input';
import Icon from 'components/ui/icon/Icon';
import { AutoCompleteSupplier } from 'components/auto-complete/AutoCompleteSupplier';

import '../styles/filter.scss';

const FilterCategoryProduct = () => {
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
                        <span
                            className="icon"
                            onClick={() => onActiveModal('update')}
                        >
                            <Icon className="ri-pencil-line" />
                        </span>
                    </div>
                    <div
                        className="item-category"
                        onClick={() => onChooseCategory('child')}
                        tabIndex={3}
                    >
                        <span className="title">Sữa</span>
                        <span
                            className="icon"
                            onClick={() => onActiveModal('update')}
                        >
                            <Icon className="ri-pencil-line" />
                        </span>
                    </div>
                    <div
                        className="item-category"
                        onClick={() => onChooseCategory('child')}
                        tabIndex={4}
                    >
                        <span className="title">Nước ngọt</span>
                        <span
                            className="icon"
                            onClick={() => onActiveModal('update')}
                        >
                            <Icon className="ri-pencil-line" />
                        </span>
                    </div>
                    <div
                        className="item-category"
                        onClick={() => onChooseCategory('child')}
                        tabIndex={5}
                    >
                        <span className="title">Mỹ phẩm</span>
                        <span
                            className="icon"
                            onClick={() => onActiveModal('update')}
                        >
                            <Icon className="ri-pencil-line" />
                        </span>
                    </div>
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
                <FilterCategoryProduct />
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
                <CardFilter title="Nhà cung cấp">
                    <AutoCompleteSupplier
                        style={{ width: '100%' }}
                        placeholder={'Chọn nhà cung cấp'}
                    />
                </CardFilter>
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
