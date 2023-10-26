

const initial = {
    updateDetails: [],
    loading: true,
}

const UpdateDetailsReducer = (state = initial, action) => {
    switch (action.type) {
        case "updateDetails":
            return {
                ...state,
                updateDetails: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default UpdateDetailsReducer