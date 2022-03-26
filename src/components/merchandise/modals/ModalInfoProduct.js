import { useContext, useState } from 'react';
import { Modal, Row, Col, Tabs, Image, Space } from 'antd';
import Table from 'components/common/manage/Table';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import ProductContext from 'contexts/createContext/ProductContext';
import TextPrice from 'components/common/TextPrice';
import { ModalProduct } from './ModalProduct';

import '../styles/modalInfoProduct.scss';

const Field = ({ label, value }) => {
    return (
        <div className="field_info">
            <span>{label}:</span>
            <span>
                {typeof value === 'number' ? (
                    <TextPrice value={value} />
                ) : (
                    value
                )}
            </span>
        </div>
    );
};
const ModalInfoProduct = ({ visible, onCancel, ...rest }) => {
    let urlServer = process.env.REACT_APP_URL_SERVER;

    let { productSelected } = useContext(ProductContext);
    const [visibleModalProduct, setVisibleModalProduct] = useState(false);
    let product = {};
    const { TabPane } = Tabs;

    const styles = {
        position: 'relative',
        top: '-70px',
    };

    if (productSelected) {
        productSelected.code
            ? (product.code = productSelected.code)
            : (product.code = '');
        productSelected.name
            ? (product.name = productSelected.name)
            : (product.name = '');
        productSelected.category
            ? (product.category = productSelected.category.name)
            : (product.code = '');
        if (productSelected.type) {
            productSelected.type === 'product'
                ? (product.type = 'Hàng hóa')
                : (product.type = 'Combo - Đóng gói');
        } else {
            product.type = '';
        }
        productSelected.brand
            ? (product.brand = productSelected.brand)
            : (product.brand = '');

        if (typeof productSelected.price === 'number') {
            product.price = productSelected.price;
        } else {
            product.price = '';
        }

        if (typeof productSelected.costPrice === 'number') {
            product.costPrice = productSelected.costPrice;
        } else {
            product.costPrice = '';
        }

        if (typeof productSelected.weight === 'number') {
            product.weight = productSelected.weight;
        } else {
            product.weight = '';
        }

        if (typeof productSelected.inventory === 'number') {
            product.inventory = productSelected.inventory;
        } else {
            product.inventory = '';
        }

        productSelected.position
            ? (product.position = productSelected.position)
            : (product.position = '');

        product.photos = productSelected.photos || [];

        productSelected.desciption
            ? (product.desciption = productSelected.desciption)
            : (product.desciption = '');

        productSelected.notePattern
            ? (product.notePattern = productSelected.notePattern)
            : (product.notePattern = '');
    }

    return (
        <Modal
            title={product.code}
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={1000}
            centered
            {...rest}
            className="modal-info-product"
        >
            <Tabs centered style={styles}>
                <TabPane tab="Thông tin" key="1">
                    <Row>
                        <Col>
                            <span className="product-name">{product.name}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Space size="small" align="center">
                                <span
                                    style={{
                                        fontSize: '1.125rem',
                                        fontWeight: 1000,
                                        color: '#4bac4d',
                                    }}
                                >
                                    <Icon className="ri-check-fill" />
                                </span>
                                <span
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                    }}
                                >
                                    Bán trực tiếp
                                </span>
                                <span
                                    style={{
                                        fontSize: '1.125rem',
                                        fontWeight: 1000,
                                        color: '#da624a',
                                    }}
                                >
                                    <Icon className="ri-close-fill" />
                                </span>
                                <span
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                    }}
                                >
                                    Không tích điểm
                                </span>
                            </Space>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} style={{ marginTop: '1rem' }}>
                        <Col span={6}>
                            <Image
                                width={200}
                                src={`${urlServer}/images/${product.photos[0]}`}
                            />
                        </Col>
                        <Col span={18}>
                            <Row gutter={[24, 8]}>
                                <Col span={12}>
                                    <Field
                                        label="Mã hàng"
                                        value={product.code}
                                    />
                                    <Field
                                        label="Nhóm hàng"
                                        value={product.category}
                                    />
                                    <Field
                                        label="Loại hàng"
                                        value={product.type}
                                    />
                                    <Field
                                        label="Thương hiệu"
                                        value={product.brand}
                                    />
                                    <Field
                                        label="Định mức tồn"
                                        value={product.name}
                                    />
                                    <Field
                                        label="Giá bán"
                                        value={product.price}
                                    />
                                    <Field
                                        label="Giá vốn"
                                        value={product.costPrice}
                                    />
                                    <Field
                                        label="Trọng lượng"
                                        value={product.weight}
                                    />
                                    <Field
                                        label="Vị trí"
                                        value={product.position}
                                    />
                                    <Field
                                        label="Tồn kho"
                                        value={product.inventory}
                                    />
                                </Col>
                                <Col span={12} className="info-note">
                                    <div>
                                        <div>Mô tả</div>
                                        <div>{product.desciption}</div>
                                    </div>
                                    <div>
                                        <div>Ghi chú</div>
                                        <div>{product.notePattern}</div>
                                    </div>
                                    <div>
                                        <div>Nhà cung cấp</div>
                                        <div></div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Thẻ kho" key="2">
                    <Table />
                </TabPane>
            </Tabs>
            <Row justify="end">
                <Space>
                    <ButtonCustom
                        text="Cập nhật"
                        onClick={() => setVisibleModalProduct(true)}
                    />
                    <ButtonCustom
                        text="Ngừng kinh doanh"
                        type="danger"
                        onClick={onCancel}
                    />
                    <ButtonCustom text="Xóa" type="danger" onClick={onCancel} />
                </Space>
            </Row>
            {visibleModalProduct ? (
                <ModalProduct
                    type="update"
                    visible={visibleModalProduct}
                    onCancel={() => setVisibleModalProduct(false)}
                    productUpdated={productSelected}
                />
            ) : null}
        </Modal>
    );
};

export default ModalInfoProduct;
