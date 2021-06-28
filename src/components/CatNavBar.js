import { Menu } from 'antd'
import { Link } from 'react-scroll'
import '../css/Category.css'

const CatNavBar = (props) => {
    const { categoryList } = props

    const categories = categoryList.map(item => 
            <Menu.Item key={item}>
                <Link activeClass="active" to={item} smooth={true} duration={500} offset={-120} spy={true}>{item}</Link>
            </Menu.Item>
        )
        
    return (
        <Menu defaultSelectedKeys={[]} mode="horizontal">
            {categories}
        </Menu>
    )
}

export default CatNavBar