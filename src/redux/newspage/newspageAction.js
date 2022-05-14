import axios from "axios"

export const fetchNewsPage = (id) =>  async (dispatch) => {

  dispatch({ type: 'FETCH_NEWSPAGE_REQUST' })
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/articles/${id}`
    )
    dispatch({type: 'FETCH_NEWSPAGE_SUCCESS', payload:response.data})
  } catch (error) {
    dispatch({type:'FETCH_NEWSPAGE_FAILURE', error})
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
