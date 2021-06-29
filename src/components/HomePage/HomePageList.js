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

export default HomePageList;