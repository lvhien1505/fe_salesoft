import { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import PropTypes from 'prop-types';

const UploadImage = ({ max, getFileList }) => {
    const [fileList, setFileList] = useState([]);

    const dummyRequest = ({ onSuccess }) => {
        setTimeout(() => {
            onSuccess('ok');
        }, 0);
    };

    const onChange = ({ fileList: newFileList }) => {
		getFileList(newFileList);
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    return (
        <ImgCrop rotate>
            <Upload
                action=""
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
                customRequest={dummyRequest}
            >
                {fileList.length < max && '+ Tải ảnh lên '}
            </Upload>
        </ImgCrop>
    );
};

UploadImage.defaultProps = {
    max: 5,
};

UploadImage.propTypes = {
    max: PropTypes.number,
};

export default UploadImage;
