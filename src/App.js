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
  const interests = [
    { id: uuidv4(), name:"McDonald's", type:"Restaurant", price:"$" },
    { id: uuidv4(), name:"Hotel Amadeux", type:"Hotel", price:"$$" },
    { id: uuidv4(), name:"Lidl", type:"Store", price:"$" },
  ]

  const [poiData, setPoiData] = useState({})
  const [poiCategories, setPoiCategories] = useState({})
  
  useEffect(async() => {
    const poiCategories = await axios.get(`https://api.tomtom.com/search/2/poiCategories.json?key=${TOMTOM_API_KEY}`)
    if (poiCategories) setPoiCategories(poiCategories)

    const poiData = await axios.get(`https://api.tomtom.com/search/2/poiSearch/%7Bquery%7D.json?key=${TOMTOM_API_KEY}`)
    if (poiData) setPoiData(poiData)
  }, [])

  const json = JSON.stringify(poiCategories)
  for (const value of Object.keys(json)) {
    console.log(value);
  }

  return (
    <>
      <Navigation />
      <MapArea />
      {/* <GoogleMapWrapper apiKey={"YOUR_API_KEY"}>
      </GoogleMapWrapper> */}
      <InterestPoints interests={interests} />
      <pre>{}</pre>
    </>
  );
}
