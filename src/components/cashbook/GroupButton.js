import { useState } from 'react';
import { Space } from 'antd';
import ButtonCustom from 'components/ui/button/Button';
import Icon from 'components/ui/icon/Icon';
import DropdownSelectCol from 'components/common/manage/DropdownSelectCol';
import BtnActiveModalCashIn from './modals/ModalCashIn';
import BtnActiveModalCashOut from './modals/ModalCashOut';
import { colsCashBook } from 'constants/columns';

const GroupButton = () => {
    return (
        <Space className="btn--group">
            <BtnActiveModalCashIn
                text="Lập phiếu thu"
                iconClassName="ri-file-text-fill"
            />
            <BtnActiveModalCashOut
                text="Lập phiếu chi"
                iconClassName="ri-file-damage-fill"
            />
            <ButtonCustom
                text="Xuất file"
                icon={<Icon className="ri-file-transfer-fill" />}
            />
            <DropdownSelectCol data={colsCashBook} width={25} />
        </Space>
    );
};

export default GroupButton;
