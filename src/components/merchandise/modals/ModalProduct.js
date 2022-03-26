import { useState, useContext } from 'react';
import {
    Row,
    Col,
    Tabs,
    Form,
    Input,
    Collapse,
    Modal,
    Space,
    Button,
} from 'antd';
import {
    FieldInput,
    FieldInputNumber,
    FieldSelect,
    FieldRadio,
} from 'components/ui/form/FormField';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import UploadImage from 'components/ui/upload/UploadImage';
import BtnActiveModalCategory from './ModalCategory';
import BtnActiveModalBrand from './ModalBrand';
import ProductContext from 'contexts/createContext/ProductContext';
import openNotification from 'helpers/notification';
import TextPrice from 'components/common/TextPrice';
import PropTypes from 'prop-types';

const CollapseCustom = ({ header, children }) => {
    const { Panel } = Collapse;
    return (
        <Collapse>
            <Panel header={header} key="1">
                {children}
            </Panel>
        </Collapse>
    );
};

const FormProperty = ({
    index,
    onFinish,
    onRemove,
    nameProperty,
    valuesProperty,
}) => {
    const { useForm } = Form;
    const [form] = useForm();
    const onSubmitForm = () => {
        form.submit();
    };
    const onFinishForm = (values) => {
        if (!values.name) {
            return openNotification('error', 'Vui lòng nhập tên thuộc tính');
        }
        if (values.values) {
            values.values = values.values.split(',');
            values.values = values.values.map((value) => value.trim());
        } else {
            values.values = [];
        }
        onFinish(index, values);
    };

    return (
        <Form
            form={form}
            onFinish={onFinishForm}
            initialValues={{
                name: nameProperty,
                values: valuesProperty,
            }}
        >
            <Row gutter={[16, 8]}>
                <Col span={10}>
                    <FieldInput
                        label="Tên thuộc tính"
                        name="name"
                        initialValue={nameProperty}
                    />
                </Col>
                <Col span={10}>
                    <FieldInput
                        label="Giá trị"
                        name="values"
                        initialValue={valuesProperty}
                    />
                </Col>
                <Col span={4}>
                    <Space>
                        <Button
                            icon={<Icon className="ri-check-fill" />}
                            type="primary"
                            onClick={onSubmitForm}
                        />

                        <Button
                            icon={<Icon className="ri-close-fill" />}
                            type="danger"
                            onClick={() => onRemove(index)}
                        />
                    </Space>
                </Col>
            </Row>
        </Form>
    );
};

const FormUnit = ({
    index,
    onFinish,
    onRemove,
    nameUnit,
    valueUnit,
    priceUnit,
}) => {
    const { useForm } = Form;
    const [form] = useForm();

    const convertFromStringToNumber = (value) => {
        if (typeof value === 'number') {
            return value;
        }

        value = value.split(',').join('');
        value = parseInt(value);
        return value;
    };

    const onSubmitForm = () => {
        form.submit();
    };

    const onFinishForm = (values) => {
        values.value = convertFromStringToNumber(values.value);
        values.price = convertFromStringToNumber(values.price);
        if (!values.name) {
            return openNotification('error', 'Vui lòng nhập tên đơn vị tính');
        }
        if (values.value < 1) {
            return openNotification('error', 'Giá trị quy đổi không hợp lệ');
        }
        if (values.price < 0) {
            return openNotification('error', 'Giá bán của đơn vị không hợp lệ');
        }
        onFinish(index, values);
    };

    return (
        <Form
            form={form}
            onFinish={onFinishForm}
            initialValues={{
                name: nameUnit,
                value: valueUnit,
                price: priceUnit,
            }}
        >
            <Row gutter={[16, 8]}>
                <Col span={8}>
                    <FieldInput
                        label="Tên đơn vị"
                        name="name"
                        initialValue={nameUnit}
                    />
                </Col>
                <Col span={6}>
                    <FieldInputNumber
                        label="Giá trị quy đổi"
                        name="value"
                        initialValue={valueUnit}
                        spans={[14, 10]}
                    />
                </Col>
                <Col span={6}>
                    <FieldInputNumber
                        label="Giá bán"
                        name="price"
                        initialValue={priceUnit}
                    />
                </Col>
                <Col span={4}>
                    <Space>
                        <Button
                            icon={<Icon className="ri-check-fill" />}
                            type="primary"
                            onClick={onSubmitForm}
                        />

                        <Button
                            icon={<Icon className="ri-close-fill" />}
                            type="danger"
                            onClick={() => onRemove(index)}
                        />
                    </Space>
                </Col>
            </Row>
        </Form>
    );
};

