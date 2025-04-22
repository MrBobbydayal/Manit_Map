import { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { Navigate,useNavigate,NavLink } from 'react-router-dom'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

import ReactDOM from 'react-dom';
const accessToken = "pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w";

export default function MapWithSattelite() {
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [directionsControl, setDirectionsControl] = useState(null);



   const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/ManitMap/users/logout", {
        method: "POST",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
       
      });
      if(res.status==200){
        console.log(res,"logout succesfully");
        navigate('/')
      }else{
        console.log("failed to logout");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };


  const [Bob,SetBob]=useState([]);
    useEffect ( ()=>{
      const response=fetch("http://localhost:8000/api/v1/ManitMap/users/username",{
        method:'GET',
        credentials:'include'
      }).then(res => res.json())
      .then((response)=>SetBob(response.data[0]))
      .catch(err => err)
    console.log("bobby->",Bob);
    },[])



  useEffect(() => {
    mapboxgl.accessToken = accessToken;
  
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style:'mapbox://styles/2211101132/cm8ym66c4003e01r47eos8xom',//style for Sattelite layer
      center: [77.406111111, 23.21472222],
      zoom: 13,
    });
  
    map.on("load", () => {
      setMapLoaded(true);
      map.dragRotate.enable();
  map.touchZoomRotate.enableRotation();
  
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving',
      });
  
      map.addControl(directions, 'top-left');
      setDirectionsControl(directions);
  
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      
      let userMarker = null;

      if (navigator.geolocation) {
        const watchId = navigator.geolocation.watchPosition(
          (position) => {
            const lng = position.coords.longitude;
            const lat = position.coords.latitude;
      
            console.log("User Location:", lng, lat);
      
            if (!userMarker) {
              userMarker = new mapboxgl.Marker({ color: 'blue' })
                .setLngLat([lng, lat])
                .addTo(map);
            } else {
              userMarker.setLngLat([lng, lat]);
            }
      
            // Save current location to the map instance for later use
            map.currentUserLocation = [lng, lat];
          },
          (error) => {
            console.error("Error watching location:", error);
          },
          {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 10000
          }
        );
      
        // Optional: stop tracking when component unmounts
        // useEffect's return statement below handles this
        // return () => navigator.geolocation.clearWatch(watchId);
      } else {
        alert("Geolocation not supported in this browser.");
      }
      


      map.on("contextmenu", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['manitlanddatamark-3rdbdl'] 
        });
  
        console.log("Right click features:", features); 
  
        if (!features.length) return;
  
        const feature = features[0];
        const { Image,Name,Area,Warden,Contact,StrengthF,StrengthS,NoLabs,NoCourses } = feature.properties;
  
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`
           <div>
      <img src='${Image}'  alt='Image' />
      <h3 class='text-xl text-red-700 text-center'>${Name || 'Unnamed Landmark'}</h3>
      <p><strong>Area:-</strong> ${Area || 'N/A'} sqm</p>
      <p><strong>Dean/HOD/Warden:-</strong> ${Warden || 'N/A'}</p>
      <p><strong>Contact:-</strong> ${Contact|| 'N/A'}</p>
      <p><strong>Strength of Faculty:-</strong> ${StrengthF || 'Unknown'}</p>
      <p><strong>Strength Of students:-</strong> ${StrengthS || 'N/A'}</p>
      <p><strong>No. of Labs:-</strong> ${NoLabs|| 'N/A'}</p>
      <p><strong>No. of Courses Avail:-</strong> ${NoCourses || 'Unknown'}</p>

    </div>
          `)
          .addTo(map);
      });
    });
     
    
    mapInstanceRef.current = map;
  }, []);
  
    





  return (
    <><div className="">
    <div className=" flex-row inline-flex space-x-4">
    <SearchBox
      accessToken={accessToken}
      map={mapInstanceRef.current}
      mapboxgl={mapboxgl}
      value={inputValue}
      onChange={(d) => {
        setInputValue(d);
      }}
      marker
    />

<button
  className=" px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition h-10"
  onClick={() => {
    const map = mapInstanceRef.current;
    if (map?.currentUserLocation && directionsControl) {
      directionsControl.setOrigin(map.currentUserLocation);
    } else {
      alert("Current location not available yet.");
    }
  }}
>
  Navigate from My Current Location
</button>


<div className="flex space-x-4 bg-teal-400 rounded-md h-10" >
          <div className="flex items-center space-x-2">
            <label
              htmlFor="option1"
              className={`text-gray-900 dark:text-gray-100 `}
            >
            <NavLink className=' underline' to={'/Manit_Map'}>Manit Layer</NavLink>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label
              htmlFor="option2"
              className={`text-gray-900 dark:text-gray-100 `}
            >
             <NavLink className=' underline' to={'/CustomLayer'}>Custom Layer</NavLink>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <label
              htmlFor="option3"
              className={`text-gray-900 dark:text-gray-100 `}
            >
             <NavLink className=' underline' to={'/SatteliteLayer'}>Sattelite Layer</NavLink>
            </label>
          </div>
        </div>





<h3 className="mt-2 text-xl bg-slate-50">🙍🏻‍♂️ {Bob}</h3>
<button
  class="group flex items-center  justify-end w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
  onClick={handleLogout}
>
  <div
    class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
  >
    <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
      <path
        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
      ></path>
    </svg>
  </div>
  <div
    class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
  >
    Logout
  </div>
</button>



    </div>
    <div className="place-items-end ">
    <div id="map-container" ref={mapContainerRef} style={{ height:650,width:1350 }} className="items-end" />
    </div>
    </div>
  </>
  );
}
