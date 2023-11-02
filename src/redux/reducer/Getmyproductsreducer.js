

const initial = {
    myproducts: [],
    loading: true,
}

const MyProducts = (state = initial, action) => {
    switch (action.type) {
        case "GetMyProducts":
            return {
                ...state,
                myproducts: action.payload,
                loading: false
            }
        case "Get_Errors":
            return {
                loading: true,
                myproducts: action.payload
            }
        default:
            return state;
    }
}

export default MyProducts