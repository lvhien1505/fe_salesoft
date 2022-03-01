import { useNavigate } from 'react-router-dom';
import { Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import DropdownSelectCol from 'components/common/manage/DropdownSelectCol';
import { colsReturnsPurchase } from 'constants/columns';

const GroupButton = () => {
    const navigate = useNavigate();
    return (
        <Space className="btn--group">
            <ButtonCustom
                text="Trả hàng nhập"
                icon={<Icon className="ri-add-fill" />}
                onClick={()=>navigate('/returns-purchase/scene')}
            />
            <ButtonCustom
                text="Xuất file"
                icon={<Icon className="ri-file-transfer-fill" />}
            />
            <DropdownSelectCol data={colsReturnsPurchase} width={25}/>
        </Space>
    );
};

export default GroupButton;