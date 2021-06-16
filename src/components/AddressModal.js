import Modal from "antd/lib/modal/Modal"

const AddressModal = ({addresses, isVisible, setVisibility}) => {
    const closeModal = () => {
        setVisibility(false)
    }
    return (
        <Modal title="Addresses" visible={isVisible} onOk={closeModal} onCancel={closeModal}>
            {addresses === undefined ? <p>Enter your address</p> : addresses.map(address => <p>Some content...</p>)}
        </Modal> 
    )
}

export default AddressModal