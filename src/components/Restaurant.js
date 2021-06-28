import Cart from './Cart'
import CategoryContainer from './CategoryContainer'
import CatNavBar from './CatNavBar'
import { useState } from 'react'
import { ShoppingCartOutlined, StarFilled } from '@ant-design/icons'
import { Row, Col, Drawer, Badge, Affix } from 'antd';
import { PageHeader } from 'antd';
import data from './data.json'
import '../css/Restaurant.css'


const Restaurant = () => {
    const [items, setItems] = useState([])
    const [cartVisible, setCartVisible] = useState(false)
    const showCart = () => {
        setCartVisible(true);
    };
    const onClose = () => {
        setCartVisible(false);
    };

    const addItem = (item) => {
        console.log(item)
        const exist = items.find(i => i.id === item.id)
        if (exist) {
            setItems(items.map(i => i.id === item.id ? {...exist, qty: exist.qty + item.qty } : i))
        } else {
            setItems([...items, item])
        }
    }

    const removeItem = (item) => {
        setItems((items.filter(i => i.id !== item.id)))
    }

    const editItem = (item, qty) => {
        console.log(qty)
        const exist = items.find(i => i.id === item.id)
        setItems(items.map(i => i.id === item.id ? {...exist, qty: qty} : i))
    }

    const categoryList = []
    console.log(data.menu)
    for (const i in data.menu) {
        console.log(data.menu[i])
        categoryList.push(data.menu[i].category)
    }

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
            <Col span={12} offset={6}>
                <div style={{fontSize: '32px', fontWeight: 'bold'}}>
                    {data.restaurant}
                </div>
                <div style={{marginBottom: '20px'}}>
                    {data.rating} <StarFilled /> {data.priceRange}
                </div>
                
            </Col>
        </Row>
        <Row>
            <Col span={12} offset={6}>
                <Affix offsetTop={66}>
                    <CatNavBar className="catNavBar" categoryList={categoryList}/>
                </Affix>
            </Col>
        </Row>
        <Row>
            <Col span={12} offset={6}>
                <CategoryContainer menu={data.menu} addItem={addItem}></CategoryContainer>
            </Col>
            <Col>
            <Drawer
                title={
                <div>
                    <div>
                        Your Order
                    </div>
                    <div>
                        {data.restaurant}
                    </div>
                </div>
                }
                placement="right"
                closable={false}
                onClose={onClose}
                visible={cartVisible}
            >
                <Cart restaurant={data.restaurant} items={items} editItem={editItem} removeItem={removeItem} />
            </Drawer>
            </Col>
        </Row>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        <div>
            Hello world!
        </div>
        </>
    )
}

export default Restaurant