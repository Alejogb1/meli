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
                    <h1 style={{textAlign:"center"}}>
                        {
                            window.innerWidth < 768 ? 
                            "No disponible en dispositivos moviles (<768 px)" 
                            : 
                            "Search for a product"
                        }
                    </h1>
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