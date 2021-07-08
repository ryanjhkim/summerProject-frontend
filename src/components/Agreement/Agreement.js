import { Modal, Typography, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import React, {useState} from 'react';



function Agreement({check, handleCheck}) {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        handleCheck(true);
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        handleCheck(false);
        setIsModalVisible(false);
    };

    return (
        <div>
            <Row>
                <Col offset={0}>
                I have read the <Typography.Link onClick={showModal}>agreement</Typography.Link>
                </Col>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            </Modal>
            </Row>
        </div>
    );
}

export default Agreement;