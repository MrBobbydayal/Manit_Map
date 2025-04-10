import { Geocoder } from "@mapbox/search-js-react";
export function Component() {
  const [value, setValue] = React.useState('');

  const handleChange = (d) => {
    setValue(d);
  };
  return (
    <Geocoder
      options={{
        proximity: {
          lng: -122.431297,
          lat: 37.773972,
        },
      }}
      value={value}
      onChange={handleChange}
      accessToken="pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w"
    />
  );
}





// import { useGeocodingCore } from '@mapbox/search-js-react';
// const geocodingCore = useGeocodingCore({ accessToken: 'pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w' });
// const response = await geocodingCore.forward('1600 pennsylvania ave nw', {
//   limit: 1
// });
// console.log(response);
// // { type: 'FeatureCollection', features: [...], attribution: '...', url: '...' };