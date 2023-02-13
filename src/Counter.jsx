import React from 'react'
import { decrement, increment } from '../redux/actions'
import { useDispatch,useSelector } from 'react-redux'
export default function Counter() {
  const counter = useSelector((state) => state.CounterReducer.count);
// const dispatch = useDispatch();
console.log(counter);
// console.log(state.CounterReducer.count)
// const incr=()=>{
// dispatch(increment(1));
// }
// const decr=()=>{
// dispatch(decrement(1));
// }
  return (
    <div>
        {/* <div>{counter}</div> */}
        {/* <button onClick={()=>incr()}>increment</button>
        <button onClick={()=>decr()}>decrement</button> */}
    </div>
  )
}
