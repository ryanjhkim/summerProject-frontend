import { Card, Row, Col } from 'antd'
import { StarFilled } from '@ant-design/icons'
import '../../css/RestaurantPage.css'

const RestaurantCardContainer = ({ restaurants }) => {

    const sortedList = restaurants.sort((a, b) => b.isOpen - a.isOpen)

    const restaurantList = sortedList.map(i => 
        <Col span={11} key={i.restaurantID} style={{paddingTop: '10px'}}>
            <Card className={i.isOpen === 1 ? "opened" : "closed"} 
                  title={i.isOpen === 1 ? i.restaurant : 
                  <div>
                    <div>
                        {i.restaurant}
                    </div>
                    <div style={{fontSize: '13px', color: 'green'}}>
                        Currently Closed
                    </div>
                  </div>} 
                  key={i.restaurantID} 
                  hoverable={true}>
                <div>
                    {i.distance > 1 ? i.distance + 'km' : (i.distance * 1000) + 'm' }
                </div>
                <div>
                    {i.priceRange}
                </div>
                <div>
                    {i.rating} <StarFilled />
                </div>
                <div>
                    {i.open} - {i.close}
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