import React, { useState, useEffect, memo } from 'react'

export const Child = memo(() => {
    const [count, setCount] = useState(0)

    console.log('child render')
    

    useEffect(() => {
        // console.log('child did mount')
        // let interval;
        // interval = setInterval(() => console.log(1), 1000)
        // return () => {
        //     clearInterval(interval)}
    }, [])

    return <>
        <h3>Child component</h3>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>click</button>
    </>
} )