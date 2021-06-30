import HomePageItem from './HomePageItem';
import classes from './HomePageList.module.css';

function HomePageList(props) {
    return (
        <ul className={classes.list}> 
          {props.homePageInputs.map((homePageItem) => (
            <HomePageItem
                key={homePageItem.id}
                id={homePageItem.id}
                image={homePageItem.image}
                title={homePageItem.title}
                address={homePageItem.address}
                description={homePageItem.description}
            />
        ))}

    </ul>
    );
}
//by building this reusable component, this can be used in 
//SignUp and LogIn. There we will have different data sources,
//but the same way of displaying the data. That is what we can make work,
//by adding a separate reusable component.

export default HomePageList;