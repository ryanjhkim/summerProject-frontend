import { Modal, Typography } from 'antd';
import 'antd/dist/antd.css';
import React, {useState} from 'react';



function Agreement() {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
        I have read the <Typography.Link onClick={showModal}>agreement</Typography.Link>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            </Modal>
        </div>
    );
}

export default Agreement;