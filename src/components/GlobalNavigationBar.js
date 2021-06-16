import { Menu, Button } from "antd"
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useState } from "react"
import AddressModal from "./AddressModal"
import Search from "antd/lib/input/Search"

// addresses[0] will be the default address
const GlobalNavigationBar = ({addresses}) => {
    const [activeAddress, setActiveAddress] = useState("Your Address")
    const [isAddressModalVisible, setAddressVisibility] = useState(false)

    const showAddressModal = () => setAddressVisibility(true) 

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item><MenuOutlined /></Menu.Item>
                <Menu.Item>Yame</Menu.Item>
                <Menu.Item>Deliver to 
                    <Button type="text" 
                    style={{color: "#1890FF"}}
                    onClick={showAddressModal}
                    >
                        {activeAddress}
                    </Button>
                </Menu.Item>
                <Menu.Item><Search></Search></Menu.Item>
            <Menu.Item><Button icon={<ShoppingCartOutlined />}></Button></Menu.Item>
            </Menu>
            <AddressModal
                addresses={addresses} 
                isVisible={isAddressModalVisible} 
                setVisibility={setAddressVisibility} 
            />
        </div>
    )
}

export default GlobalNavigationBar