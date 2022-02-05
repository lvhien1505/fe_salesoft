import { Button, Space } from 'antd';
import Icon from 'components/ui/icon/Icon';
import { InputNumber } from 'components/ui/input/Input';
import './styles/pagnigation.scss';

const Pagnigation = () => {
   return (
      <Space>
         <Button icon={<Icon className="ri-arrow-left-s-line" />} />
         <div className="page-number">
            <InputNumber value={1}/>
         </div>
         <Button icon={<Icon className="ri-arrow-right-s-line" />} />
      </Space>
   );
};

export default Pagnigation;
