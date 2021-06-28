import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Restaurant from "./components/Restaurant";
import 'antd/dist/antd.css';


function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/restaurant"><Restaurant/></Route>
      </Switch>
    </Router>
  );
}

export default App;
