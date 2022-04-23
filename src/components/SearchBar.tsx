import React, { ChangeEvent, useRef, useContext } from 'react'
import { PlacesContext } from '../context';
import { SearchResult } from './SearchResult';

export const SearchBar = () => {
    const {searchPlacesByTerm } = useContext(PlacesContext);
    const debounceRef = useRef<NodeJS.Timeout>();
    const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(debounceRef.current){
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = setTimeout(() => {
            // TODO: Buscar o ejecutar algo.
            searchPlacesByTerm(event.target.value);
        }, 1000);
     }
  return (
    <div className='search-container'>
        <input type="text" name="" id="" className='form-control' placeholder='Buscar lugar' onChange={onQueryChange} />
        <SearchResult/>
    </div>
  )
}
