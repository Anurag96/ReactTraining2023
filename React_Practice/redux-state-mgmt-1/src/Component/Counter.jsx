import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './numberSlice'

function Counter() {
    const count = useSelector((state) => state.numberso.number)
    const loader = useSelector((state) => state.loadingo)
    const dispatch = useDispatch()
    // const [loader, setLoader] = useState(false)
    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                {<p>{count}</p>}
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <br />
            {<p>{loader}</p>}
            {
                loader && (
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                )
            }
            {/* <button onClick={() => dispatch(loading())}>Show</button> */}
        </div>
    )
}

export default Counter
