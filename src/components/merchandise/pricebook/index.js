import { useContext } from 'react';
import { Row, Col, Button, Popover, Form } from 'antd';
import Filter from './Filter';
import Search from './Search';
import GroupButton from './GroupButton';
import Table from 'components/common/manage/Table';
import PriceBookContext from 'contexts/createContext/PriceBookContext';
import '../styles/main.scss';
import BtnActiveModalPrice from '../modals/ModalPrice';

const Content = () => {
    const { products, tablePriceSelected } = useContext(PriceBookContext);

    return (
        <Row gutter={[8, 8]}>
            <Col span={24}>
                <Row gutter={[20, 8]}>
                    <Col span={6}>
                        <h3 style={{ fontWeight: '600' }}>Thiết lập giá</h3>
                    </Col>
                    <Col span={18}>
                        <Row justify="space-between" gutter={[0, 8]}>
                            <Col span={10}>
                                <Search />
                            </Col>
                            <Col>
                                <GroupButton />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row gutter={[20, 8]}>
                    <Col span={6}>
                        <Filter />
                    </Col>
                    <Col span={18}>
                        <Table
                            data={products}
                            expandRow={
                                tablePriceSelected._id
                                    ? {
                                          title: tablePriceSelected.name,
                                          key: tablePriceSelected.name,
                                          align: 'center',
                                          render: (record) => {
                                              let price = null;
                                              tablePriceSelected.products.forEach(
                                                  (product) => {
                                                      if (
                                                          product.productID ===
                                                          record._id
                                                      ) {
                                                          price = product.price;
                                                      }
                                                  }
                                              );
                                              return price ? (
                                                  <BtnActiveModalPrice
                                                      title={price}
                                                      type="text"
                                                      tablePriceID={
                                                          tablePriceSelected._id
                                                      }
                                                      productID={record._id}
                                                      defaultPrice={price}
                                                  />
                                              ) : (
                                                  <BtnActiveModalPrice
                                                      type="icon"
                                                      tablePriceID={
                                                          tablePriceSelected._id
                                                      }
                                                      productID={record._id}
                                                      defaultPrice={0}
                                                  />
                                              );
                                          },
                                      }
                                    : null
                            }
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Content;
