// I'll explain how to add navigation functionality to a React web application with Mapbox search functionality.

// ## Adding Navigation to React with Mapbox Search

// For a React web application, you can combine Mapbox's search capabilities with navigation functionality using the Mapbox Directions API. Here's how to implement this:

// ### 1. Set up Search Functionality

// First, you need to implement search functionality using Mapbox Search JS for React:

// ```javascript
// import { SearchBox } from '@mapbox/search-js-react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import { useRef, useEffect, useState } from "react";

// const accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

// function MapWithSearchAndNavigation() {
//   const mapContainerRef = useRef();
//   const mapInstanceRef = useRef();
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [inputValue, setInputValue] = useState("");
  
//   useEffect(() => {
//     mapboxgl.accessToken = accessToken;
  
//     mapInstanceRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-74.5, 40],
//       zoom: 9,
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
//       <div id="map-container" ref={mapContainerRef} style={{ height: 500 }} />
//     </>
//   );
// }
// ```

// This code sets up a basic map with the SearchBox component from [Mapbox Search JS React](https://docs.mapbox.com/mapbox-search-js/guides/search/react/).

// ### 2. Add Navigation Functionality

// To add navigation, you'll need to use the Mapbox Directions control. Add the Mapbox GL Directions plugin to your project:

// ```javascript
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

// // Inside your useEffect, after the map loads:
// useEffect(() => {
//   mapboxgl.accessToken = accessToken;

//   mapInstanceRef.current = new mapboxgl.Map({
//     container: mapContainerRef.current,
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-74.5, 40],
//     zoom: 9,
//   });

//   mapInstanceRef.current.on("load", () => {
//     // Add the directions control
//     const directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//       unit: 'metric',
//       profile: 'mapbox/driving',
//       controls: {
//         instructions: true
//       }
//     });

//     mapInstanceRef.current.addControl(directions, 'top-left');
//     setMapLoaded(true);
//   });
// }, []);
// ```

// ### 3. Connect Search Results to Navigation

// To connect your search results to the navigation functionality, you can modify the SearchBox component to set the destination in the Directions control when a search result is selected:

// ```javascript
// import { SearchBox } from '@mapbox/search-js-react';

// // Inside your component:
// const [directionsControl, setDirectionsControl] = useState(null);

// // In your useEffect:
// useEffect(() => {
//   // ...map initialization code...

//   mapInstanceRef.current.on("load", () => {
//     const directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//       unit: 'metric',
//       profile: 'mapbox/driving'
//     });

//     mapInstanceRef.current.addControl(directions, 'top-left');
//     setDirectionsControl(directions);
//     setMapLoaded(true);
//   });
// }, []);

// // Handle search result selection
// const handleSearchResult = (result) => {
//   if (directionsControl && result.coordinates) {
//     // Set the destination in the directions control
//     directionsControl.setDestination(result.coordinates);
//   }
// };

// // In your JSX:
// <SearchBox
//   accessToken={accessToken}
//   map={mapInstanceRef.current}
//   mapboxgl={mapboxgl}
//   value={inputValue}
//   onChange={setInputValue}
//   onRetrieve={handleSearchResult}
//   marker
// />
// ```

// This approach allows users to search for a location and then automatically set it as the destination for navigation.

// For more detailed implementation, you can refer to the [Mapbox Search JS React documentation](https://docs.mapbox.com/mapbox-search-js/guides/search/react/) and examples of using Mapbox GL JS with React from the [Mapbox documentation](https://docs.mapbox.com/help/dive-deeper/web-apps/#use-mapbox-gl-js-with-react).