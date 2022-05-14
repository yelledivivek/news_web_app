import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchNewsPage } from '../redux/newspage/newspageAction'

function NewsPage() {
 const {id} = useParams()
 const news = useSelector(state => state)
 const dispatch = useDispatch()
 useEffect(() => {
  dispatch(fetchNewsPage(id))
 },[])
  return (
   <div>
      <h1>NEWS</h1>
      {news.newsdetiles.items.title}
      <h1>Description</h1>
      {news.newsdetiles.items.description}
    </div>
  )
}

export default NewsPage