import React from 'react'
import Styled from "styled-components";
import Login from "Pages/Login/login";
import Register from "Pages/Register/register"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const Hero = Styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8rem 18rem;
`

function Landing() {
    return (
        <Hero>
            <div>
                <h1>Welcome to How Far!</h1> 
                <p>Tell the world what is going on...</p>   
            </div>        
            <div>
                <Router>
                    <Switch>
                        <Route exact path ="/">
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <Register />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Hero>
    )
}

export default Landing
