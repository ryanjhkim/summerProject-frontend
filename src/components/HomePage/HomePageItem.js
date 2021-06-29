import classes from './HomePageItem.module.css';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import LoadingButton from '../Button/LoadingButton';

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
            </div>

                <LoadingButton/>
            
        </li>
    );
}

export default HomePageItem;