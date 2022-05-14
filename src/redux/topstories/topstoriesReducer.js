
const initState = {
 items: [],
 loading: true,
 error: ""
}
const topstorieReducer = (state = initState, action) => {
 switch (action.type) {
   case 'FETCH_TOPSTORIE_REQUEST':
     return {
       ...state,
       loading: true,
     }
     case 'FETCH_TOPSTORIE_SUCCESS':
       return {
         ...state,
         loading: false,
        //  items: [...state.items, { ...action.payload }],
         items: action.payload,
     }
     case 'FETCH_TOPSTORIE_FAILURE':
       return {
         ...state,
         loading: false,
         error: action.error,
       }
   default:
     return state;
 }
}

export default topstorieReducer
