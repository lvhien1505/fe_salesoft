import { notification } from 'antd';

const openNotification = (type, title) => {
    notification[type]({
        message: title,
    });
};

export default openNotification;
