import {combineReducers} from "redux"
import ProductReducer from "./GetAllProductsreducer"
import CategoryReducer from './GetAllCategoryReducer'
import UserReducer from "./Authreducer"
import UpdateDetailsReducer from "./UpdateDetailsReducer"
import GetGoverReducer from "./GetGoverReducer"
import UploadProductRedcuer from "./UploadProductReducer"
import MyProducts from "./Getmyproductsreducer"

export default combineReducers({
    ProductReducer : ProductReducer,
    CategoryReducer:CategoryReducer,
    UserReducer:UserReducer,
    UpdateDetailsReducer:UpdateDetailsReducer,
    GetGoverReducer:GetGoverReducer,
    UploadProductRedcuer:UploadProductRedcuer,
    MyProducts:MyProducts,
})