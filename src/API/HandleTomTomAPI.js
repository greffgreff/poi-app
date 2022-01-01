import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const TOMTOM_API_KEY = "r6SBW2lsmjrN88T2GgG7ddAwmtmJiwiC"

export default function PointsOfInterests(query) {
  const [pointsOfInterests, setPois] = useState([]);

  useEffect(async () => {
    const poiData = await axios.get(
      `https://api.tomtom.com/search/2/poiSearch/${query}.json?key=${TOMTOM_API_KEY}`
    );
    if (poiData) setPois(parsePoiData(poiData));
  }, []);
  
  return pointsOfInterests;
}

const parsePoiData = (poiData) => {
    const parsedPois = [];
    poiData.data.results.forEach((result) => {
        parseCategoriesArray(result.poi.categories)

        parsedPois.push({
            id: uuidv4(),
            name: result.poi.name,
            categories: parseCategoriesArray(result.poi.categories),
            code: result.poi.classifications[0].code,
            phone: result.poi.phone,
            url: result.poi.url,
        });
    });
    return parsedPois.reverse();
};

const parseCategoriesArray = (array) => {
    var parsedArray = []

    array.forEach(category => {
        const splitArray = category.split(",")
        const trimmedArray = splitArray.map(label => label.trim())
        const upperCasedArray = trimmedArray.map(label => label.charAt(0).toUpperCase() + label.slice(1))
        console.log(upperCasedArray)
        parsedArray = [...parsedArray, ...upperCasedArray]
    })

    return parsedArray
}