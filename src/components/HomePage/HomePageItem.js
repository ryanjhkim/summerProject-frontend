import classes from './HomePageItem.module.css';
import GooglePlaces from '../MapAPI/GooglePlaces';
// import AddressButton from '../Button/AddressButton';

function HomePageItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.address}</p>
                <GooglePlaces /> 
            </div>
                   
        </li>
    );
}

export default HomePageItem;