import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { Feature } from "../interfaces/places";
import { LoadingPlaces } from "./";

export const SearchResult = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  const [activeId, setActiveId] = useState("");

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center;
    setActiveId(place.id);
    map?.flyTo({
      center: [lng, lat],
      zoom: 14
    });
  }
  const getRoute = (place: Feature) => {
    if(!userLocation) return;
    const [lng, lat] = place.center;
    getRouteBetweenPoints(userLocation, [lng, lat]);
  }
  if(isLoadingPlaces){
    return (
        <LoadingPlaces/>
    )
  }

  return (
    <ul className="list-group mt-3">
      
      {
      places.length > 0 &&
      places.map((place) => (
        <li key={`key-${place.id}`} className={`list-group-item list-group-item-action pointer ${(activeId === place.id) ? 'active' : ''}`} onClick={() =>onPlaceClicked(place)}>
          <h6>{place.text_es}</h6>
          <p style={{ fontSize: "12px" }}>
            {place.place_name}
          </p>
          <button
          onClick={() => getRoute(place)}
          className={`btn btn-sm  ${(activeId === place.id) ? 'btn-outline-light' : 'btn-outline-primary'}`}>
            Direcciones
          </button>
        </li>
      ))
      }
    </ul>
  );
};
