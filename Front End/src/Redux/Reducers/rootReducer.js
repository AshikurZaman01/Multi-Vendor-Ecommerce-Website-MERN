import { combineReducers } from "redux";
import authSlice from "./../features/authSlice";
import categorySlice from "./../features/categorySlice";

const rootReducer = combineReducers({

    auth: authSlice,
    category: categorySlice

})
export default rootReducer