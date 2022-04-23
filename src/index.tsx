/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import "./index.css";
// @ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1Ijoic2lsdmVzdHJpYyIsImEiOiJjbDIyMXJkZ3Qwd3dqM2RtanRtNmdyYjJ5In0.yRp8asf0tHT4CU4Yf6xaSw';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if(!navigator.geolocation){
  alert('Geolocation is not supported by your browser');
  throw new Error('Geolocation is not supported by your browser');
}
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);