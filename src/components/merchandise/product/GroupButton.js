import { useState } from 'react';
import { Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import DropdownSelectCol from 'components/common/manage/DropdownSelectCol';
import BtnActiveModalProduct from '../modals/ModalProduct';
import { colsProduct } from 'constants/columns';

const GroupButton = () => {
    return (
        <Space>
            <BtnActiveModalProduct
                text="Hàng hóa"
                iconClassName="ri-add-line"
            />
            <ButtonCustom
                text="Xuất file"
                icon={<Icon className="ri-file-transfer-fill" />}
            />
            <DropdownSelectCol data={colsProduct} width={25}/>
        </Space>
    );
};

export default GroupButton;
