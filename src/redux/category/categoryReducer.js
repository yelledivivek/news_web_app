
const initState = {
    items: [],
    loading: true,
    error: ""
   }
   const categorystorieReducer = (state = initState, action) => {
    switch (action.type) {
      case 'FETCH_CATEGORY_REQUEST':
        return {
          ...state,
          loading: true,
        }
        case 'FETCH_CATEGORY_SUCCESS':
          return {
            ...state,
            loading: false,
           //  items: [...state.items, { ...action.payload }],
            items: action.payload,
        }
        case 'FETCH_CATEGORY_FAILURE':
          return {
            ...state,
            loading: false,
            error: action.error,
          }
      default:
        return state;
    }
   }
   
   export default categorystorieReducer
   