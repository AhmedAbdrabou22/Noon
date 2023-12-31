import baseURL from '../../Api/baseUrl'
const PostCommenttoProduct = (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    return async (dispatch) => {
        try {
            let res = await baseURL.post('/api/v1/reviews/store',data , config) 
            dispatch({ type: "PostComment", payload: res.data })
            console.log(res.data);
        } catch (e) {
            dispatch({ type: "getErrors", payload: "Error through Loadin Data" })
        }
    }
}
const DelteComment = (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    return async (dispatch) => {
        try {
            let res = await baseURL.delete(`/api/v1/reviews/${data}` , config) 
            dispatch({ type: "DelComment", payload: res })
        } catch (e) {
            dispatch({ type: "getErrors", payload: "Error through Loadin Data" + e })
        }
    }
}

export {PostCommenttoProduct , DelteComment}