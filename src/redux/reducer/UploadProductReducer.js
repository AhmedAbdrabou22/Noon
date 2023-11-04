const initial = {
    postProducts: [],
    deleteProduct:[],
    loading: true,
}

const UploadProductRedcuer = (state = initial, action) => {
    switch (action.type) {
        case "storeProduct":
            return {
                ...state,
                postProducts: action.payload,
                loading: false
            }
        case "deleteproduct":
            return {
                ...state,
                deleteProduct: action.payload,
                loading: false
            }
        case "getErrors":
            return {
                loading: true,
                postProducts: action.payload
            }
        default:
            return state;
    }
}

export default UploadProductRedcuer