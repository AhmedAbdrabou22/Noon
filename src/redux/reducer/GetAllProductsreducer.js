

const initial = {
    product: [],
    SubCategoryproductData: [],
    data:[],
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
        case "GetSubCategoryProducts":
            return {
                ...state,
                SubCategoryproductData: action.payload,
                loading: false
            }
        case "getSomeDataProducts":
            return {
                ...state,
                data: action.payload,
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