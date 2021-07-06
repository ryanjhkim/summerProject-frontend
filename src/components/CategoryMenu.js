import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../css/RestaurantPage.css'

const CategoryMenu = ({ categoryList, filterByCategory }) => {


    var list1 = []
    var list2 = []

    if (categoryList.length < 10) {
      list1 = categoryList
    } else {
      list1 = categoryList.slice(0, 10)
      list2 = categoryList.slice(10)
    }

    const categories1 = list1.map(i => 
            <div key={i} style={{paddingLeft: '6px', paddingRight: '6px'}} onClick={() => filterByCategory(i)}>
                {i}
            </div>
        )

    const categories2 = list2.map(i => 
            <div key={i} style={{paddingLeft: '6px', paddingRight: '6px'}} onClick={() => filterByCategory(i)}>
                {i}
            </div>
        )
    
    return (
        <Carousel className="carousel" dots={false} arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
          <div>
            <div class="contentStyle" style={{justifyContent: list1.length == 10 ? 'space-around' : 'flex-start'}}>
                {categories1}
            </div>
          </div>
          {list2.length > 0 &&
          <div>
            <div class="contentStyle" style={{justifyContent: list2.length == 10 ? 'space-around' : 'flex-start'}}>
              {categories2}
            </div>
          </div>} 
        </Carousel>
    )
  }
  
  export default CategoryMenu