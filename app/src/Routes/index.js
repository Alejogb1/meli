import {useState} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "../Components/Header/Header"
import Products from "./../Pages/Products/index"
import Product from "./../Pages/Product/index"
const Routes = ({handlerSearch, search}) => {
    return (
        <Router>
            <Header handlerSearch={handlerSearch}/> 
            <Switch>
                <Route path="/" exact>
                <h1 className="hidden">
                    Busca un producto
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl">
                    (no disponible en mobile)
                </p>
                </Route>               

                <Route path="/products">
                    <Products search={search}/>
                </Route>
                <Route path="/product/:id" component={Product}/>
            </Switch>
        </Router>
    )
   
}

export default Routes;