import baseURL from '../../Api/baseUrl'
const getAllCategory = () => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/categories')
            dispatch({ type: "GetAllCategory", payload: res.data })
        } catch (e) {
            dispatch({ type: "Get_Errors", payload: "Error through Loadin Data" + e })
        }
    }
}

export {getAllCategory}