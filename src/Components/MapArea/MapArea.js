import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "./MapArea.css";

const GOOGLE_MAP_API_KEY = "AIzaSyCYm4sjNy3lfgfcfK7zV7e_G8sOVyHtpr0";

export default function MapArea() {
  const Map = () => {
    return <GoogleMap center={{ lat: 48.8566, lng: 2.3522 }} zoom={10} />;
  };

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div className="map-area">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCYm4sjNy3lfgfcfK7zV7e_G8sOVyHtpr0&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
