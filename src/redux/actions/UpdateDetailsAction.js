import axios from 'axios'
import baseURL from '../../Api/baseUrl'
const Updatedetails = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseURL.put('/api/v1/users/update_details' , data , config)
            dispatch({ type: "updateDetails", payload: res.data })
        } catch (e) {
            dispatch({ type: "updateDetails", payload: "Error through Loadin Data" + e })
        }
    }
}

export default Updatedetails 