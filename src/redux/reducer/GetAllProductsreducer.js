

const initial = {
    product: [],
    loading: true,
}

const ProductReducer = (state = initial, action) => {
    switch (action.type) {
        case "GetAllProduct":
            return {
                ...state,
                product: action.payload,
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