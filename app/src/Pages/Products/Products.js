import PropTypes from "prop-types"
import { propTypes } from "react-bootstrap/esm/Image"
import { productsReducer, initialState } from "./../../reducers/products";
import { FETCHING, FETCH_SUCCESS } from "./../../reducers/actions/products";

const Products = ({search}) => { 
    console.log(search)
    return(
        <h1>Productos a traer {search}</h1>
    )
}

Products.propTypes = {
    search: PropTypes.string,
}
export default Products