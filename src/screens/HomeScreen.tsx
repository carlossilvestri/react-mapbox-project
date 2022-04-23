import { BtnMyLocation, MapView, ReactLogo, SearchBar, SearchResult } from "../components"

export const HomeScreen = () => {
  return (
    <div>
        <MapView/>
        <BtnMyLocation/>
        <ReactLogo/>
        <SearchBar/>
    </div>
  )
}
