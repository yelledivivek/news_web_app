
const initState = {
 items: [],
 loading: true,
 error: ""
}
const newspageReducer = (state = initState, action) => {
 switch (action.type) {
   case 'FETCH_NEWSPAGE_REQUEST':
     return {
       ...state,
       loading: true
     }
     case 'FETCH_NEWSPAGE_SUCCESS':
       return {
         ...state,
         loading: false,
         items: action.payload,
     }
     case 'FETCH_NEWSPAGE_FAILURE':
       return {
         ...state,
         loading: false,
         error: action.error,
       }
   default:
     return state;
 }
}

export default newspageReducer
