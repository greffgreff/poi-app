import MapArea from "./MapArea/MapArea.js";
import InterestPoints from "./InterestPoints/InterestPoints.js";
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const interests = [
    { id: uuidv4(), name:"Burger King", type:"Restaurant", price:"$" },
    { id: uuidv4(), name:"McDonald's", type:"Restaurant", price:"$" },
    { id: uuidv4(), name:"Subway", type:"Restaurant", price:"$$" },
  ]

  return (
    <>
      <MapArea />
      <InterestPoints interests={interests} />
    </>
  );
}
