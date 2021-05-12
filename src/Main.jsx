import React from 'react'
import App from './Components/App'
import Buy_coins from './Components/Buy_coins'
import {Router,Route,Switch} from 'react-router-dom'

const Main=()=>{
    return(
    <>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path ="/buyCoins" component={Buy_coins}/> 
        </Switch>
    </>
    )
};
export default Main;