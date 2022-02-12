import Input from 'react-currency-format';
import { Row, Col, Space, Table } from 'antd';
import Icon from 'components/ui/icon/Icon';
import { formatDateToClient,getDateToClient } from 'helpers/formatDate';

import './styles/report.scss';

const ScreenReport = ({ title, colsTable, dataTable, styleContent }) => {
	let time = formatDateToClient(new Date());
	let date = getDateToClient(new Date())

    return (
        <div className="screen-report">
            <div className="toolbar">
                <Row justify="center" gutter={[16, 8]}>
                    <Col>
                        <Icon className="ri-reply-fill" />
                    </Col>
                    <Col>
                        <Icon className="ri-share-forward-fill" />
                    </Col>
                    <Col>
                        <Icon className="ri-refresh-line" />
                    </Col>
                    <Col>
                        <Icon className="ri-rewind-fill" />
                    </Col>
                    <Col>
                        <Icon className="ri-skip-back-fill" />
                    </Col>
                    <Col>
                        <Space>
                            <Input className="input-page" value={1} />
                            <span style={{ color: '#fff' }}>/</span>
                            <span style={{ color: '#fff' }}>1</span>
                        </Space>
                    </Col>
                    <Col>
                        <Icon className="ri-skip-forward-fill" />
                    </Col>
                    <Col>
                        <Icon className="ri-speed-fill" />
                    </Col>
                    <Col>
                        <Icon className="ri-file-ppt-2-fill" />
                    </Col>
                    <Col>
                        <Icon className="ri-file-excel-2-fill" />
                    </Col>
                    <Col>
                        <Icon className="ri-printer-fill" />
                    </Col>
                    <Col>
                        <Icon className="ri-zoom-in-line" />
                    </Col>
                    <Col>
                        <Icon className="ri-zoom-out-line" />
                    </Col>
                    <Col>
                        <Icon className="ri-search-line" />
                    </Col>
                    <Col>
                        <Icon className="ri-fullscreen-fill" />
                    </Col>
                </Row>
            </div>
            <div className="content" style={styleContent}>
                <div className="wrapper">
                    <div className="day-created">
                        <span>
                            Ngày lập: {time}
                        </span>
                    </div>
                    <Row justify="center">
                        <Col>
                            <h3 className="title">{title}</h3>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col>
                            <Space>
                                <span style={{ fontSize: '0.75rem' }}>
                                    Ngày bán:
                                </span>
                                <span style={{ fontSize: '0.75rem' }}>
                                   {date}
                                </span>
                            </Space>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col>
                            <span
                                style={{
                                    fontSize: '0.75rem',
                                    fontStyle: 'italic',
                                }}
                            >
                                Chi nhánh: Chi nhánh trung tâm
                            </span>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '1rem' }}>
                        <Col span={24}>
                            <Table
                                columns={colsTable || []}
                                dataSource={dataTable || []}
                                size="small"
                                pagination={false}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ScreenReport;
