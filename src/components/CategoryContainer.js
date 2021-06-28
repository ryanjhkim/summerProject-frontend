import CategoryItems from './CategoryItems'
import '../css/Category.css'

const CategoryContainer = ({menu, addItem}) => {

    const menuList = menu.map(item => 
        <div id={item.category}>
            <div className="category-name">
                {item.category}
            </div>
            <div>
                <CategoryItems menus={item.items} addItem={addItem}/>
            </div>
        </div>)

    return (
        menuList
    )
}

export default CategoryContainer