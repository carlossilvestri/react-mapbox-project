import { useEffect, useReducer } from "react";
import { searhApi } from "../../apis";
import { getUserLocation } from "../../helpers";
import { Feature, PlacesResponse } from "../../interfaces/places";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);
  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: "SET_USER_LOCATION", payload: lngLat })
    );
  }, []);

  const searchPlacesByTerm = async (query: string) : Promise<Feature[]> => {
    // User did not type anything
    if (query.length === 0) {
      dispatch({type: "SET_PLACES", payload: []});
      return []; // TODO: Limpiar el estado.
    }
    if (!state.userLocation) throw new Error("User location is not defined");
    dispatch({ type: "SET_LOADING_PLACES", payload: [] });
    const resp = await searhApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(","),
      },
    });
    dispatch({ type: "SET_PLACES", payload: resp.data.features });
    return resp.data.features;
  };

  return (
    <PlacesContext.Provider value={
      { ...state,
        searchPlacesByTerm
      }
      }>
      {children}
    </PlacesContext.Provider>
  );
};
