import axios from "axios";

const num = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
let categorydata = [];
export const fetchCategoryStorie = () => async (dispatch) => {
  dispatch({ type: "FETCH_CATEGORY_REQUST" });
  try {
    // for (let i = 1; i <= num.length; ++i) {
    await Promise.all(
      num.map((valu) =>
        axios
          .get(
            `http://127.0.0.1:8000/api/articles/?category=${valu.id}`
          )
          .then((response) => {
            if (categorydata.length > 6) {
              categorydata.pop();
              categorydata.push(response.data);
            } else if (categorydata.length < 6) {
              categorydata.push(response.data);
            }
            // console.log(response.data.results.map((e) => e.storie_positions))
            // console.log(!(categorydata.map((iteam) => iteam.results.filter((p) => p.storie_positions == response.data.results.map((e) => e.storie_positions)))))
            // console.log()
          })
      )
    );
    dispatch({ type: "FETCH_CATEGORY_SUCCESS", payload: categorydata });
  } catch (error) {
    dispatch({ type: "FETCH_CATEGORY_FAILURE", error });
  }
};


// export const fetchTopStorie = () => async (dispatch) => {
//   dispatch({ type: "FETCH_TOPSTORIE_REQUST" });
//   try {
//     for (let i in num) {
//       await axios.get(`http://127.0.0.1:8000/api/articles/?category=&limit=1&storie_positions=${num[i++]}`).then((response) => {
//                     if (categorydata.length > 3) {
//                       categorydata.pop();
//                       categorydata.push(response.data);
//                     } else if (categorydata.length < 3) {
//                       categorydata.push(response.data);
//                     }
//                   })
//     }
//     dispatch({ type: "FETCH_TOPSTORIE_SUCCESS", payload: categorydata }) 
//   }catch (error) {
//         dispatch({ type: "FETCH_TOPSTORIE_FAILURE", error });
//       }
// }
  