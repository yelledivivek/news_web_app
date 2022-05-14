import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPost } from '../redux/user/userAction'

function UserHook() {
  const dispatch = useDispatch()
  const state = useSelector ((state) => state.post)

  
  useEffect(() => {
    dispatch(fetchPost())
  }, [])

  const renderPosts = () => {
    if (state.loading) {
      return <h1>loading</h1>
    }
    return state.items.map(post => <h1>{ post.title}</h1>)
  }
  
  return (
    <div>
      <h1>post title</h1>
      {renderPosts()}
    </div>
  )
}

export default UserHook