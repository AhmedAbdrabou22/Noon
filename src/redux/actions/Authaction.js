import baseURL from '../../Api/baseUrl'
const createNewUsers = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            let res = await baseURL.post('/api/v1/users/register', data, config)
            dispatch({ type: 'getAllUsers', payload: res })
        } catch (e) {
            dispatch({ type: 'getAllUsers', payload: e.res })
        }
    }
}

export {createNewUsers}