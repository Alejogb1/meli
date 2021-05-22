import PropTypes from "prop-types"
import { propTypes } from "react-bootstrap/esm/Image"
import { productReducer, initialState } from "./../../reducers/product";
import { FETCHING, FETCH_SUCCESS } from "./../../reducers/actions/products";
import {useEffect, useReducer} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import BASE_URL from "../../constants/index"
import "../../styles.css"
const Products = ({search}) => { 
    
    const [state, dispatch] = useReducer(productReducer, initialState)

    const getProducts = async () => {
        try {
            const {data} = await axios.get(
                `${BASE_URL}/sites/MLA/search?q=${search}&limit=8`
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
        <div className="main">
          <ul>  
            {
                state.products.length ? 
                state.products.map((product, index) => (
                    <li className="item" key={product.id}>
                     
                        <div className="card">
                            <div className="image-wrapper">
                              <Link  to={`/product/${product.id}`}>
                                <img src={product.thumbnail}/>
                              </Link>
                            </div>
                            <div className="content-wrapper">
                                {index === 0 ? (
                                 <div className="best-selling-tag">MÁS VENDIDO</div>
                                ) : <></>}
                                <Link className="item-link" key={product.id} to={`/product/${product.id}`}>
                                        <h2 className="item-title">{product.title}</h2>
                                </Link>
                                <div className="item-price">
                                    <span className="price-symbol">$</span>
                                    <span className="price-tag">{product.price}</span>
                                </div>
                                <div className="item-shipping-tag">
                                    <span>Envío gratis</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                ))
                : <h1>Cargando...</h1>
            }
          </ul>
        </div>

    )
}

Products.propTypes = {
    search: PropTypes.string,
}
export default Products 