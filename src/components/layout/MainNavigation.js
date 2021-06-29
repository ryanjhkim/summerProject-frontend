import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css'
//we named it 'classes' because this will actually be a JavaScript object
//where all the CSS classes you define in './AboutUsList.module.css' this CSS file,
//will be properties of this object.
//You can then use them in your JSX code to attach those classes to your elements,
//and behind the scenes everything will be transformed such that those class names
//are made unique per component.



//이거는 그냥 페이지에 navigation bar만 만드는것
//나머지 contents들이랑은 unrelated하다.
//This component will not be loaded as a page with help of te router,
//but instead we will embed it in the content of our other code just as we did before. 
//Totally unrelated to the router. 
function MainNavigation() {
    return <header className={classes.header}>
{/* header component which in the end will then wrap
all the items that should go into this header.  */}
        <div className={classes.logo}>
            <Link to='/'>Yame</Link></div>
        <nav>
            <ul>
                <li className={classes.AboutUs}>
                    <Link to="/about-us">About Us</Link>
{/* instead of using <a href="...">, that whenever we click it,
a new request will be sent to the server. which is redundant.*/}
{/* So we use Link Component here instead. The Link component can be
wrapped around our link text and a react-router-dom attaches a click listener
to the anchor tag, and when you click on it, it will prevent that browser default of 
sending a request and instead just parse the URL you want to go to,
change it in the browser URL bar but then not send the request and instead
load the appropriate component onto the screen just with React and JavaScript.
So we stay on this already loaded page and and we don't send this extra request. */}
{/* Then we can now use in App.js file by importing MainNavigation.js.
and Add <MainNavigation> statement above the Switch statement.*/}
                </li>
                <li className={classes.signUp}>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
                <li className={classes.logIn}>
                    <Link to="/log-in">Log In</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;