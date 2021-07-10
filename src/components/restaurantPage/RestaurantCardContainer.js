import { Card, Row, Col } from 'antd'
import { StarFilled } from '@ant-design/icons'

const RestaurantCardContainer = ({ restaurants }) => {

    const restaurantList = restaurants.map(i => 
        <Col span={11} key={i.restaurantID} style={{paddingTop: '10px'}}>
            <Card title={i.restaurant} key={i.restaurantID} hoverable={true}>
                <div>
                    {i.distance > 1 ? i.distance + 'km' : (i.distance * 1000) + 'm' }
                </div>
                <div>
                    {i.priceRange}
                </div>
                <div>
                    {i.rating} <StarFilled />
                </div>
            </Card>
        </Col>
        )

    return (
        <Row justify="space-between">
            {restaurantList}
        </Row>
    )
}

export default RestaurantCardContainer