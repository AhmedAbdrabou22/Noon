import baseURL from '../../Api/baseUrl'
const GetmyProducts = () => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/users/myproducts' , config)
            dispatch({ type: "GetMyProducts", payload: res.data })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}

export {GetmyProducts}