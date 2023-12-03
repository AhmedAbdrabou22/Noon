const initial = {
    posts:[],
    dels:[],
    loading: true,
}

const CommentReducer = (state = initial, action) => {
    switch (action.type) {
        case "PostComment":
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case "DelComment":
            return {
                ...state,
                dels: action.payload,
                loading: false
            }
        case "getErrors":
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        default: 
            return state;
    }
}

export default CommentReducer