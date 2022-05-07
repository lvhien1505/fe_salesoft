import { useState } from 'react';
import ResizePanel from 'react-resize-panel';
import { Row, Col, Button, Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import Pagnigation from 'components/common/Pagnigation';
import Icon from 'components/ui/icon/Icon';

import './styles/screenManageProduct.scss';

const ScreenSelectProduct = ({ buttonProps, children }) => {
    const [visible, setVisible] = useState(false);
    const styleResizePanel = {
        width: '50%',
        borderLeft: '2px solid #bfbfbf',
        backgroundColor: '#fff',
        boxShadow: `0 0.46875rem 2.1875rem rgba(31, 10, 6, 0.03),
					0 0.9375rem 1.40625rem rgba(31, 10, 6, 0.03),
					0 0.25rem 0.53125rem rgba(31, 10, 6, 0.05),
					0 0.125rem 0.1875rem rgba(31, 10, 6, 0.03)`,
    };

    const styleIconButton = {
        margin: 0,
        fontWeight: 1000,
        fontSize: '1.25rem',
    };

    const turnOnScreen = () => {
        setVisible(true);
    };

    const turnOffScreen = () => {
        setVisible(false);
    };
    return (
        <>
            <ButtonCustom
                text={''}
                icon={
                    <Icon
                        className={'ri-shopping-basket-2-line'}
                        style={styleIconButton}
                    />
                }
                type={buttonProps.type || 'default'}
                style={buttonProps.style || {}}
                onClick={turnOnScreen}
            />
            <div
                className={
                    'screen-product' +
                    ' ' +
                    (visible ? 'screen-product-active' : '')
                }
            >
                <div
                    style={{ width: '50%', height: '100%' }}
                    onClick={turnOffScreen}
                ></div>
                <ResizePanel
                    direction="w"
                    style={styleResizePanel}
                    handleClass="resizable--custom"
                >
                    <div style={{ width: '100%', padding: '1rem 1.25rem' }}>
                        <Row justify="space-between">
                            <Col>
                                <Space>
                                    <Button
                                        icon={
                                            <Icon className="ri-filter-line" />
                                        }
                                        type="primary"
                                    />
                                    <Button
                                        icon={
                                            <Icon className="ri-list-unordered" />
                                        }
                                        type="primary"
                                    />

                                    {/* <Pagnigation /> */}
                                </Space>
                            </Col>
                            <Col>
                                <Button
                                    icon={<Icon className="ri-close-line" />}
                                    type="danger"
                                    onClick={turnOffScreen}
                                />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '1rem' }} gutter={[12, 12]}>
                            {children}
                        </Row>
                    </div>
                </ResizePanel>
            </div>
        </>
    );
};

export default ScreenSelectProduct;
