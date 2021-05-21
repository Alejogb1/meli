import {FETCHING, FETCH_SUCCESS, FETCH_ERROR} from "./actions/products"

export const initialState = {
    fetching: true,
    products: {},
    product: {},
    description : "",
    error: false
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return  {
                ...initialState,
                fetching: true
            }
        case FETCH_SUCCESS:
            return  {
                fetching: false,
                products: action.payload.data,
                product: action.payload,
                error: false
            }
        case FETCH_ERROR:
            return {
                fetching: false, 
                products: {},
                error: true
            }
        default:
            break;
    }
}
export default {productReducer, initialState}
