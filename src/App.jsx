import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PlayGround from './Pages/PlayGround/PlayGround';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/playground">
            <PlayGround></PlayGround>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
