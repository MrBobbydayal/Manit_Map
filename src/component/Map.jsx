import { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { Navigate,useNavigate,NavLink } from 'react-router-dom'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

import ReactDOM from 'react-dom';
const accessToken = "pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w";

export default function MapWithGeocoder() {
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [directionsControl, setDirectionsControl] = useState(null);



   const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("https://backendformanitmap.onrender.com/api/v1/ManitMap/users/logout", {
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
      const response=fetch("https://backendformanitmap.onrender.com/api/v1/ManitMap/users/username",{
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
      style:'mapbox://styles/2211101132/cm9g0l6et00je01s73cj927g8',//style for manit Layer
      center: [77.40671,23.21212],
      zoom: 14,
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
    <>
    <div className="p-4 space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 space-y-4 lg:space-y-0">
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
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition h-10"
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
  
        <h3 className="text-xl bg-slate-50 px-2 py-1 rounded">🙍🏻‍♂️ {Bob}</h3>
  
        <button
          className="group flex items-center justify-end w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
          onClick={handleLogout}
        >
          <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
            <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
              <path d="M377.9 105.9L500.7 228.7..." />
            </svg>
          </div>
          <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            Logout
          </div>
        </button>
      </div>
  
      <div className="w-full">
        <div
          id="map-container"
          ref={mapContainerRef}
          className="w-full h-[500px] sm:h-[600px] lg:h-[650px] rounded-lg shadow-md"
        />
      </div>
    </div>
  </>
  
  );
}
