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

    mapInstanceRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, // container ID
      
       //style:'mapbox://styles/2211101132/cm937phgq009301qq0mh00y8g',//style for all layer digitiged by me in sattelite mode
      //style:'mapbox://styles/mapbox/light-v11',//for backround not showing
      style:'mapbox://styles/2211101132/cm937phgq009301qq0mh00y8g',//style for all layer digitiged by me in custome mode
      center: [77.406111111,23.21472222], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });
      

    mapInstanceRef.current.on("load", () => {
      setMapLoaded(true);
    });


    mapInstanceRef.current.on("load", () => {
          // Add the directions control
          const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving',
            controls: {
              instructions: true
            }
          });
      
          mapInstanceRef.current.addControl(directions, 'top-left');
          setMapLoaded(true);
        });


        mapInstanceRef.current.on("load", () => {
              const directions = new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                unit: 'metric',
                profile: 'mapbox/driving'
              });
          
              mapInstanceRef.current.addControl(directions, 'top-left');
              setDirectionsControl(directions);
              setMapLoaded(true);
            });
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
      
      <input type="string" placeholder="Origin" className="px-3 py-2 border border-gray-300 rounded-md cursor-text h-9 w-60 "/>
      
      <input type="string" placeholder="Destination" className="px-3 py-2 border border-gray-300 rounded-md cursor-text h-9 w-60"/>

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