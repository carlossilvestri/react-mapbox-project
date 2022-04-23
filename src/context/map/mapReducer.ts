/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import { Map, Marker } from "!mapbox-gl";
import { MapState } from "./MapProvider";

type MapAction =
  | { type: "SET_MAP_STATE"; payload: Map }
  | { type: "SET_MARKERS"; payload: Marker[] };

export const mapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case "SET_MAP_STATE":
      return {
        ...state,
        isMapReady: true,
        map: action.payload,
      };
      break;
    case "SET_MARKERS":
      return {
        ...state,
        markers: action.payload,
      };
      break;
    default:
      return state;
  }
};
