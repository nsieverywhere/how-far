import './App.css';
import Landing from 'Pages/Landing/Landing';
import Header from 'Components/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from "Pages/Profile/profile"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
              <Landing />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
