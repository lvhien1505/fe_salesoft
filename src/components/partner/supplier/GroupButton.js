import { useState } from 'react';
import { Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import DropdownSelectCol from 'components/common/manage/DropdownSelectCol';
import BtnActiveModalSupplier from '../modals/ModalSupplier'
import { colsSupplier } from 'constants/columns';

const GroupButton = () => {
    return (
        <Space className="btn--group">
            <BtnActiveModalSupplier
                text="Nhà cung cấp"
            />
            <ButtonCustom
                text="Xuất file"
                icon={<Icon className="ri-file-transfer-fill" />}
            />
            <DropdownSelectCol data={colsSupplier} width={25}/>
        </Space>
    );
};

export default GroupButton;