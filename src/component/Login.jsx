import React from 'react'
import { useState } from 'react';
import { Navigate,useNavigate,NavLink } from 'react-router-dom'
import MapBG from '/Users/DELL PC/OneDrive/Desktop/MAP/maps/src/assets/MapBG.png'
export default function Login() {
  
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      'username':username,
      'email':email,
      'password':password
    }

    try {
      const res = await fetch("https://backendformanitmap.onrender.com/api/v1/ManitMap/users/login", {
        method: "POST",
        credentials:'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if(res.status==200){
        console.log(res,"response at login");
        navigate('/Manit_Map')
      }
      else if(res.status==404){
        alert('User Does Not Exist')
      }else if(res.status==401){
        alert('Invalid User Credential')
      }else if(res.status==400){
        alert('Email or Username Required')
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };






  return (
    <>
    <div style={{backgroundImage:`url(${MapBG})`}}>
    <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"><NavLink className=' underline' to={'/AboutUs'}>About Us</NavLink>    
    </button>
    <form  onSubmit={handleSubmit}>
    <div className='justify-items-center mt-16 '  style={{backgroundImage: `url(${MapBG})`}}>
        <div className="w-80 rounded-2xl bg-slate-900 self-center">
            <div className="flex flex-col gap-2 p-8">
               <p className="text-center text-3xl text-gray-300 mb-4">Login</p>
               <input className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white" 
               placeholder="Username"   
               value={username}
               onChange={(e)=>setUsername(e.target.value)}/>
               <input className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white" 
               placeholder="Email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}/>
               <input  type='password' className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 text-white" 
               placeholder="Password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               required/>
               <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
               Dont't have an account ???    
               <NavLink className='text-red-500  underline' to={'/SignUp'}>Create an account</NavLink>    
               </label>
             <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Login</button>
            </div>
        </div>
    </div>
    </form>
    </div>
    </>
  )
}






//on app.jsx



// import { useRef, useEffect, useState } from "react";
// import { SearchBox } from "@mapbox/search-js-react";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// const accessToken = "pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w";

// export default function MapWithGeocoder() {
//   const mapContainerRef = useRef();
//   const mapInstanceRef = useRef();
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   useEffect(() => {
//     mapboxgl.accessToken = accessToken;

//     mapInstanceRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current, // container ID
//       center: [-74.5, 40], // starting position [lng, lat]
//       zoom: 9, // starting zoom
//     });

//     mapInstanceRef.current.on("load", () => {
//       setMapLoaded(true);
//     });
//   }, []);

//   return (
//     <>
//       <SearchBox
//         accessToken={accessToken}
//         map={mapInstanceRef.current}
//         mapboxgl={mapboxgl}
//         value={inputValue}
//         onChange={(d) => {
//           setInputValue(d);
//         }}
//         marker
//       />
//       <div id="map-container" ref={mapContainerRef} style={{height:300}}/>
//     </>
//   );
// }


