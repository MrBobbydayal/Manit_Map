






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


