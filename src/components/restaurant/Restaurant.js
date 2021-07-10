import { useState } from 'react'
import { ShoppingCartOutlined, StarFilled } from '@ant-design/icons'
import { Row, Col, Drawer, Badge, Affix, PageHeader } from 'antd';
import Cart from './Cart'
import CategoryContainer from './CategoryContainer'
import CatNavBar from './CatNavBar'
import data from '../../data/data.json'
import '../../css/Restaurant.css'


const Restaurant = () => {
    const [items, setItems] = useState([])
    const [cartVisible, setCartVisible] = useState(false)
    const [restaurantInfo, setRestaurantInfo] = useState({})
    const showCart = () => setCartVisible(true)
    const onClose = () => setCartVisible(false)

    const addItem = (item) => {
        if (item.restaurantID !== restaurantInfo.id) {
            setItems([item])
            setRestaurantInfo({
                id: item.restaurantID,
                name: item.restaurantName,
                address: item.restaurantAddress,
                city: item.restaurantCity
            })
        } else {
            const exist = items.find(i => i.id === item.id)
            if (exist) {
                setItems(items.map(i => i.id === item.id ? {...exist, qty: exist.qty + item.qty } : i))
            } else {
                setItems([...items, item])
            }
        }
    }

    const removeItem = (item) => {
        setItems((items.filter(i => i.id !== item.id)))
        if (items.length === 0) {
            setRestaurantInfo({})
        }
    }

    const editItem = (item, qty) => {
        const exist = items.find(i => i.id === item.id)
        setItems(items.map(i => i.id === item.id ? {...exist, qty: qty} : i))
    }

    const categoryList = []
    for (const i in data.menu) {
        categoryList.push(data.menu[i].category)
    }

    const distance = data.distance > 1 ? (data.distance / 1000).toFixed(1) + 'km' : (data.distance * 1000) + 'm' 

    return (
        <>
            <Affix>
                <Row className="header">
                    <PageHeader>
                        <Badge offset={[10]} count = {items.length}>
                            <ShoppingCartOutlined style={{fontSize: '16px'}} onClick={showCart}/>
                        </Badge>
                    </PageHeader>
                
                </Row>
            </Affix>
            <Row>
                <Col span={14} offset={4}>
                    <div style={{fontSize: '32px', fontWeight: 'bold'}}>
                        {data.restaurant}
                    </div>
                    <div style={{marginBottom: '20px'}}>
                        {data.category} {'\u2022'} {data.rating} <StarFilled /> {'\u2022'} {distance} {'\u2022'} {data.priceRange} 
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={14} offset={4}>
                    <Affix offsetTop={66}>
                        <CatNavBar className="catNavBar" categoryList={categoryList}/>
                    </Affix>
                </Col>
            </Row>
            <Row>
                <Col span={14} offset={4}>
                    <CategoryContainer menu={data.menu} restaurantInfo={{id: data.restaurantID, name: data.restaurant, address: data.address, city: data.city}} addItem={addItem}></CategoryContainer>
                </Col>
                <Col>
                <Drawer
                    title={
                    <div>
                        <div>
                            Your Order
                        </div>
                        {items.length > 0 && 
                            <div>
                                <div style={{marginTop: '3px'}}>
                                    {restaurantInfo.name}
                                </div>
                                <div style={{fontSize: '12px'}}>
                                    {restaurantInfo.address} {restaurantInfo.city}
                                </div>  
                            </div> 
                        }
                    </div>
                    }
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={cartVisible}
                >
                    <Cart items={items} editItem={editItem} removeItem={removeItem} />
                </Drawer>
                </Col>
            </Row>
        </>
    )
}

export default Restaurant