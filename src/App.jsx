import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css'

function App() {
  const mapRef = useRef()
  const mapContainerRef = useRef()

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
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 13,
      center: [77.406111111,23.21472222]
    });

    mapRef.current.on('load', () => {
      mapRef.current.addSource('mapbox-terrain', {
        type: 'vector',
        url: 'mapbox://2211101132.manit-tiles'
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
    });

    return () => mapRef.current.remove();
  }, []);








  return (
    <>
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