import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNews } from "../redux/news/newsAction";

function NewsPost() {
  const newspost = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  // const renderNews = () => {
  //   if (newspost.loading) {
  //     return <h1>loading</h1>
  //   }
  //   return newspost.items.map(post => <h1>{ post.title}</h1>)
  // }
  // console.log(newspost.news.items)

  return newspost.news.loading ? (
    <h2>Loading</h2>
  ) : newspost.news.error ? (
    <h2>{newspost.news.error.message}</h2>
  ) : (
    <div className="flex flex-col gap-2">
      {newspost.news &&
        newspost.news.items &&
        newspost.news.items.results.map((post) => (
          <Link
            className="rounded-md border font-semibold shadow-md shadow-gray-400 p-2 bg-white bg-opacity-50"
            to={`${post.title_slug}.${post.id}`}
            key={post.id}
          >
            <h1>{post.title}</h1>
          </Link>
        ))}
    </div>
  );
}

export default NewsPost;
