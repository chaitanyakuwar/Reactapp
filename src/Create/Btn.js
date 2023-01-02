import React from 'react'
import { Link } from 'react-router-dom'
import Timepass from './Timepass'
const Btn = () => {
  return (
   <>
    <Link to='/timepass' element={<Timepass/>}> click me</Link>
   </>
  )
}

export default Btn