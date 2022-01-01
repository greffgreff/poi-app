import React from 'react'
import './MapArea.css'
import { Wrapper as GoogleMapWrapper, Status } from "@googlemaps/react-wrapper"

export default function MapArea() {
    return (
        <>
            <div className="map-area" />
            {/* <GoogleMapWrapper apiKey={"YOUR_API_KEY"}>
            <MapArea />
            </GoogleMapWrapper> */}
        </>
    )
}
