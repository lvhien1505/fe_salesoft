import { useState } from 'react';
import Icon from 'components/ui/icon/Icon';
import './styles/card.scss';
import { Space } from 'antd';

const CardFilter = ({ title, children, suffix }) => {
    const [visible, setVisible] = useState(true);
    return (
        <div className="card-filter">
            <div className="header">
                <span className="title">{title}</span>
                <Space>
                    {suffix ? <span className="suffix">{suffix}</span> : null}
                    <span className="icon" onClick={() => setVisible(!visible)}>
                        <Icon
                            className={
                                visible
                                    ? 'ri-arrow-down-s-line'
                                    : 'ri-arrow-up-s-line'
                            }
                        />
                    </span>
                </Space>
            </div>
            {visible ? <div className="content">{children}</div> : null}
        </div>
    );
};

export default CardFilter;
