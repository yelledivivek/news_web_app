import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTopStorie } from "../redux/topstories/topstoriesAction";

function TopStories() {
  const ts = useSelector((state) => state.topstories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopStorie());
  }, []);

  return ts.loading ? (
    <h2>Loading</h2>
  ) : ts.error ? (
    <h2>{ts.error.message}</h2>
  ) : (
    <>
    <div className="sm:col-span-2 md:col-span-2 grid grid-cols-4 grid-rows-3 gap-2 grid-flow-row h-3/4">
        <div className="col-span-4 row-span-2 flex space-x-2 bg-green-200 bg-opacity-60 rounded-xl p-1 shadow-xl h-full">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 1 ? post.image : null
                  )
                )
                .join("")}
              className="h-full w-full object-cover object-center rounded-md"
            ></img>
            </Link>
            <div className=" w-3/5">
            <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.id : null
                )
              )
              .join("")}
          >
            <h1 className=" text-xl font-semibold text-cyan-900">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.title : null
                )
              )}
            </h1>
          </Link>
          </div>
        </div>
        <div className="col-span-2 w-full h-full relative">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 2 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 2 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 2 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 2 ? post.image : null
                  )
                )
                .join("")}
              className="relative h-full w-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-lg font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 2 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div>
        <div className="col-span-2 h-full relative">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 3 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 3 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 3 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 3 ? post.image : null
                  )
                )
                .join("")}
              className="relative w-full h-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-lg font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 3 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-rows-3 gap-2 h-3/4 -mt-32 sm:m-0">
        <div className="col-span-2 sm:col-span-full relative">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 4 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 4 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 4 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 4 ? post.image : null
                  )
                )
                .join("")}
              className="relative h-full w-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-lg font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 4 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div>
        <div className="col-span-2 sm:col-span-full relative">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 5 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 5 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 5 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 5 ? post.image : null
                  )
                )
                .join("")}
              className="relative h-full w-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-lg font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 5 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div>
        <div className="col-span-full relative">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 6 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 6 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 6 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 6 ? post.image : null
                  )
                )
                .join("")}
              className="relative h-full w-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-lg font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 6 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div>
      </div>
      {/* <div className="sm:col-span-2 md:col-span-2 grid grid-cols-4 grid-rows-3 gap-2 h-3/4 relative">
        <div className="col-span-4 row-span-2 flex space-x-2 bg-white bg-opacity-50 rounded-xl p-1 shadow-xl">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 1 ? post.image : null
                  )
                )
                .join("")}
              className="h-full w-full object-cover object-center rounded-md"
            ></img>
            </Link>
            <div className=" w-3/5">
            <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.id : null
                )
              )
              .join("")}
          >
            <h1 className=" text-xl font-semibold text-cyan-900">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.title : null
                )
              )}
            </h1>
          </Link>
          </div>
        </div>
        <div className="col-span-2 w-full h-full relative">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 2 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 2 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 2 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 2 ? post.image : null
                  )
                )
                .join("")}
              className="relative h-full w-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-lg font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 2 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div>
        <div className="col-span-2 h-full relative">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 3 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 3 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 3 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 3 ? post.image : null
                  )
                )
                .join("")}
              className="relative w-full h-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-lg font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 3 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 sm:grid-rows-3 gap-2 h-3/4">
        <div className="col-span-2 sm:col-span-full relative">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 4 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 4 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 4 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 4 ? post.image : null
                  )
                )
                .join("")}
              className="relative h-full w-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-lg font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 4 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div>
        <div className="col-span-2 sm:col-span-full relative">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 5 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 5 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 5 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 5 ? post.image : null
                  )
                )
                .join("")}
              className="relative h-full w-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-lg font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 5 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div>
        <div className="col-span-full relative">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 6 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 6 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 6 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 6 ? post.image : null
                  )
                )
                .join("")}
              className="relative h-full w-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-lg font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 6 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div>
      </div> */}
      
    </>
  );
}

export default TopStories;


{/* <div className="relative col-span-4 row-span-2">
          <Link
            to={`${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.title_slug : null
                )
              )
              .join("")}.${ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.id : null
                )
              )
              .join("")}`}
            key={ts.items
              .map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.id : null
                )
              )
              .join("")}
          >
            <img
              src={ts.items
                .map((storie) =>
                  storie.results.map((post) =>
                    post.storie_positions == 1 ? post.image : null
                  )
                )
                .join("")}
              className="relative h-full w-full bg-cover rounded-md"
            ></img>
            <h1 className="absolute bottom-0 text-2xl font-bold text-white text-center bg-gradient-to-t from-black rounded-md">
              {ts.items.map((storie) =>
                storie.results.map((post) =>
                  post.storie_positions == 1 ? post.title : null
                )
              )}
            </h1>
          </Link>
        </div> */}