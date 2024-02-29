// Maps.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '50vh'
};

const center = {
  lat: 28.614765362841354, 
  lng: -106.0987390702553,
  zoom: 14
};

const Maps = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBJrL4peJgT5qWEAqhQNayFjVJlzDxXFls"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} title="Marker" />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;