const PropCollapseCustom = ({ getAttributes, initAttributes }) => {
    if (Array.isArray(initAttributes)) {
        initAttributes = initAttributes.map((attribute) => ({
            status: 'done',
            ...attribute,
        }));
    }

    const [propsProduct, setPropsProduct] = useState(initAttributes);

    const onAddProps = () => {
        let cloneProps = [...propsProduct];
        cloneProps.unshift({
            name: '',
            status: 'pending',
            values: [],
        });

        setPropsProduct(cloneProps);
    };

    const onFinish = (index, values) => {
        let cloneProps = [...propsProduct];

        let foundProps = cloneProps.filter(
            (props) => props.name === values.name
        );

        if (foundProps.length > 0) {
            return openNotification('error', 'Tên thuộc tính bị trùng');
        }
        cloneProps[index] = {
            status: 'done',
            ...values,
        };
        setPropsProduct(cloneProps);
        getAttributes(cloneProps);
    };

    const onEdit = (index) => {
        let cloneProps = [...propsProduct];
        cloneProps[index].status = 'pending';
        cloneProps[index].name = '';
        setPropsProduct(cloneProps);
        getAttributes(cloneProps);
    };

    const onRemove = (index) => {
        let cloneProps = [...propsProduct];
        cloneProps.splice(index, 1);
        setPropsProduct(cloneProps);
        getAttributes(cloneProps);
    };
    return (
        <CollapseCustom header="Thuộc tính">
            {propsProduct.length > 0
                ? propsProduct.map((property, index) =>
                      property.status === 'pending' ? (
                          <FormProperty
                              index={index}
                              key={index}
                              onFinish={onFinish}
                              onRemove={onRemove}
                              nameProperty={property.name}
                              valuesProperty={property.values.join(', ')}
                          />
                      ) : (
                          <Row
                              key={index}
                              style={{ marginBottom: '0.5rem' }}
                              gutter={[16, 8]}
                              align="middle"
                          >
                              <Col span={10}>
                                  <Space>
                                      <span style={{ fontWeight: 600 }}>
                                          Tên thuộc tính:
                                      </span>
                                      <span> {property.name}</span>
                                  </Space>
                              </Col>
                              <Col span={10}>
                                  <Space>
                                      <span style={{ fontWeight: 600 }}>
                                          {' '}
                                          Giá trị:
                                      </span>
                                      <span> {property.values.join(', ')}</span>
                                  </Space>
                              </Col>
                              <Col span={4}>
                                  <Space>
                                      <Button
                                          icon={
                                              <Icon className="ri-pencil-fill" />
                                          }
                                          type="primary"
                                          onClick={() => {
                                              onEdit(index);
                                          }}
                                      />

                                      <Button
                                          icon={
                                              <Icon className="ri-close-fill" />
                                          }
                                          type="danger"
                                          onClick={() => onRemove(index)}
                                      />
                                  </Space>
                              </Col>
                          </Row>
                      )
                  )
                : null}
            {propsProduct.length > 0 ? (
                <Row>
                    <small style={{ color: 'red' }}>
                        * Các giá trị cách nhau bởi dấu " , "
                    </small>
                </Row>
            ) : null}
            <ButtonCustom
                icon={<Icon className="ri-add-line" />}
                type="secondary"
                text="Thêm thuộc tính"
                onClick={onAddProps}
            />
        </CollapseCustom>
    );
};

