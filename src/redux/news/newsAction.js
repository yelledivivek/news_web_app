import axios from "axios"

export const fetchNews = () =>  async (dispatch) => {

  dispatch({ type: 'FETCH_NEWS_REQUST' })
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/articles/?limit=6&offset=0"
    )
    dispatch({type: 'FETCH_NEWS_SUCCESS', payload:response.data})
  } catch (error) {
    dispatch({type:'FETCH_NEWS_FAILURE', error})
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
