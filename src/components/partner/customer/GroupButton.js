import { Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import DropdownSelectCol from 'components/common/manage/DropdownSelectCol';
import BtnActiveModalCustomer from '../modals/ModalCustomer'
import { colsCustomer } from 'constants/columns';

const GroupButton = () => {
    return (
        <Space className="btn--group">
            <BtnActiveModalCustomer
                text="Khách hàng"
            />
            <ButtonCustom
                text="Xuất file"
                icon={<Icon className="ri-file-transfer-fill" />}
            />
            <DropdownSelectCol data={colsCustomer} width={25} />
        </Space>
    );
};

export default GroupButton;
