import classes from './HomePageItem.module.css';
import GooglePlaces from '../MapAPI/GooglePlaces';
// import AddressButton from '../Button/AddressButton';
// import { Button } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';


function HomePageItem() {
    return (
        <li className={classes.item}>
            <h1>You All Maturely Eat</h1>
            <GooglePlaces /> 
            
            
            <div className={classes.image}>
            <img src="https://qtmd.org/wp-content/uploads/2019/07/howcuttingdo-1024x504.jpg" 
            alt=""/>
        
                
            </div>
            <div className={classes.content}>
                <h3>Random title</h3>
                <address>Random address</address>
                <p>Random address2</p>
                
            </div>
                   
        </li>
    );
}

export default HomePageItem;