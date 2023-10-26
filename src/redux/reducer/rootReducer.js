import {combineReducers} from "redux"
import ProductReducer from "./GetAllProductsreducer"
import CategoryReducer from './GetAllCategoryReducer'
import UserReducer from "./Authreducer"
import UpdateDetailsReducer from "./UpdateDetailsReducer"
export default combineReducers({
    ProductReducer : ProductReducer,
    CategoryReducer:CategoryReducer,
    UserReducer:UserReducer,
    UpdateDetailsReducer:UpdateDetailsReducer,
})