import baseUrl from "../../Api/baseUrl"

const StoreProduct = (formatData) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseUrl.post('/api/v1/products/store' ,formatData , config)
            dispatch({type:"storeProduct" , payload:res})
        } catch (e){
            dispatch({type:"getErrors" , payload:e.res})
        }
    }
}
const DeleteProduct = (id) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseUrl.delete(`/api/v1/products/${id}` , config)
            dispatch({type:"deleteproduct" , payload:res})
        } catch (e){
            dispatch({type:"deleteproduct" , payload:e.res})
        }
    }
}

export {DeleteProduct , StoreProduct}