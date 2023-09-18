import axios from 'axios'
import baseURL from '../../Api/baseUrl'
const getAllProducts = () => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/products')
            dispatch({ type: "GetAllProduct", payload: res.data })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}
const getSubCategoryProducts = () => {
    return async (dispatch) => {
        try {
            let res = await axios.get('https://api.lepgo.online/api/v1/products?page=3')
            dispatch({ type: "GetSubCategoryProducts", payload: res.data })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}
const getSomeProducts = () => {
    return async (dispatch) => {
        try {
            let res = await axios.get('https://api.lepgo.online/api/v1/products?page=2')
            dispatch({ type: "getSomeDataProducts", payload: res.data })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}

export {getAllProducts , getSubCategoryProducts ,getSomeProducts}