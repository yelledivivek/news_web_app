import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryStorie } from "../redux/category/cetagoryAction";

function Cetagory() {
  const cetagories = useSelector((state) => state.cetagory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryStorie());
  }, []);
  return cetagories.loading ? (
    <h2>Loading</h2>
  ) : cetagories.error ? (
    <h2>{cetagories.error.message}</h2>
  ) : (
    <div>
        {cetagories.items.map((categorydata) =>
                categorydata.results.map((post) =>
                  post.storie_positions == 1 ? post.title : null
                )
              )}
    </div>
  )
}

export default Cetagory;
