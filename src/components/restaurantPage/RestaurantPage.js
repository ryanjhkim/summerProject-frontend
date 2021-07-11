import { useState } from 'react'
import CategoryMenu from './CategoryMenu'
import { Row, Col, Button, Dropdown, Slider, Card } from 'antd'
import { DownOutlined, StarFilled } from '@ant-design/icons';
import data from '../../data/RestaurantPageData.json'
import RestaurantCardContainer from './RestaurantCardContainer'


const RestaurantPage = () => {

  const [filteredList, setFilteredList] = useState(data)

  const [catList, setCatList] = useState(data)
  const [category, setCategory] = useState('Restaurants Near You')
  const [count, setCount] = useState(data.length)

  const [rating, setRating] = useState(4.5)
  const [sliderValue, setSliderValue] = useState(4.5)
  const [ratingDPVisible, setRatingDPVisible] = useState(false)
  const [ratingButtonActive, setRatingButtonActive] = useState(false)

  const [priceRange, setPriceRange] = useState(['$', '$$'])
  const [DPPriceValue, setDPPriceValue] = useState(['$', '$$'])
  const [priceDPVisible, setPriceDPVisible] = useState(false)
  const [PriceRangeButtonActive, setPriceRangeButtonActive] = useState(false)

  const filterByCategory = (category) => {
    const list = data.filter(i => i.category.includes(category))
    setCatList(list)
    setCategory(category)
    setFilteredList(list)
    setCount(list.length)

    setRating(4.5)
    setSliderValue(4.5)

    setPriceRange(['$', '$$'])
    setDPPriceValue(['$', '$$'])
    setRatingButtonActive(false)
    setPriceRangeButtonActive(false)
  }

  const filterByRating = () => {
    var a = catList.filter(i => i.rating >= sliderValue)
    if (PriceRangeButtonActive) {
      a = a.filter(i => priceRange.includes(i.priceRange))
    }
    setRatingDPVisible(false)
    setFilteredList(a)
    setRating(sliderValue)
    setCount(a.length)
    setRatingButtonActive(true)
  }

  const handleVisibleChange = (flag) => {
    setRatingDPVisible(flag)
  }

  const handleCancel = () => {
    setSliderValue(rating)
    setRatingDPVisible(false)
  }

  const handleRatingButtonClick = () => {

    var list = catList
    if (PriceRangeButtonActive) {
      list = catList.filter(i => priceRange.includes(i.priceRange))
    }

    if (!ratingButtonActive) {
      const a = list.filter(i => i.rating >= sliderValue)
      setFilteredList(a)
      setRating(sliderValue)
      setCount(a.length)
    } else {
      setFilteredList(list)
      setCount(list.length)
      setRating(4.5)
      setSliderValue(4.5)
    }

    setRatingButtonActive(!ratingButtonActive)
  }

  //pricerange
  const handlePriceRangeVisibleChange = (flag) => {
    setPriceDPVisible(flag)
  }

  const handlePriceButtonClick = () => {

    var list = catList
    if (ratingButtonActive) {
      list = catList.filter(i => i.rating >= rating)
    }

    if (!PriceRangeButtonActive) {
      const a = list.filter(i => priceRange.includes(i.priceRange))
      setFilteredList(a)
      setCount(a.length)
    } else {
      setFilteredList(list)
      setCount(list.length)
      setPriceRange(['$', '$$'])
      setDPPriceValue(['$', '$$'])
    }

    setPriceRangeButtonActive(!PriceRangeButtonActive)
  }

  const handlePriceDPClick = (key) => {
    if (DPPriceValue.includes(key)) {
      const omit = DPPriceValue.filter(i => i !== key)
      setDPPriceValue(omit)
    } else {
      setDPPriceValue([...DPPriceValue, key])
    }
  }

  const filterByPrice = () => {
    var list = catList.filter(i => DPPriceValue.includes(i.priceRange))
    if (ratingButtonActive) {
      list = list.filter(i => i.rating >= rating)
    }
    setFilteredList(list)
    setPriceRange(DPPriceValue)
    setPriceDPVisible(false)
    setCount(list.length)
    setPriceRangeButtonActive(true)
  }

  const handlePriceDPCancel = () => {
    setDPPriceValue(priceRange)
    setPriceDPVisible(false)
  }


  var categoryList = []
  data.forEach(i => categoryList = categoryList.concat(i.category))
  categoryList = [...new Set(categoryList)]

  const marks = {
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5'
  }

  const slider = (
    <Card style={{ width: 300 }} onClick={e => e.stopPropagation()}>
      <Slider defaultValue={sliderValue} value = {sliderValue} marks={marks} min={3} max={5} step={0.5} onChange={(value) => setSliderValue(value)}/>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button onClick={filterByRating}>View Results</Button>
    </Card>
  )

  const displayPriceRange = (
    <div style={{paddingRight: '5px'}}>
      {DPPriceValue.includes('$') && '$ '}
      {DPPriceValue.includes('$$') && '$$ '}
      {DPPriceValue.includes('$$$') && '$$$ '}
      {DPPriceValue.includes('$$$$') && '$$$$ '}
    </div>
  )

  const priceOptions = (
    <Card style={{ width: 300 }} onClick={e => e.stopPropagation()}>
      <Button value='$' type={DPPriceValue.includes('$') ? "primary" : "default"} onClick={() => handlePriceDPClick('$')}>$</Button>
      <Button value='$$' type={DPPriceValue.includes('$$') ? "primary" : "default"} onClick={() => handlePriceDPClick('$$')}>$$</Button>
      <Button value='$$$' type={DPPriceValue.includes('$$$') ? "primary" : "default"} onClick={() => handlePriceDPClick('$$$')}>$$$</Button>
      <Button value='$$$$' type={DPPriceValue.includes('$$$$') ? "primary" : "default"} onClick={() => handlePriceDPClick('$$$$')}>$$$$</Button>
      <div>
        <Button onClick={handlePriceDPCancel}>Cancel</Button>
        <Button onClick={filterByPrice}>View Results</Button>
      </div>
    </Card>
  )

  return (
    <>
      <Row style={{paddingTop: '20px'}}>
        <Col span={14} offset={4}>
          <CategoryMenu categoryList={categoryList} filterByCategory={filterByCategory} />
        </Col>
      </Row>

      <Row style={{paddingTop: '20px'}}>
        <Col offset={4}>
          <Button type={ratingButtonActive ? "primary" : "default"} shape="round" size="large" onClick={handleRatingButtonClick}>
            Over {sliderValue} <StarFilled /> | 
            <Dropdown 
              shape="round"
              overlay={slider} 
              onVisibleChange={handleVisibleChange} 
              visible={ratingDPVisible} 
              onClick={e => e.stopPropagation()}
              placement="topCenter"
              trigger={['click']}>
                <DownOutlined/>
            </Dropdown>
          </Button>
        </Col>

        <Col offset={1}>
          <Button type={PriceRangeButtonActive ? "primary" : "default"} shape="round" size="large" onClick={handlePriceButtonClick} style={{display : 'flex'}}>
                {displayPriceRange}  | 
                <Dropdown 
                  shape="round"
                  overlay={priceOptions} 
                  onVisibleChange={handlePriceRangeVisibleChange} 
                  visible={priceDPVisible} 
                  onClick={e => e.stopPropagation()}
                  placement="topCenter"
                  trigger={['click']}>
                    <DownOutlined className="downoutlined"/>
                </Dropdown>
            </Button>
        </Col>
      </Row>

      <Row style={{paddingTop: '20px'}}>
        <Col span={14} offset={4} style={{fontWeight: 'bold', fontSize: '20px'}}>
          <div>{category}</div>
          <div>{count} stores nearby</div>
        </Col>
      </Row>
      <Row style={{paddingTop: '20px'}}>
        <Col span={14} offset={4}>
          <RestaurantCardContainer restaurants={filteredList} />
        </Col>
      </Row>
    </>
  )
}

export default RestaurantPage