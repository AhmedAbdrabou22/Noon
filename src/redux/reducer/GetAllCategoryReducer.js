

const initial = {
    category: [],
    loading: true,
}

const ProductReducer = (state = initial, action) => {
    switch (action.type) {
        case "GetAllCategory":
            return {
                ...state,
                category: action.payload,
                loading: false
            }
        case "Get_Errors":
            return {
                loading: true,
                product: action.payload
            }
        default:
            return state;
    }
}

export default ProductReducer