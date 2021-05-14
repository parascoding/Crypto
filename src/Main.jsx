import React from 'react'
import App from './Components/App'
import Buy_coins from './Components/Buy_coins'
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import './Main.css'
import Nav from './Components/Nav'
const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route exact path="/Market" component={App} />
                    <Route path="/buyCoins" component={Buy_coins} />
                </Switch>
            </BrowserRouter>
        </>
    )
};
export default Main;