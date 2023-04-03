import * as dotenv from 'dotenv';
dotenv.config();
import mapboxgl from '../lib/mapboxgl.js';

const mapboxglApiKey = process.env.MAPBOXGL_API_KEY;
mapboxgl.accessToken = mapboxglApiKey;

function createMapLocation(latitude: number, longitude: number) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-day-v1',
    center: [longitude, latitude],
    zoom: 16,
  });
  return map;
}

function addMarker(map: mapboxgl.Map, latitude: number, longitude: number, nameUser: string) {
  const marker = new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .setPopup(new mapboxgl.Popup().setHTML(`<h3>${nameUser}</h3>`))
    .addTo(map);
  return marker;
}