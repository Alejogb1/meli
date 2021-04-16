import PropTypes from "prop-types"
import { propTypes } from "react-bootstrap/esm/Image"
import { productReducer, initialState } from "./../../reducers/product";
import { FETCHING, FETCH_SUCCESS } from "./../../reducers/actions/products";
import {useEffect, useReducer} from "react"
import axios from "axios"
const Products = ({search}) => { 
    
    const [state, dispatch] = useReducer(productReducer, initialState)

    const getProducts = async () => {
        try {
            const {data} = await axios.get(
                `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=8`
            )
            console.log(data.results)
            dispatch({ type: FETCH_SUCCESS, payload: { data : data.results}})
        } catch (e) {
            console.error(e)
        } 
    }
    useEffect(() => {      
        getProducts() 
    }, [search])
    console.log("STATE ", state.products)
    return(
        <>
           <h1>Productos a traer {search}</h1>
           {
               state.products.length ? 
               state.products.map(product => (
                   <h1>{product.title}</h1>
               ))
               : <h1>Nada</h1>
           }
        </>

    )
}

Products.propTypes = {
    search: PropTypes.string,
}
export default Products 