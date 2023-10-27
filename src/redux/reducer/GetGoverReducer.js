const initial = {
    getGovern: [],
    loading: true,
}

const GetGoverReducer = (state = initial, action) => {
    switch (action.type) {
        case "getGovernData":
            return {
                ...state,
                getGovern: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default GetGoverReducer