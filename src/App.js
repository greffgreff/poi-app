import React, { useEffect, useState } from "react"
import MapArea from "./Components/MapArea/MapArea"
import InterestPoints from "./Components/InterestPoints/InterestPoints"
import Navigation from "./Components/Navigation/Navigation"
import PointsOfInterests from "./API/HandleTomTomAPI"
import './App.css';

export default function App() {
  const query = "query"
  const pointsOfInterests = PointsOfInterests(query);

  return (
    <>
      <Navigation />
      <MapArea />
      {pointsOfInterests && <InterestPoints interests={ pointsOfInterests } />}
    </>
  );
}