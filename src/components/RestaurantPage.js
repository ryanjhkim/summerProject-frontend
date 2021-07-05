import CategoryMenu from './CategoryMenu'
import { Col } from 'antd'
import data from '../data/restaurantPageData.json'


const RestaurantPage = () => {

  var categoryList = []
  data.forEach(i => categoryList = categoryList.concat(i.category))
  categoryList = [...new Set(categoryList)]

  return (
    <Col span={14} offset={4}>
      <CategoryMenu categoryList={categoryList} />
    </Col>
  )
}

export default RestaurantPage