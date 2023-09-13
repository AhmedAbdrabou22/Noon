import {combineReducers} from "redux"
import ProductReducer from "./GetAllProductsreducer"
import CategoryReducer from './GetAllCategoryReducer'
export default combineReducers({
    ProductReducer : ProductReducer,
    CategoryReducer:CategoryReducer,
})