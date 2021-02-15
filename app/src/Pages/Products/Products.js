import PropTypes from "prop-types"
import { propTypes } from "react-bootstrap/esm/Image"
import { productsReducer, initialState } from "./../../reducers/product";
import { FETCHING, FETCH_SUCCESS } from "./../../reducers/actions/products";
import {useEffect, useReducer} from "react"
import axios from "axios"
const Products = ({search}) => { 
    
    const [state, dispatch] = useReducer(productsReducer, initialState)

    const getProducts = async () => {
        try {
            const {data} = await axios.get(
                `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=8`
            )
        } catch (e) {
            console.error(e)
        } 
    }
    useEffect(() => {      
        getProducts() 
    }, [search])
    return(
        <h1>Productos a traer {search}</h1>
    )
}

Products.propTypes = {
    search: PropTypes.string,
}
export default Products 