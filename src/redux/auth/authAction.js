import axios from "axios";
import axiosInstance from "../../axios";
import jwt_decode from "jwt-decode"

let user = []
export const loginUser = (username, password) => async (dispatch) => {
  dispatch({ type: "FETCH_LOGIN_REQUST" });
  try {
    const response = await axiosInstance
      .post(`token/`, {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        axiosInstance.defaults.headers['Authorization'] =
					'Bearer' + localStorage.getItem('access_token');
        dispatch({
          type: "FETCH_LOGIN_SUCCESS",
          
        });
      });
  } catch (error) {
    dispatch({ type: "FETCH_LOGIN_FAILURE", error });
  }
};

// export const fetchPost = () =>  async (dispatch) => {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//   )

//     dispatch({
//       type: "FETCH_POST",
//       payload: response.data,
//     })
//   }
