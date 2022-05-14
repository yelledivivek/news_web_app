import React, { useEffect } from 'react'
import MainSection from './MainSection'
import NewsPost from './NewsPost'
import TopStories from './TopStories'

function FirstHero() {
  

  return ( 
    <div>
      <div className='container mx-auto m-2'>
  <div className='grid grid-flow-row grid-rows-1 sm:grid-cols-3 md:grid-cols-4 gap-3'>
    <div className='bg-yellow-400 sm:col-span-2 md:col-span-2 grid grid-cols-4 grid-rows-3 gap-2'>
            <div className='relative col-span-4 row-span-2 bg-gray-400 h-80'>
              <TopStories valu = {1} />
      </div>
      <div className='col-span-2 h-40'>
              <TopStories valu = {2} />
      </div>
            <div className=''>
            <TopStories valu = {3}/>
      </div>
    </div>
    <div className='bg-yellow-400 grid grid-cols-4 sm:grid-rows-3 gap-2'>
      <div className='col-span-2 sm:col-span-full'>a</div>
      <div className='col-span-2 sm:col-span-full '>b</div>
      <div className='col-span-full bg-green-400'>c</div>
    </div>
          <div className='sm:col-span-3 md:col-span-1 rounded-lg shadow-2xl'>
            <NewsPost />
    </div>
  </div>     
      </div>
      
    </div>
  )
}

export default FirstHero