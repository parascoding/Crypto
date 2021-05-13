import React from 'react'
import App from './Components/App'
import Buy_coins from './Components/Buy_coins'
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <>

            <BrowserRouter>
                <div className="links">
                    <NavLink activeClassName="" to="/Market"> View Market</NavLink>
                    <NavLink activeClassName="" to="/buyCoins"> Make a trade </NavLink>
                </div>
                <Switch>
                    <Route exact path="/Market" component={App} />
                    <Route path="/buyCoins" component={Buy_coins} />
                </Switch>
            </BrowserRouter>

        </>
    )
};
export default Main;