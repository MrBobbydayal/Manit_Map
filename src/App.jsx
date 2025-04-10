import { useRef, useEffect ,useState} from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
// // Import Geocoder styles (must come before map load)
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

// // Import the Geocoder control itself
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import './App.css'
import { SearchBox } from '@mapbox/search-js-react';
import MyAddressForm from'./component/AdressAutofill.jsx';
import { Geocoder } from '@mapbox/search-js-react';

function App() {
  const mapRef = useRef()
  const mapContainerRef = useRef()

   const [layer,setlayer]=useState()
  // mapRef.current = new mapboxgl.Map({
  //   container: mapContainerRef.current,
  //   center: [-74.0242, 40.6941],
  //   zoom: 10.12
  // });

  // useEffect(() => {
  //   mapboxgl.accessToken = "pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w"
  //   mapRef.current = new mapboxgl.Map({
  //     container: mapContainerRef.current,
  //   });

  //   return () => {
  //     mapRef.current.remove()
  //   }
  // }, [])


  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
    // style: 'mapbox://styles/2211101132/cm7p4p52i003z01sc6s4e3wvf',
     //style:'mapbox://styles/2211101132/cm7ydisg501nx01s29d7i4jnd',
     style:'mapbox://styles/2211101132/cm937phgq009301qq0mh00y8g',
      zoom: 1.5,
      center: [77.406111111,23.21472222]
    });
    mapRef.current.on('load', () => {
      mapRef.current.addSource('mapbox-terrain', {
        type: 'vector',
         url:'mapbox://2211101132.manit-tiles'
         //2211101132.42jzv3rf'
      });
      mapRef.current.addLayer(
        {
          id: 'terrain-data',
          type: 'line',
          source: 'mapbox-terrain',
          'source-layer': 'manit',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#ff69b4',
            'line-width': 1
          }
        },
        'road-label-simple'
      );


    //   //real check
    //   mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // // Add geocoder (search box)
    // const geocoder = new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl,
    //   marker: true, // Automatically add marker at result
    //   placeholder: 'Search for a location',
    // });

    // mapRef.current.addControl(geocoder, 'top-left');
    });

    return () => mapRef.current.remove();
  }, []);








  return (
    <>
    
    <div className="flex-col justify-self-end w-52 bg-white border-black bg-neutral-500  space-y-4">
    {/* <SearchBox className="border-black bg-slate-500 "/> */}
    <MyAddressForm className=" text-black bg-stone-700 border-red-700"/>
      <div className='bg-slate-100 flex-col space-y-4'>
    <button className='text-slate-200 bg-teal-900 w-32 h-10 rounded-lg' >sattelite</button>
    <button className='text-slate-200 bg-teal-900 w-32 h-10 rounded-lg' >custom</button>
    </div>


    </div>
    <div id='map-container' ref={mapContainerRef}/>
    
    </>
  )
}

export default App



/*

tilesets upload-source 2211101132 manit-source C:\Users\sk332\Downloads\mygeodata\Manit_Campus.geojson --token sk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3eHRrdTkwYjd1MmlzaDl1NjhianR3In0.Yz6FXK7l6Zoc10MJsFv5xQ

mapbox://tileset-source/2211101132/manit-source

tilesets create 2211101132.manit-tiles --recipe C:\Users\sk332\OneDrive\Desktop\maps\manit-recipe.json --name "manit" --token sk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3eHRrdTkwYjd1MmlzaDl1NjhianR3In0.Yz6FXK7l6Zoc10MJsFv5xQ

tilesets publish 2211101132.manit-tiles --token sk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3eHRrdTkwYjd1MmlzaDl1NjhianR3In0.Yz6FXK7l6Zoc10MJsFv5xQ

mapbox.mapbox-terrain-v2


*/