import { Link } from 'react-router-dom';
import React from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';


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
    return (
    <div className="container-fluid">
        <div className="header">
    {/* header component which in the end will then wrap
    all the items that should go into this header.  */}
            <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="home"><Link to='/'>Yame!!</Link></Menu.Item>
                <Menu.Item key="about"><Link to='/about-us'>About Us</Link></Menu.Item>
                <Menu.Item key="signup"><Link to='/sign-up'>Sign Up</Link></Menu.Item>
                <Menu.Item key="login"><Link to='/log-in'>Log In</Link></Menu.Item>
                
                </Menu>
        </div>
    </div>
    );
}
// instead of using <a href="...">, that whenever we click it,
// a new request will be sent to the server. which is redundant.
// So we use Link Component here instead. The Link component can be
// wrapped around our link text and a react-router-dom attaches a click listener
// to the anchor tag, and when you click on it, it will prevent that browser default of 
// sending a request and instead just parse the URL you want to go to,
// change it in the browser URL bar but then not send the request and instead
// load the appropriate component onto the screen just with React and JavaScript.
// So we stay on this already loaded page and and we don't send this extra request.
// Then we can now use in App.js file by importing MainNavigation.js.
// and Add <MainNavigation> statement above the Switch statement.


export default MainNavigation;