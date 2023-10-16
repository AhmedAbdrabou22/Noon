const initial = {
    createUSer: [],
    loginUSer: [],
    loading: true,
}

const UserReducer = (state = initial, action) => {
    switch (action.type) {
        case "getAllUsers":
            return {
                ...state,
                createUSer: action.payload,
                loading: false
            }
        case "getLoginUsers":
            return {
                ...state,
                loginUSer: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default UserReducer