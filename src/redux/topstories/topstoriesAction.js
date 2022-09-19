import axios from "axios";

const num = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
let storiedata = [];
export const fetchTopStorie = () => async (dispatch) => {
  dispatch({ type: "FETCH_TOPSTORIE_REQUST" });
  try {
    // for (let i = 1; i <= num.length; ++i) {
    await Promise.all(
      num.map((valu) =>
        axios
          .get(
            `http://127.0.0.1:8000/api/articles/?category=&limit=1&storie_positions=${valu.id}`
          )
          .then((response) => {
            if (storiedata.length > 6) {
              storiedata.pop();
              storiedata.push(response.data);
            } else if (storiedata.length < 6) {
              storiedata.push(response.data);
            }
            // console.log(response.data.results.map((e) => e.storie_positions))
            // console.log(!(storiedata.map((iteam) => iteam.results.filter((p) => p.storie_positions == response.data.results.map((e) => e.storie_positions)))))
            // console.log()
          })
      )
    );
    dispatch({ type: "FETCH_TOPSTORIE_SUCCESS", payload: storiedata });
  } catch (error) {
    dispatch({ type: "FETCH_TOPSTORIE_FAILURE", error });
  }
};


// export const fetchTopStorie = () => async (dispatch) => {
//   dispatch({ type: "FETCH_TOPSTORIE_REQUST" });
//   try {
//     for (let i in num) {
//       await axios.get(`http://127.0.0.1:8000/api/articles/?category=&limit=1&storie_positions=${num[i++]}`).then((response) => {
//                     if (storiedata.length > 3) {
//                       storiedata.pop();
//                       storiedata.push(response.data);
//                     } else if (storiedata.length < 3) {
//                       storiedata.push(response.data);
//                     }
//                   })
//     }
//     dispatch({ type: "FETCH_TOPSTORIE_SUCCESS", payload: storiedata }) 
//   }catch (error) {
//         dispatch({ type: "FETCH_TOPSTORIE_FAILURE", error });
//       }
// }
  