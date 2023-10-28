import baseUrl from "../../Api/baseUrl"

const FormData = (formatData) => {
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

export default FormData