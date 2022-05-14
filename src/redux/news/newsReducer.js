
const initState = {
 items: [],
 loading: true,
 error: ""
}
const newsReducer = (state = initState, action) => {
 switch (action.type) {
   case 'FETCH_NEWS_REQUEST':
     return {
       ...state,
       loading: true
     }
     case 'FETCH_NEWS_SUCCESS':
       return {
         ...state,
         loading: false,
         items: action.payload,
     }
     case 'FETCH_NEWS_FAILURE':
       return {
         ...state,
         loading: false,
         error: action.error,
       }
   default:
     return state;
 }
}

export default newsReducer
