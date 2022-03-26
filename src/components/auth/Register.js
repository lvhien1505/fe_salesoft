import { Link, useNavigate } from 'react-router-dom';
import { Form, Row, Col } from 'antd';
import { InputString, InputPassword } from 'components/ui/input/Input';
import ButtonCustom from 'components/ui/button/Button';
import Layout from './Layout';
import authApi from 'apis/authApi';
import openNotification from 'helpers/notification';

const Register = () => {
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

    const onSubmitForm = () => {
        form.submit();
    };

    const onFinish = async (values) => {
        if(values.password != values.rePassword){
            return openNotification('error', 'Mật khẩu không chính xác');
        }
        try {
            let fetch = await authApi.register(values);

            openNotification('success', fetch.message);
            navigate('/');
        } catch (error) {
            openNotification('error', error.response.data.message);
        }
    };

    return (
        <Layout title={'Đăng kí'} className="auth__register">
            <Form form={form} onFinish={onFinish}>
                <Item name="fullName" style={styleItem}>
                    <InputString size="small" placeholder="Họ tên" />
                </Item>
                <Item name="email" style={styleItem}>
                    <InputString size="small" placeholder="Email" />
                </Item>
                <Item name="phone" style={styleItem}>
                    <InputString size="small" placeholder="SĐT" />
                </Item>
                <Item name="password" style={styleItem}>
                    <InputPassword size="small" placeholder="Mật khẩu" />
                </Item>
                <Item name="rePassword" style={styleItem}>
                    <InputPassword
                        size="small"
                        placeholder="Nhập lại mật khẩu"
                    />
                </Item>

                <Row justify="end">
                    <Col>
                        <Link to="/">Đã có tài khoản ?</Link>
                    </Col>
                </Row>
            </Form>
            <div className="auth__button">
                <Row style={{ width: '100%' }} gutter={[8, 8]}>
                    <Col span={24}>
                        <ButtonCustom
                            text="Đăng kí"
                            style={styleButton}
                            onClick={onSubmitForm}
                        />
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default Register;
