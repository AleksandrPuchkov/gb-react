import React, { useState, useEffect } from 'react'
import { Child } from './Child'

export const Parent = () => {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        console.log('parent did mount')
}, [])

    useEffect(() => { }, [count, toggle])

return <>
    <h3>Parent component</h3>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>click</button>
    <button onClick={() => setToggle(!toggle)}>toggle</button>
    <hr />

    {toggle && <Child count={ count } />}
</>
}