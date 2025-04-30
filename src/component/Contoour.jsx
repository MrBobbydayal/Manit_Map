import React from 'react'
import { Navigate,useNavigate,NavLink } from 'react-router-dom'
import NewC from '../assets/NewC.png'

export default function Contour() {


  return (
    <>
    <div className="flex flex-wrap items-center space-x-10 bg-teal-400 rounded-md px-2 py-1">
          <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/Manit_Map">MANIT Layer</NavLink>
          </label>
          <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/CustomLayer">Custom Layer</NavLink>
          </label>
          <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/SatteliteLayer">Sattelite Layer</NavLink>
          </label>
          <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/Contour">Contour+DEM</NavLink>
          </label>
          <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/LULC">Land Use Land Cover</NavLink>
          </label>
        </div>

    <h1 className='flex-wrap text-center text-6xl underline '> Elevation Variation In MANIT</h1>
    <h3 className='flex-wrap text-center text-3xl'>(5m Interval in each Contour Line)</h3>
  <img
  src={NewC}
  alt="Contour Map"
  className=" h-svh ml-64 object-cover z-[-1]"
/>


  </>
  
  )
}


