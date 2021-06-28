import { useState } from 'react'
import { Card, Modal, InputNumber } from 'antd'
import { Row, Col } from 'antd'
import '../css/Category.css'

const CategoryItems = ({ menus, addItem }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [item, setItem] = useState([])
    const [qty, setQty] = useState(1)

    const showModal = (item) => {
        setIsModalVisible(true)
        setItem(item)
        console.log(item)
    }

    const handleOk = () => {
        setIsModalVisible(false)
        item.qty = qty
        console.log(item)
        addItem(item)
        setItem([])
    }

    const handleCancel = () => setIsModalVisible(false)

    const onChange = (value) => {
        console.log(value)
        setQty(value)
    }

    const menuList = menus.map(item => 
        <Col className="menu-card" span={11}>
            <Card title={item.name} onClick={() => showModal(item)} hoverable={true}>
                <p>
                    Description
                </p>
                <p>
                    ${item.price}
                </p>
            </Card>
        </Col>)

    return (
        <div>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <InputNumber min={1} defaultValue={1} onChange={onChange}></InputNumber>
            </Modal>
            <Row className="row" justify="space-between">
                {menuList}
            </Row>
        </div>
    )
}

export default CategoryItems