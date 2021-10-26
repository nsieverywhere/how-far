import './App.css';
import Landing from 'Pages/Landing/Landing';
import Header from 'Components/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "Pages/Home/homepage"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
              <Landing />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
