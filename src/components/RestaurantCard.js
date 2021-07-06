import { Card } from 'antd'

const RestaurantCard = ({ name, distance, price, rating }) => {
    return (
        <Card title={name} hoverable={true}>
            <div>
                {distance}
            </div>
            <div>
                {price}
            </div>
            <div>
                {rating}
            </div>
        </Card>
    )
}

export default RestaurantCard