import React from 'react'
import { Navigate,useNavigate,NavLink } from 'react-router-dom'

import MContour from '../assets/MContour.png'

export default function Contour() {


  return (
    <>
  <img
  src={MContour}
  alt="Contour Map"
  className=" inset-0 w-full h-full object-cover z-[-1]"
/>


  </>
  
  )
}


