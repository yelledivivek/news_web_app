import React, { useEffect } from "react";
import NewsPost from "./NewsPost";
import TopStories from "./TopStories";

function FirstHero() {
  return (
    <>
      <div className="container mx-auto m-2">
        <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-3 grid-flow-row">
          <TopStories />
          
          <div className="sm:col-span-3 md:col-span-1 overflow-auto h-3/4 sm:-mt-28 md:m-0">
            <NewsPost />
          </div>
        </div>
        {/* <h1 className="bg-black h-32 absolute md:top-3/4 sm:-bottom-96 -bottom-20 my-4">gsdyddggdfgdgfdsbuuigigcgudafgduafug</h1> */}
      </div>
    </>
  );
}

export default FirstHero;

{/* <div className="container mx-auto m-2 relative">
        <div className="grid grid-flow-row sm:grid-cols-3 md:grid-cols-4 gap-3 h-3/4 relative">
          <TopStories />
          
          <div className="sm:col-span-3 md:col-span-1 h-3/4 overflow-auto sm:absolute md:relative top-3/4 md:top-0 sm:my-2 md:m-0">
            <NewsPost />
          </div>
        </div>
        <h1 className="bg-black h-32 absolute md:top-3/4 sm:-bottom-96 -bottom-20 my-4">gsdyddggdfgdgfdsbuuigigcgudafgduafug</h1>
      </div> */}