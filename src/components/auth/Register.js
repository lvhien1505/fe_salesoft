import { Link, useNavigate } from 'react-router-dom';
import { Form, Row, Col } from 'antd';
import { InputString, InputPassword } from 'components/ui/input/Input';
import ButtonCustom from 'components/ui/button/Button';
import Layout from './Layout';

const Register = () => {
    const { Item } = Form;
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
    return (
        <Layout title={'Đăng kí'} className="auth__register">
            <Form>
                <Item name="name" style={styleItem}>
                    <InputString size="small" placeholder="Họ tên" />
                </Item>
                <Item name="username" style={styleItem}>
                    <InputString size="small" placeholder="Tài khoản" />
                </Item>
                <Item name="password" style={styleItem}>
                    <InputPassword size="small" placeholder="Mật khẩu" />
                </Item>
                <Item name="rePassword" style={styleItem}>
                    <InputPassword size="small" placeholder="Nhập lại mật khẩu" />
                </Item>
                <Item name="email" style={styleItem}>
                    <InputString size="small" placeholder="Email" />
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
                            onClick={() => navigate('/register')}
                        />
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default Register;
