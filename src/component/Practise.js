import React, { useState } from 'react'

const Practise = () => {
    const [count, setcount]=useState(0);

    const hello=()=>{
      setcount(count+1);
    }
  return (
    <>
        counting a some number {count}.
        <button onClick={hello}>click me</button>
    </>
  )
}

export default Practise