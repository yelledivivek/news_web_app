import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchTopStorie } from '../redux/topstories/topstoriesAction'

function usePrevPropValue(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
// let num = [1,2,3,4]

function TopStories(props) {
  const id = props.valu
  const ts = useSelector(state => state.topstories)
  // const oldid = usePrevPropValue(ts)
  const dispatch = useDispatch()
  // const onesUpdate = useCallback(() => {
  //   dispatch(fetchTopStorie(setState(id))) 
  // },[id])
  useEffect(() => {
    dispatch(fetchTopStorie())
  },[])
  // useEffect(() => {
  //   if (oldid === ts) {
  //     dispatch(fetchTopStorie())
  //   }
  // }, [])
  // console.log(id);
  // for ( let i = 1;i < num.length; ++i) {
  //   console.log(+i);
  // }
    
  return ts.loading ? (
    <h2>Loading</h2>
    ) :  ts.error ? (
    <h2>{ts.error.message}</h2>
  ) : ts.items.map(storie => 
    storie.results.map(post => {
      return post.storie_positions == id ? (
        <div key={post.id}>
          <Link to={`NewsPage/${post.id}`} ><p>{post.title}</p></Link>
        </div>
      ) : null
    })
    )
}

export default memo(TopStories)

// (
//   <div>
//     { 
//           ts.items.results.map(post => {
//             return post.storie_positions == id ? (<Link to={`NewsPage/${post.id}`} key={post.id}><p>{post.title}</p></Link>) : null
//           })}
// </div>

// )

