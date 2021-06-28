import { Modal, InputNumber } from 'antd'
import { Button, Divider } from 'antd'
import { useState } from 'react'
import '../css/Cart.css'

const Cart = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [item, setItem] = useState([])
    const [count, setCount] = useState(1)

    const showModal = (item) => {
        setIsModalVisible(true)
        console.log(item)
        setItem(item)
    }

    const handleOk = () => {
        setIsModalVisible(false)
        editItem(item, count)
        setItem([])
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const onChange = (value) => {
        console.log(value)
        setCount(value)
    }

    const {restaurant, items, editItem, removeItem} = props;
    const totalPrice = items.reduce((a, b) => a + b.price * b.qty, 0)
    const itemList = items.map((item, index) => 
        <div className="cart-entry">
            <div className="cart-menu" key={item.id}>
                {item.qty}x {item.name} ${(item.price * item.qty).toFixed(2)}
            </div>
            <div className="cart-options">
                <Button type="text" onClick={() => showModal(item)}>Edit</Button> 
                <Button type="text" onClick={() => removeItem(item)}>Remove</Button>
            </div>
            {(index !== items.length - 1) && <Divider className="divider"/>}
        </div>)

    return (
        <div>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <InputNumber min={1} defaultValue={1} onChange={onChange}></InputNumber>
            </Modal>
            <div>
                <div>
                    {items.length === 0 && <div className="cart-menu">Cart is Empty</div>}
                </div>
                <div>{itemList}</div>
                {items.length !== 0 && (
                    <div className="cart-menu" id="price">Total: ${totalPrice.toFixed(2)}</div>
                )}
            </div>
        </div>
    )
}

export default Cart