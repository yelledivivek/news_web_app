import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNewsPage } from "../redux/newspage/newspageAction";

function NewsPage() {
  const { id } = useParams();
  const news = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsPage(id));
  }, []);
  var stringToHTML = function (str) {
    var dom = document.createElement("div");
    dom.innerHTML = str;
    return dom;
  };
  return (
    <div className="container mx-auto m-2">
      <div className="grid grid-flow-row grid-cols-3">
        <div className="col-span-2 rounded-md border shadow-md bg-white">
          <h1 className="font-bold text-2xl m-2 underline underline-offset-1">
            {news.newsdetiles.items.title}
          </h1>
          <div className="flex">
            <img
              className="mx-2 bg-cover bg-center rounded-md"
              src={news.newsdetiles.items.image}
            />
            <div>
              <h2 className="font-normal text-base mr-2">
                {news.newsdetiles.items.description}
              </h2>
            </div>
          </div>
          <h2
            className="first-letter:uppercase
  first-letter:text-7xl first-letter:font-bold
  first-letter:mr-3 first-letter:float-left m-2 h-full tracking-wide leading-relaxed text-justify space-y-4"
            dangerouslySetInnerHTML={{ __html: news.newsdetiles.items.storie }}
          ></h2>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
