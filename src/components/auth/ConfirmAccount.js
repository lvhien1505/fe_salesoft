import { Link,useNavigate } from 'react-router-dom';
import { Form, Row, Col } from 'antd';
import { InputString, InputPassword } from 'components/ui/input/Input';
import Icon from 'components/ui/icon/Icon';
import ButtonCustom from 'components/ui/button/Button';
import Layout from './Layout';

const ConfirmAccount = () => {
    const { Item } = Form;
    const navigate = useNavigate();
    const styleItem = {
        marginBottom: '0.75rem',
    };

    const styleButton = {
        borderRadius: '0.25rem',
        width:'100%',
        height:'2.5rem',
        fontWeight:600
    };
    return (
        <Layout title={'Xác thực tài khoản'}>
            <Form>
                <Item name="email" style={styleItem} >
                    <InputString
                        size="small"
                        placeholder="Email"
                        prefix={<Icon className="ri-mail-line" />}
                    />
                </Item>
                <Item name="otp" style={styleItem}>
                    <InputString
                        size="small"
                        placeholder="Mã OTP"
                        prefix={<Icon className="ri-key-line" />}
                    />
                </Item>

                <Row justify='space-between' align='middle'>
                    <Col>
                      <ButtonCustom type="secondary" text="Gửi OTP"/>
                    </Col>
                    <Col >
                        <Link to="/">Về trang đăng nhập ?</Link>
                    </Col>
                </Row>
            </Form>
            <div className='auth__button'>
                <Row style={{ width: '100%' }} >
                    <Col span={24}>
                        <ButtonCustom
                            text="Xác thực"
                            style={styleButton}
                        />
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default ConfirmAccount;

