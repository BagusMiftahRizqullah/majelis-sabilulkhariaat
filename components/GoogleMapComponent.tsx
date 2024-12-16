// components/GoogleMap.js
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -8.620201469236015,  // Default latitude
  lng: 115.22012290864788,   // Default longitude
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAsI0vNPe8JNzLfI1ltcElk-mRaEOjiv2c">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
