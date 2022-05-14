import axios from "axios"

export const fetchPost = () =>  async (dispatch) => {

  dispatch({ type: "FETCH_POST_REQUST" })
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    )
    dispatch({type: "FETCH_POST_SUCCESS", payload:response.data})
  } catch (error) {
    dispatch({type:"FETCH_POST_FAILURE", error})
  }
  
}


// export const fetchPost = () =>  async (dispatch) => {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//   )

//     dispatch({
//       type: "FETCH_POST",
//       payload: response.data,
//     })
//   }
