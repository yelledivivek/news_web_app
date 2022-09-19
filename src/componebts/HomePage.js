import React from 'react'
import NewsPost from './NewsPost'
import TopStories from './TopStories'

function HomePage() {
  return (
    <div className='container mx-auto m-2'>
        <div className='grid grid-flow-row grid-rows-1 sm:grid-cols-3 md:grid-cols-4 gap-3 h-auto'>
        <TopStories />
          
          <div className="sm:col-span-3 md:col-span-1">
            <NewsPost />
          </div>

        </div>
    </div>
  )
}

export default HomePage