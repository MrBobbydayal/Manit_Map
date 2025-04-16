import { useRef, useEffect, useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

const accessToken = "pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w";

export default function MapWithGeocoder() {
  const mapContainerRef = useRef();
  const mapInstanceRef = useRef();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [directionsControl, setDirectionsControl] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = accessToken;
  
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style:'mapbox://styles/2211101132/cm9g0l6et00je01s73cj927g8',//style for manit Layer
      //style: 'mapbox://styles/2211101132/cm937phgq009301qq0mh00y8g',//style for custome layer
      //style:'mapbox://styles/2211101132/cm8ym66c4003e01r47eos8xom',//style for Sattelite layer
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
  

      map.on("contextmenu", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['newlandmark-dolw4d'] 
        });
  
        console.log("Right click features:", features); 
  
        if (!features.length) return;
  
        const feature = features[0];
        const { id, Name, geometrytype, Category } = feature.properties;
  
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`
           <div>
<div
  class="relative flex justify-center h-[300px] w-[160px] border border-4
   border-black rounded-2xl bg-gray-50"
  style="box-shadow: 5px 5px 2.5px 6px rgb(209, 218, 218)"
>
  <span
    class="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl"
  > 
  <h class='text-xl  text-red-600 mt-3'
  >${Name || 'Unnamed Landmark'}</h>
      <p><strong class='text-lg'>ID:</strong> ${id || 'N/A'}</p>
      <p><strong class='text-lg'>Geometry:</strong> ${geometrytype || 'N/A'}</p>
      <p><strong class='text-lg'>Category:</strong> ${Category || 'N/A'}</p>
  </span>
      

  <span
    class="absolute -right-2 top-14 border border-4 border-black h-7 rounded-md"
  ></span>

  <span
    class="absolute -right-2 bottom-36 border border-4 border-black h-10 rounded-md"
  >
  </span>

   
</div>


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
      
      
<div
  class="flex space-x-2 border-[3px] border-purple-400 rounded-xl select-none h-10"
>
  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input
      type="radio"
      name="radio"
      value="mapbox://styles/2211101132/cm9g0l6et00je01s73cj927g8"
      class="peer hidden"
      //checked=""
    />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Manit Layer</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input 
       type="radio" 
       name="radio" 
       value="mapbox://styles/2211101132/cm937phgq009301qq0mh00y8g" 
       class="peer hidden" />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Custom Layer</span
    >
  </label>

  <label
    class="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer"
  >
    <input 
        type="radio" 
        name="radio" 
        value="" 
        class="peer hidden" />
    <span
      class="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out"
      >Sattelite Layer</span
    >
  </label>
</div>


      </div>
      <div className="place-items-end ">
      <div id="map-container" ref={mapContainerRef} style={{ height:650,width:1350 }} className="items-end" />
      </div>
      </div>
    </>
  );
}







































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