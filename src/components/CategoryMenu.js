import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../css/RestaurantPage.css'

const CategoryMenu = ({ categoryList }) => {

    const categories = categoryList.map(i => 
            <div>
                
            </div>
        )
    
    return (
        <Carousel dots={false} arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
          <div>
              <div class="contentStyle">
                <Button>a</Button>
                <Button>b</Button>
                <Button>c</Button>
                <Button>d</Button>    
              </div>
          </div>
          <div>
            <h3 class="contentStyle">2</h3>
          </div>
        </Carousel>
    )
  }
  
  export default CategoryMenu