const UnitCollapseCustom = ({ getPriceProduct, getUnits, initUnits }) => {
    if (initUnits.units) {
        if (Array.isArray(initUnits.units)) {
            initUnits.units = initUnits.units.map((unit) => ({
                status: 'done',
                ...unit,
            }));
        }
    }
    const [unitBase, setUnitBase] = useState(initUnits.nameBase || '');
    const [unitsProduct, setUnitsProduct] = useState(initUnits.units || []);
    const { useForm } = Form;
    const [form] = useForm();

    const onSubmitFormBase = () => {
        form.submit();
    };
    const onFinishFormBase = (values) => {
        let cloneUnits = [...unitsProduct];
        if (cloneUnits.length > 0) {
            let foundUnit = cloneUnits.filter(
                (unit) => unit.name === values.name
            );
            if (foundUnit.length > 0) {
                return openNotification('error', 'Tên đơn vị bị trùng');
            }
        }

        if (!values.name) {
            return openNotification(
                'error',
                'Vui lòng nhập tên đơn vị tính cơ bản'
            );
        }
        setUnitBase(values.name);
        getUnits({
            nameBase: values.name,
            units: cloneUnits,
        });
    };

    const onEditNameBase = () => {
        let cloneUnits = [...unitsProduct];
        setUnitBase('');
        getUnits({
            nameBase: '',
            units: cloneUnits,
        });
    };
    const onAddUnits = () => {
        if (unitBase) {
            let cloneUnits = [...unitsProduct];
            let priceProduct = getPriceProduct();
            cloneUnits.unshift({
                name: '',
                status: 'pending',
                value: 1,
                price: priceProduct,
            });

            return setUnitsProduct(cloneUnits);
        }
        return openNotification(
            'error',
            'Vui lòng nhập tên đơn vị tính cơ bản'
        );
    };

    const onFinish = (index, values) => {
        let cloneUnits = [...unitsProduct];

        let foundUnit = cloneUnits.filter((unit) => unit.name === values.name);
        if (unitBase === values.name || foundUnit.length > 0) {
            return openNotification('error', 'Tên đơn vị bị trùng');
        }
        cloneUnits[index] = {
            status: 'done',
            ...values,
        };

        setUnitsProduct(cloneUnits);
        getUnits({
            nameBase: unitBase,
            units: cloneUnits,
        });
    };

    const onEdit = (index) => {
        let cloneUnits = [...unitsProduct];
        cloneUnits[index].status = 'pending';
        cloneUnits[index].name = '';
        setUnitsProduct(cloneUnits);
        getUnits({
            nameBase: unitBase,
            units: cloneUnits,
        });
    };

    const onRemove = (index) => {
        let cloneUnits = [...unitsProduct];
        cloneUnits.splice(index, 1);
        setUnitsProduct(cloneUnits);
        getUnits({
            nameBase: unitBase,
            units: cloneUnits,
        });
    };
    return (
        <CollapseCustom header="Đơn vị tính">
            <Row
                style={{ marginBottom: '0.5rem' }}
                align="middle"
                gutter={[16, 8]}
            >
                <Col span={12}>
                    {unitBase ? (
                        <Space>
                            <span style={{ fontWeight: 600 }}>
                                Tên đơn vị cơ bản:
                            </span>
                            <span>{unitBase}</span>
                        </Space>
                    ) : (
                        <Form form={form} onFinish={onFinishFormBase}>
                            <FieldInput
                                label="Tên đơn vị cơ bản"
                                name="name"
                                placeholder={'VD: Gói, Hộp ...'}
                            />
                        </Form>
                    )}
                </Col>
                <Col>
                    {unitBase ? (
                        <Button
                            icon={<Icon className="ri-pencil-fill" />}
                            type="primary"
                            onClick={onEditNameBase}
                        />
                    ) : (
                        <Button
                            icon={<Icon className="ri-check-fill" />}
                            type="primary"
                            onClick={onSubmitFormBase}
                        />
                    )}
                </Col>
            </Row>
            {unitsProduct.length > 0
                ? unitsProduct.map((unit, index) =>
                      unit.status === 'pending' ? (
                          <FormUnit
                              index={index}
                              key={index}
                              onFinish={onFinish}
                              onRemove={onRemove}
                              nameUnit={unit.name}
                              valueUnit={unit.value}
                              priceUnit={unit.price}
                          />
                      ) : (
                          <Row
                              key={index}
                              style={{ marginBottom: '0.5rem' }}
                              gutter={[16, 8]}
                              align="middle"
                          >
                              <Col span={8}>
                                  <Space>
                                      <span style={{ fontWeight: 600 }}>
                                          Tên đơn vị :
                                      </span>
                                      <span> {unit.name}</span>
                                  </Space>
                              </Col>
                              <Col span={6}>
                                  <Space>
                                      <span style={{ fontWeight: 600 }}>
                                          {' '}
                                          Giá trị quy đổi:
                                      </span>
                                      <span>
                                          {' '}
                                          <TextPrice value={unit.value} />
                                      </span>
                                  </Space>
                              </Col>
                              <Col span={6}>
                                  <Space>
                                      <span style={{ fontWeight: 600 }}>
                                          {' '}
                                          Giá bán:
                                      </span>
                                      <span>
                                          {' '}
                                          <TextPrice value={unit.price} />
                                      </span>
                                  </Space>
                              </Col>
                              <Col span={4}>
                                  <Space>
                                      <Button
                                          icon={
                                              <Icon className="ri-pencil-fill" />
                                          }
                                          type="primary"
                                          onClick={() => {
                                              onEdit(index);
                                          }}
                                      />

                                      <Button
                                          icon={
                                              <Icon className="ri-close-fill" />
                                          }
                                          type="danger"
                                          onClick={() => onRemove(index)}
                                      />
                                  </Space>
                              </Col>
                          </Row>
                      )
                  )
                : null}
            <ButtonCustom
                icon={<Icon className="ri-add-line" />}
                type="secondary"
                text="Thêm đơn vị tính"
                onClick={onAddUnits}
            />
        </CollapseCustom>
    );
};

