import { combineReducers } from "redux";
// import leatestNewsReducer from "./leatestNews/leatestNewsReducer"
import cakeReducer from './cake/cakeReducer'
import newsReducer from "./news/newsReducer";
import newspageReducer from "./newspage/newspageReducer";
import topstorieReducer from "./topstories/topstoriesReducer";
import postReducer from "./user/userReducer";



const rootReducer = combineReducers({
 news: newsReducer,
 newsdetiles: newspageReducer,
 topstories: topstorieReducer,
 post: postReducer,
 cake: cakeReducer,

})

export default rootReducer