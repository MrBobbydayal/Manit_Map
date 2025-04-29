import React from 'react'
import Login from './component/Login.jsx'
import SignUp from './component/SignUp.jsx'
import MapWithCustom from './component/CustomMap.jsx'
import MapWithSattelite from './component/SatteliteMap.jsx'
import MapWithGeocoder from './component/Map.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import AboutUs from './component/AboutUs.jsx'
import Contour from './component/Contoour.jsx'

export const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/SignUp",
      element:<SignUp />
    },
    {
      path:"/Manit_Map",
      element:<MapWithGeocoder/>
    },
    {
      path:"/AboutUs",
      element:<AboutUs/>
    },
    {
      path:"/CustomLayer",
      element:<MapWithCustom/>
    },
    {
      path:"/SatteliteLayer",
      element:<MapWithSattelite/>
    },
    {
      path:"/Contour",
      element:<Contour/>
    }
  ])
    return (
      <>
      <RouterProvider router={router}/>
      </>
    )
  }

  export default App






































//For showing Map with adding layer


// import { useRef, useEffect ,useState} from 'react'
// import mapboxgl from 'mapbox-gl'
// import 'mapbox-gl/dist/mapbox-gl.css';
// import './App.css';
// import MyAddressForm from'./component/AdressAutofill.jsx';


// function App() {
//   const mapRef = useRef()
//   const mapContainerRef = useRef()



//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w';

//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style:'mapbox://styles/mapbox/light-v11',//for backround not showing
//      //style:'mapbox://styles/2211101132/cm7ydisg501nx01s29d7i4jnd',//with boundary layer but in specific manner
//      //style:'mapbox://styles/2211101132/cm937phgq009301qq0mh00y8g',//style for all layer digitiged by me
//       zoom: 13,
//       center: [77.406111111,23.21472222]
//     });
//     mapRef.current.on('load', () => {
//       mapRef.current.addSource('mapbox-terrain', {
//         type: 'vector',
//          url:'mapbox://2211101132.manit-tiles'
         
//       });
//       mapRef.current.addLayer(
//         {
//           id: 'terrain-data',
//           type: 'line',
//           source: 'mapbox-terrain',
//           'source-layer': 'manit',
//           layout: {
//             'line-join': 'round',
//             'line-cap': 'round'
//           },
//           paint: {
//             'line-color': '#ff69b4',
//             'line-width': 1
//           }
//         },
//         'road-label-simple'
//       );
//         });

//     return () => mapRef.current.remove();
//   }, []);








//   return (
//     <>
    
//     <div className="flex-col justify-self-end w-52 bg-white border-black bg-neutral-500  space-y-4">
//     <MyAddressForm className=" text-black bg-stone-700 border-red-700"/>
//       <div className='bg-slate-100 flex-col space-y-4'>
//     <button className='text-slate-200 bg-teal-900 w-32 h-10 rounded-lg' >sattelite</button>
//     <button className='text-slate-200 bg-teal-900 w-32 h-10 rounded-lg' >custom</button>
//     </div>


//     </div>
//     <div id='map-container' ref={mapContainerRef}/>
    
//     </>
//   )
// }

// export default App



/*

tilesets upload-source 2211101132 manit-source C:\Users\sk332\Downloads\mygeodata\Manit_Campus.geojson --token sk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3eHRrdTkwYjd1MmlzaDl1NjhianR3In0.Yz6FXK7l6Zoc10MJsFv5xQ

mapbox://tileset-source/2211101132/manit-source

tilesets create 2211101132.manit-tiles --recipe C:\Users\sk332\OneDrive\Desktop\maps\manit-recipe.json --name "manit" --token sk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3eHRrdTkwYjd1MmlzaDl1NjhianR3In0.Yz6FXK7l6Zoc10MJsFv5xQ

tilesets publish 2211101132.manit-tiles --token sk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3eHRrdTkwYjd1MmlzaDl1NjhianR3In0.Yz6FXK7l6Zoc10MJsFv5xQ

mapbox.mapbox-terrain-v2


*/



//For Only showing Glob 

// useEffect(() => {
//   mapboxgl.accessToken = "pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w"
// mapRef.current = new mapboxgl.Map({
//    container: mapContainerRef.current,
//    center: [-74.0242, 40.6941],
//    zoom: 10.12
//  });

//   return () => {
//     mapRef.current.remove()
//   }
// }, []);





// /For GeoCoding
// // Import Geocoder styles (must come before map load)
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

// // Import the Geocoder control itself
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
//   //real check
//       mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

//     // Add geocoder (search box)
//     const geocoder = new MapboxGeocoder({
//       accessToken: mapboxgl.accessToken,
//       mapboxgl: mapboxgl,
//       marker: true, // Automatically add marker at result
//       placeholder: 'Search for a location',
//     });

//     mapRef.current.addControl(geocoder, 'top-left');