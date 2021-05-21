import BASE_URL from "../constants/index"
import axios from "axios"
import { useReducer, useEffect} from "react"
import {productReducer,initialState} from "./../reducers/product"
const useProduct = (id) => {
    const [state, dispatch] = useReducer(productReducer, initialState)
    const getProductInfo  = async () => {
       try {
        const {data : product} = await axios.get(`${BASE_URL}/items/${id}`)
        const {data : description} = await axios.get(`${BASE_URL}/items/${id}/description`)
        const information = {...product, ...description}
        dispatch({type: "FETCH_SUCCESS", payload: {information}})
    } catch (error) {
           console.error(error)
           dispatch({type : "FETCH_ERROR"})
       }
    }
    useEffect(() => {   
        getProductInfo(id)
    }, [id])
    return[state]
}
export default useProduct