import CategoryItems from './CategoryItems'
import '../../css/Category.css'

const CategoryContainer = ({menu, restaurantInfo, addItem}) => {

    const menuList = menu.map(item => 
        <div id={item.category} key={item.category}>
            <div className="category-name">
                {item.category}
            </div>
            <div>
                <CategoryItems menus={item.items} restaurantInfo={restaurantInfo} addItem={addItem}/>
            </div>
        </div>)

    return (
        menuList
    )
}

export default CategoryContainer