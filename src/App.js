import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/about"><About/></Route>
      </Switch>
    </Router>
  );
}

export default App;
