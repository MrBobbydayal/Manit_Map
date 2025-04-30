import { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { Navigate,useNavigate,NavLink } from 'react-router-dom'

//import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

const accessToken = "pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w";

export default function LULC() {
 
    const mapContainerRef = useRef();
    const mapInstanceRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = accessToken;
   

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      //style:,
      center: [77.40671,23.21212],
      zoom: 14,

});
    mapInstanceRef.current = map;
}, []);

  return (
    <>
        <div className="flex flex-wrap items-center space-x-2 bg-teal-400 rounded-md px-2 py-1">
          <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/Manit_Map">Manit Layer</NavLink>
          </label>
          <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/CustomLayer">Custom Layer</NavLink>
          </label>
          <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/SatteliteLayer">Sattelite Layer</NavLink>
          </label>
        </div>

        <div className="flex flex-wrap items-center space-x-5 bg-teal-400 rounded-md px-2 py-1">
        <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/Contour">Contour+DEM</NavLink>
          </label>
          <label className="text-gray-900 dark:text-gray-100">
            <NavLink className="underline" to="/LULC">Land Use Land Cover</NavLink>
          </label>
          </div>
  
      <div className="w-full">
        <div
          id="map-container"
          ref={mapContainerRef}
          className="w-full h-[500px] sm:h-[600px] lg:h-[650px] rounded-lg shadow-md"
        />
      </div>
    
  </>
  
  );
}
