import { useState } from 'react'
import { Row, Col, Card, Modal, InputNumber } from 'antd'
import '../css/Category.css'

const CategoryItems = ({ menus, restaurantInfo, addItem }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [item, setItem] = useState([])
    const [qty, setQty] = useState(1)

    const showModal = (item) => {
        setIsModalVisible(true)
        setItem(item)
    }

    const handleOk = () => {
        setIsModalVisible(false)
        item.qty = qty
        item.restaurantID = restaurantInfo.id
        item.restaurantName = restaurantInfo.name
        item.restaurantAddress = restaurantInfo.address
        item.restaurantCity = restaurantInfo.city
        addItem(item)
        setItem([])
    }

    const handleCancel = () => setIsModalVisible(false)

    const onChange = (value) => {
        setQty(value)
    }

    const menuList = menus.map(item => 
        <Col className="menu-card" span={11} key={item.id}>
            <Card title={item.name} key={item.id} onClick={() => showModal(item)} hoverable={true}>
                <p>
                    {item.description}
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