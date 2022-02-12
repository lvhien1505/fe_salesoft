import { useNavigate } from 'react-router-dom';
import { Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import DropdownSelectCol from 'components/common/manage/DropdownSelectCol';
import { colsPurchase } from 'constants/columns';

const GroupButton = () => {
    const navigate = useNavigate();
    return (
        <Space className="btn--group">
            <ButtonCustom
                text="Nhập hàng"
                icon={<Icon className="ri-add-fill" />}
                onClick={()=>navigate('/purchase/scene')}
            />
            <ButtonCustom
                text="Xuất file"
                icon={<Icon className="ri-file-transfer-fill" />}
            />
            <DropdownSelectCol data={colsPurchase} width={25}/>
        </Space>
    );
};

export default GroupButton;