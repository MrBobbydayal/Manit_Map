import { useRef, useEffect, useState } from "react";

import { Navigate,useNavigate,NavLink } from 'react-router-dom'
import LULCI from '../assets/LULCI.jpg'

export default function LULC() {

  return (
    <>
        <div className="flex flex-wrap items-center space-x-10 bg-teal-400 rounded-md px-2 py-1">
          <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/Manit_Map">Manit Layer</NavLink>
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

        
            <img
            src={LULCI}
            alt="Contour Map"
            className=" inset-0 h-svh ml-72  object-cover z-[-1]"
          />
  </>
  
  );
}
