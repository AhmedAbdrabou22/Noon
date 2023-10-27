import baseURL from '../../Api/baseUrl'
const GetGovern = (data) => {
    return async (dispatch) => {
        try {
            let res = await baseURL.get('/api/v1/governorates')
            dispatch({ type: 'getGovernData', payload: res })
        } catch (e) {
            dispatch({ type: 'getGovernData', payload: e.res })
        }
    }
}
export {GetGovern}