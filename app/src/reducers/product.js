import {FETCHING, FETCH_SUCCESS, FETCH_ERROR} from "./actions/products"

export const initialState = {
    fetching: true,
    categories: [],
    products: [],
    error: false
}

export function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING:
            return  {
                ...state,
                fetching: true
            }
        case FETCH_SUCCESS:
            return  {
                fetching: false,
                products: action.payload.data,
                categories: action.payload.categories | [],
                error: false
            }
    
        default:
            break;
    }
}