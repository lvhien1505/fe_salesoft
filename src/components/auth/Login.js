import { Link, useNavigate } from 'react-router-dom';
import { Form, Row, Col, Checkbox, notification } from 'antd';
import { InputString, InputPassword } from 'components/ui/input/Input';
import Icon from 'components/ui/icon/Icon';
import ButtonCustom from 'components/ui/button/Button';
import Layout from './Layout';
import openNotification from 'helpers/notification';

import authApi from 'apis/authApi';

const Login = () => {
    const { Item, useForm } = Form;
    let [formLogin] = useForm();

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

    const onSubmitForm = () => {
        formLogin.submit();
    };

    const onFinish =async (values) => {
        try {
            let fetch =await authApi.login(values.email, values.password);
            localStorage.setItem('_t', fetch.data.token);

            navigate('/overview');
            openNotification('success', fetch.message);
        } catch (error) {
            openNotification('error', error.response.data.message);
        }
    };

    return (
        <Layout title={'Đăng nhập'}>
            <Form form={formLogin} onFinish={onFinish}>
                <Item name="email" style={styleItem}>
                    <InputString
                        size="small"
                        placeholder="Email"
                        prefix={<Icon className="ri-user-line" />}
                    />
                </Item>
                <Item name="password" style={styleItem}>
                    <InputPassword
                        size="small"
                        placeholder="Mật khẩu"
                        prefix={<Icon className="ri-lock-password-line" />}
                    />
                </Item>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Item
                            name="remember"
                            valuePropName="checked"
                            style={{ margin: 0 }}
                        >
                            <Checkbox>Nhớ mật khẩu</Checkbox>
                        </Item>
                    </Col>

                    <Col>
                        <Link to="/forgot-password">Quên mật khẩu ?</Link>
                    </Col>
                </Row>
            </Form>
            <div className="auth__button">
                <Row style={{ width: '100%' }} gutter={[8, 8]}>
                    <Col span={12}>
                        <ButtonCustom
                            text="Đăng kí"
                            type="secondary"
                            style={styleButton}
                            onClick={() => navigate('/register')}
                        />
                    </Col>
                    <Col span={12}>
                        <ButtonCustom
                            text="Đăng nhập"
                            style={styleButton}
                            onClick={onSubmitForm}
                        />
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default Login;
