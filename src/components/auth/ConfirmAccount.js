import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Row, Col, Space, Button } from 'antd';
import { InputString } from 'components/ui/input/Input';
import Icon from 'components/ui/icon/Icon';
import ButtonCustom from 'components/ui/button/Button';
import Layout from './Layout';
import openNotification from 'helpers/notification';
import authApi from 'apis/authApi';

const ButtonCountDown = ({ onAction }) => {
    let spanRef = useRef();
    const [isCountDown, setIsCountDown] = useState(false);
    const onSendOTP = () => {
        let condition = onAction();
        if (!condition) return;

        setIsCountDown(true);
        let timer = 60;
        let interval = setInterval(() => {
            timer = timer - 1;
            if (timer === 0) {
                setIsCountDown(false);
                clearInterval(interval);
            }
            spanRef.current.innerText = '(' + timer + ') ';
        }, 1000);
    };
    return (
        <Space>
            <Button type="primary" onClick={onSendOTP} disabled={isCountDown}>
                {isCountDown ? <span ref={spanRef}></span> : null}
                <span>Gửi OTP</span>
            </Button>
        </Space>
    );
};
const ConfirmAccount = ({ email }) => {
    const { Item, useForm } = Form;
    let [form] = useForm();
    const navigate = useNavigate();

    const styleItem = {
        marginBottom: '0.75rem',
    };

    const styleButton = {
        borderRadius: '0.25rem',
        width: '100%',
        height: '2.5rem',
        fontWeight: 600,
    };

    const onAction = async () => {
        let email = form.getFieldValue('email');
        if (!email) {
            openNotification('error', 'Bạn chưa nhập email');
            return false;
        }

        try {
            let fetch = await authApi.sendConfirmOTP(email);

            openNotification('success', fetch.message);
            return true;
        } catch (error) {
            openNotification('error', error.response.data.message);
        }
    };

    const onSubmitForm = () => {
        form.submit();
    };

    const onFinishForm =async (values) => {
        if (!values.otp) {
            return openNotification('error', 'Bạn chưa nhập otp');
        }
        try {
            let fetch = await authApi.confirmAccount(values);

            openNotification('success', fetch.message);
            window.location.href="/overview"
        } catch (error) {
            openNotification('error', error.response.data.message);
        }
        
    };
    return (
        <Layout title={'Xác thực tài khoản'}>
            <Form form={form} onFinish={onFinishForm}>
                <Item name="email" style={styleItem} initialValue={email}>
                    <InputString
                        size="small"
                        placeholder="Email"
                        prefix={<Icon className="ri-mail-line" />}
                        value={email}
                        disabled
                    />
                </Item>
                <Item name="otp" style={styleItem}>
                    <InputString
                        size="small"
                        placeholder="Mã OTP"
                        prefix={<Icon className="ri-key-line" />}
                    />
                </Item>

                <Row justify="space-between" align="middle">
                    <Col>
                        <ButtonCountDown onAction={onAction} />
                    </Col>
                    <Col>
                        <Link to="/">Về trang đăng nhập ?</Link>
                    </Col>
                </Row>
            </Form>
            <div className="auth__button">
                <Row style={{ width: '100%' }}>
                    <Col span={24}>
                        <ButtonCustom
                            text="Xác thực"
                            style={styleButton}
                            onClick={onSubmitForm}
                        />
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default ConfirmAccount;
