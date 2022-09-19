import jwt_decode from "jwt-decode"

// const token = localStorage.getItem('access_token') ? JSON.stringify(localStorage.getItem('access_token')) : null
// const token = JSON.stringify(localStorage.getItem('access_token'));
// console.log(token)

// const user = token != null ? null : jwt_decode(token) 
const user = JSON.parse(localStorage.getItem("user"));

const initState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLoggedIn: true,
      };
    case "FETCH_LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