const ModalProduct = ({ type, productUpdated, visible, onCancel, ...rest }) => {
    const [attributes, setAttributes] = useState([]);
    const [units, setUnits] = useState({});
    const {
        createProduct,
        updateProduct,
        categories,
        brands,
        categorySelected,
        brandSelected,
        selectCategory,
        selectBrand,
    } = useContext(ProductContext);

    const initialValueForm =
        type === 'update'
            ? {
                  ...productUpdated,
                  category: productUpdated.category._id,
              }
            : {
                  type: 'product',
                  inventory: 0,
                  costPrice: 0,
                  price: 0,
                  weight: 0,
                  lessEstimate: 0,
                  moreEstimate: 999999,
              };

    let cloneCategories = [...categories];
    let cloneBrands = [...brands];

    if (cloneCategories.length > 0) {
        cloneCategories = cloneCategories.map((category) => ({
            label: category.name,
            value: category._id,
        }));
    }

    if (cloneBrands.length > 0) {
        cloneBrands = cloneBrands.map((brand) => ({
            label: brand.name,
            value: brand._id,
        }));
    }

    const { TabPane } = Tabs;
    const { useForm, Item } = Form;

    const [formProduct] = useForm();

    const dataProductType = [
        { label: 'Hàng hóa', value: 'product' },
        { label: 'Combo - Đóng gói', value: 'combo' },
    ];

    const styles = {
        position: 'relative',
        top: '-70px',
    };

    const stylesDetailDesc = {
        title: {
            borderBottom: '1px solid #bfbfbf',
            padding: '0.75rem 0 0.75rem 0.75rem',
            backgroundColor: '#fafafa',
            border: '1px solid #bfbfbf',
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
        },
        content: {
            border: '1px solid #bfbfbf',
            borderTop: 0,
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
        },
    };

    const styleModalUtils = {
        position: 'absolute',
        bottom: '0.25rem',
        right: '0',
    };

    const getPriceProduct = () => {
        let price = formProduct.getFieldValue('price');
        if (typeof price === 'number') {
            return price;
        } else {
            return parseInt(price.split(',').join(''));
        }
    };

    const onSelectCategory = (value, option) => {
        selectCategory(option);
    };

    const onSelectBrand = (value, option) => {
        selectBrand(option);
    };

    //set field form
    const getFileList = (listFile) => {
        formProduct.setFieldsValue({ photos: listFile });
    };

    const getAttributes = (data) => {
        if (Array.isArray(data)) {
            data = data.filter((item) => item.status === 'done');
            data = data.map((item) => ({
                name: item.name,
                values: item.values,
            }));

            setAttributes(data);
        }
    };

    const getUnits = (data) => {
        if (data.units && data.units.length > 0) {
            data.units = data.units.filter((item) => item.status === 'done');
            data.units = data.units.map((item) => ({
                name: item.name,
                value: item.value,
                price: item.price,
            }));
        }
        setUnits(data);
    };

    const convertFromStringToNumber = (value) => {
        if (typeof value === 'number') {
            return value;
        }

        value = value.split(',').join('');
        value = parseInt(value);
        return value;
    };

    const onSumitForm = () => {
        formProduct.submit();
    };

    const onFinishForm = (values) => {
        if (categorySelected.value) {
            values.category = categorySelected.value;
        }
        if (!values.category) {
            return openNotification('error', 'Bạn chưa chọn nhóm hàng');
        }
        values.brand = brandSelected.label;
        values.inventory = convertFromStringToNumber(values.inventory);
        values.costPrice = convertFromStringToNumber(values.costPrice);
        values.price = convertFromStringToNumber(values.price);
        values.weight = convertFromStringToNumber(values.weight);
        values.lessEstimate = values.lessEstimate
            ? convertFromStringToNumber(values.lessEstimate)
            : 0;
        values.moreEstimate = values.moreEstimate
            ? convertFromStringToNumber(values.moreEstimate)
            : 0;
        if (values.inventory < 0) {
            return openNotification('error', 'Giá trị tồn kho không hợp lệ');
        }
        if (values.costPrice < 0) {
            return openNotification('error', 'Giá trị giá vốn không hợp lệ');
        }
        if (values.price < 0) {
            return openNotification('error', 'Giá trị giá bán không hợp lệ');
        }
        if (values.weight < 0) {
            return openNotification('error', 'Giá trị khối lượng không hợp lệ');
        }
        if (values.lessEstimate < 0 || values.moreEstimate < 0) {
            return openNotification(
                'error',
                'Giá trị định mức tồn không hợp lệ'
            );
        }
        if (values.photos) {
            values.photos = values.photos.map((file) => file.originFileObj);
        }

        if (units.units && units.units.length > 0) {
            if (!units.nameBase) {
                return openNotification(
                    'error',
                    'Bạn chưa nhập tên đơn vị cơ bản'
                );
            }
        }
        values.attributes = attributes;
        values.units = units;

        if (type === 'add') {
            createProduct(values);
        }
        if (type === 'update') {
            values.code = productUpdated.code;
            delete values.photos;

            updateProduct(productUpdated._id, values);
        }

        onCancel();
    };

    return (
        <Modal
            title={
                type === 'add'
                    ? 'Thêm hàng hóa'
                    : `Cập nhật ${productUpdated.code}`
            }
            visible={visible}
            onCancel={onCancel}
            footer={null}
            width={900}
            centered
            {...rest}
        >
            <Form
                form={formProduct}
                onFinish={onFinishForm}
                initialValues={initialValueForm}
            >
                <Tabs centered style={styles}>
                    <TabPane tab="Thông tin" key="1">
                        <Row justify="space-between" gutter={[36, 8]}>
                            <Col span={12}>
                                <FieldInput
                                    label="Tên hàng"
                                    name="name"
                                    initialValue={
                                        type === 'update'
                                            ? productUpdated.name
                                            : ''
                                    }
                                />
                                <div style={{ position: 'relative' }}>
                                    <FieldSelect
                                        label="Nhóm hàng"
                                        name="category"
                                        options={cloneCategories}
                                        onSelect={onSelectCategory}
                                        value={
                                            type === 'update'
                                                ? categorySelected.value
                                                    ? categorySelected.value
                                                    : productUpdated.category
                                                          ._id
                                                : categorySelected.value
                                        }
                                    />
                                    <div style={styleModalUtils}>
                                        <BtnActiveModalCategory
                                            isUpdate={
                                                categorySelected.value
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <FieldSelect
                                        label="Thương hiệu"
                                        name="brand"
                                        options={cloneBrands}
                                        onSelect={onSelectBrand}
                                        value={brandSelected.value}
                                    />
                                    <div style={styleModalUtils}>
                                        <BtnActiveModalBrand
                                            isUpdate={
                                                brandSelected.value
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>
                                </div>
                                <FieldInput
                                    label="Vị trí"
                                    name="position"
                                    initialValue={
                                        type === 'update'
                                            ? productUpdated.position
                                            : ''
                                    }
                                />
                                <FieldInputNumber
                                    label="Tồn kho"
                                    name="inventory"
                                    initialValue={
                                        type === 'update'
                                            ? productUpdated.inventory
                                            : 0
                                    }
                                />
                            </Col>
                            <Col span={12}>
                                <FieldInputNumber
                                    label="Giá vốn"
                                    name="costPrice"
                                    initialValue={
                                        type === 'update'
                                            ? productUpdated.costPrice
                                            : 0
                                    }
                                />
                                <FieldInputNumber
                                    label="Giá bán"
                                    name="price"
                                    initialValue={
                                        type === 'update'
                                            ? productUpdated.price
                                            : 0
                                    }
                                />
                                <FieldInputNumber
                                    label="Trọng lượng"
                                    name="weight"
                                    initialValue={
                                        type === 'update'
                                            ? productUpdated.weight
                                            : 0
                                    }
                                />
                                <FieldRadio
                                    initialValue={
                                        type === 'update'
                                            ? productUpdated.type
                                            : 'product'
                                    }
                                    label="Loại hàng"
                                    name="type"
                                    data={dataProductType}
                                />
                            </Col>
                        </Row>
                        {type === 'add' ? (
                            <Row style={{ marginTop: '1rem' }}>
                                <Col span={24}>
                                    <Item name="photos">
                                        <UploadImage
                                            max={1}
                                            getFileList={getFileList}
                                        />
                                    </Item>
                                </Col>
                            </Row>
                        ) : null}
                        <Row style={{ marginTop: '1rem' }}>
                            <Col span={24}>
                                <PropCollapseCustom
                                    getAttributes={getAttributes}
                                    initAttributes={productUpdated.attributes}
                                    type={type}
                                />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '1rem' }}>
                            <Col span={24}>
                                <UnitCollapseCustom
                                    getPriceProduct={getPriceProduct}
                                    getUnits={getUnits}
                                    initUnits={productUpdated.units}
                                    type={type}
                                />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Mô tả chi tiết" key="2">
                        <div>
                            <div style={stylesDetailDesc.title}>
                                <h4 style={{ margin: 0 }}>Định mức tồn</h4>
                            </div>
                            <div style={stylesDetailDesc.content}>
                                <Row
                                    style={{ padding: '1rem 2rem' }}
                                    gutter={[32, 0]}
                                >
                                    <Col span={12}>
                                        <FieldInputNumber
                                            label="Ít nhất"
                                            name="lessEstimate"
                                            initialValue={
                                                type === 'update'
                                                    ? productUpdated.lessEstimate
                                                    : 0
                                            }
                                        />
                                    </Col>
                                    <Col span={12}>
                                        <FieldInputNumber
                                            label="Nhiều nhất"
                                            name="mostEstimate"
                                            initialValue={
                                                type === 'update'
                                                    ? productUpdated.mostEstimate
                                                    : 999999
                                            }
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <div style={stylesDetailDesc.title}>
                                <h4 style={{ margin: 0 }}>Mô tả</h4>
                            </div>
                            <div style={stylesDetailDesc.content}>
                                <Item name="description">
                                    <Input.TextArea
                                        bordered={false}
                                        autoSize={{ minRows: 4, maxRows: 4 }}
                                        defaultValue={
                                            type === 'update'
                                                ? productUpdated.description
                                                : ''
                                        }
                                    />
                                </Item>
                            </div>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            <div style={stylesDetailDesc.title}>
                                <h4 style={{ margin: 0 }}>
                                    Mẫu ghi chú (Hóa đơn...)
                                </h4>
                            </div>
                            <div style={stylesDetailDesc.content}>
                                <Item name="notePattern">
                                    <Input.TextArea
                                        bordered={false}
                                        autoSize={{ minRows: 4, maxRows: 4 }}
                                        defaultValue={
                                            type === 'update'
                                                ? productUpdated.notePattern
                                                : ''
                                        }
                                    />
                                </Item>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
                <Row justify="end">
                    <Space>
                        <ButtonCustom
                            text="Hủy bỏ"
                            type="danger"
                            onClick={onCancel}
                        />
                        <ButtonCustom text="Cập nhật" onClick={onSumitForm} />
                    </Space>
                </Row>
            </Form>
        </Modal>
    );
};

const BtnActiveModalProduct = ({ text, iconClassName, type, ...rest }) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <ButtonCustom
                text={text}
                icon={<Icon className={'ri-add-line'} />}
                type={type}
                onClick={() => setVisible(true)}
                {...rest}
            />
            {visible ? (
                <ModalProduct
                    type="add"
                    visible={visible}
                    onCancel={() => setVisible(false)}
                />
            ) : null}
        </>
    );
};

ModalProduct.defaultProps = {
    productUpdated: {},
};

ModalProduct.propTypes = {
    productUpdated: PropTypes.object,
};

PropCollapseCustom.defaultProps = {
    initAttributes: [],
};

PropCollapseCustom.propTypes = {
    initAttributes: PropTypes.array,
};

UnitCollapseCustom.defaultProps = {
    initUnits: {},
};

UnitCollapseCustom.propTypes = {
    initUnits: PropTypes.object,
};

export { ModalProduct };

export default BtnActiveModalProduct;
