import { Menu, Button, Row, Col, Input } from "antd"
import { MenuOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons'
import { useState } from "react"
import AddressModal from "./AddressModal"
import logo from '../images/logo.png'
import '../css/NavigationBar.css'
import '../css/style.less'

// addresses[0] will be the default address
const GlobalNavigationBar = ({addresses}) => {
    const [activeAddress, setActiveAddress] = useState("Your Address")
    const [isAddressModalVisible, setAddressVisibility] = useState(false)
    const [isSearchClicked, setSearchClicked] = useState(false)

    const showAddressModal = () => setAddressVisibility(true) 

    const handleSearchClick = () => {
        setSearchClicked(!isSearchClicked)
        console.log('Input clicked')
    }

    return (
        <>
                <Row justify="space-between" wrap={false} style={{borderBottom: "1px solid #f0f0f0"}}>
                    <Col>
                        <Menu mode="horizontal" selectable={false}>
                            <Menu.Item ><MenuOutlined /></Menu.Item>
                            <Menu.Item >Deliver to 
                                <Button type="text" 
                                style={{color: "#1890FF"}}
                                onClick={showAddressModal}
                                >
                                    {activeAddress}
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col>
                    <Menu mode="horizontal" selectable={false}>
                        <Menu.Item ><img src={logo} alt="Yame logo" width="45" height="45" /></Menu.Item>
                    </Menu>
                    </Col>
                    <Col>
                        <Menu mode="horizontal" selectable={false}>
                            <div className="menu-item-no-highlight">
                            <Menu.Item>
                                <Input 
                                    prefix={<SearchOutlined/>}
                                    className={isSearchClicked ? "navbar-search-active": "navbar-search"}
                                    placeholder="Enter restaurants" 
                                />
                                <Button 
                                    type="text" 
                                    icon={<SearchOutlined style={{fontSize: 24}}/>} 
                                    className={isSearchClicked ? "navbar-search-btn-hidden" : "navbar-search-btn"}
                                    onClick={handleSearchClick}
                                />
                            </Menu.Item>
                            </div>
                            <Menu.Item>
                                <Button 
                                    type="text" 
                                    icon={<ShoppingCartOutlined style={{fontSize: 24}}/>} 
                                />
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                <AddressModal
                        addresses={addresses} 
                        isVisible={isAddressModalVisible} 
                        setVisibility={setAddressVisibility} 
                />
        </>
    )
}

export default GlobalNavigationBar