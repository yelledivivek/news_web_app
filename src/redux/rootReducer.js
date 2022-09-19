import { combineReducers } from "redux";
import loginReducer from "./auth/authReducer";
import categorystorieReducer from "./category/categoryReducer";
// import leatestNewsReducer from "./leatestNews/leatestNewsReducer"

import newsReducer from "./news/newsReducer";
import newspageReducer from "./newspage/newspageReducer";
import topstorieReducer from "./topstories/topstoriesReducer";




const rootReducer = combineReducers({
 news: newsReducer,
 newsdetiles: newspageReducer,
 topstories: topstorieReducer,
 category: categorystorieReducer,
 login: loginReducer,
 
})

export default rootReducer