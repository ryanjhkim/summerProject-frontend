
// the job of the Route component is to define different paths in the URL we wanna listen to and which component should be loaded.
import { Route, Switch } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import 'antd/dist/antd.css';
import MainNavigation from './components/layout/MainNavigation';
import HomePage from './pages/HomePage';


import { Layout } from 'antd';

const { Header } = Layout;

function App() {
  return (
    
    <Layout className='mainLayout'>
      <Header>
        <MainNavigation />
        <Switch>
          <Route path='/' exact>
            <HomePage /> {/* we are adding a component of AboutUs so that AboutUs component will be loaded by opening URL with /about-us. */}
          </Route>
          <Route path='/about-us'>
            <AboutUs /> {/*we are adding a component of AboutUs so that AboutUs component will be loaded by opening URL with /about-us. */}
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/log-in'>
            <LogIn />
          </Route>
        </Switch>
      </Header>
    </Layout>
    
  );
}

export default App;
