import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCake() {
 const numOfCak = useSelector(state => state.cake.numOfCakes)
 const dispatch = useDispatch()
 return (
   <div>
     <h2>Number of cakes - {numOfCak} </h2>
     <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
   </div>
 )
}

export default HooksCake