import {useState} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./../Pages/Home/index"
import Header from "../Components/Header"
import Products from "./../Pages/Products/index"
import Product from "./../Pages/Product/index"
const Routes = ({handlerSearch, search}) => {
    return (
        <Router>
            <Header handlerSearch={handlerSearch}/> 
            <Switch>
                <Route path="/"exact component={Home}/>
                <Route path="/products">
                    <Products search={search}/>
                </Route>
                <Route path="/product/:id" component={Product}/>
            </Switch>
        </Router>
    )
   
}

export default Routes;