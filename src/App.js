import React, { useEffect, useState } from "react";
import MapArea from "./Components/MapArea/MapArea";
import InterestPoints from "./Components/InterestPoints/InterestPoints";
import Navigation from "./Components/Navigation/Navigation"
import { v4 as uuidv4 } from 'uuid';
import { Wrapper as GoogleMapWrapper, Status } from "@googlemaps/react-wrapper";
import './App.css';
import axios from "axios";

const TOMTOM_API_KEY = "r6SBW2lsmjrN88T2GgG7ddAwmtmJiwiC"

export default function App() {
  const [pointsOfInterests, setPois] = useState({})
  const query = ""
  
  useEffect(async() => {
    const poiData = await axios.get(`https://api.tomtom.com/search/2/poiSearch/${query}.json?key=${TOMTOM_API_KEY}`)
    if (poiData) setPois(parsePoiData(poiData))
  }, [])
  
  const parsePoiData = (poiData) => {
    const parsedPois = []
    poiData.data.results.forEach(result => {
      parsedPois.push({
        id: uuidv4(),
        name: result.poi.name,
        category: result.poi.categories.reduce((a, b) => a.length <= b.length ? a : b),
        code: result.poi.classifications[0].code,
      })
    });
    return parsedPois
  }

  const dummy = [{ id: uuidv4(), name: "somename", category: "restaurant", code: "RESTAURANT"}]

  return (
    <>
      <Navigation />
      <MapArea />
      {/* <GoogleMapWrapper apiKey={"YOUR_API_KEY"}>
        <MapArea />
      </GoogleMapWrapper> */}
      <InterestPoints interests={ pointsOfInterests } />
    </>
  );
}