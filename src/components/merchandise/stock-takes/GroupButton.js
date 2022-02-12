import { useNavigate } from 'react-router-dom';
import { Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import DropdownSelectCol from 'components/common/manage/DropdownSelectCol';
import { colsStockTakes } from 'constants/columns';

const GroupButton = () => {
    const navigate = useNavigate();
    const redirect = ()=>{
        navigate('/stock-takes/scene')
    }

    return (
        <Space className='btn--group'>
            <ButtonCustom
                text="Kiểm kho"
                icon={<Icon className="ri-add-fill" />}
                onClick={redirect}
            />
            <ButtonCustom
                text="Xuất file"
                icon={<Icon className="ri-file-transfer-fill" />}
            />
            <DropdownSelectCol data={colsStockTakes} width={25}/>
        </Space>
    );
};

export default GroupButton;