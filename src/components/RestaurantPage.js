import { useState } from 'react'
import CategoryMenu from './CategoryMenu'
import { Col } from 'antd'
import data from '../data/restaurantPageData.json'
import RestaurantCard from './RestaurantCard'


const RestaurantPage = () => {
  const [displayList, setDisplayList] = useState(data)
  const [category, setCategory] = useState('All Restaurants')

  const filterByCategory = (category) => {
    setDisplayList(data.filter(i => i.category.includes(category)))
  }

  var categoryList = []
  data.forEach(i => categoryList = categoryList.concat(i.category))
  categoryList = [...new Set(categoryList)]

  return (
    <>
      <Col span={14} offset={4}>
        <CategoryMenu categoryList={categoryList} filterByCategory={filterByCategory} />
      </Col>
      <Col span={14} offset={4}>
        <RestaurantCard name="abcd" distance="0.8" price="$$" rating="4.6" />
      </Col>
      <Col span={14} offset={4}>
        {JSON.stringify(displayList)}
      </Col>
    </>
  )
}

export default RestaurantPage