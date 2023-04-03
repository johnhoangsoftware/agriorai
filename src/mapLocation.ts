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

function addMarker(map: mapboxgl.Map, latitude: number, longitude: number, nameUser: string,
   typeIcon: string) {

      /* Json linksICon */
      const linksICon = {
         'chicken': 'https://cdn.discordapp.com/attachments/1092377385590075453/1092385956201513000/chicken.png',
         'cow': 'https://cdn.discordapp.com/attachments/1092377385590075453/1092385956201513000/cow.png',
         'pig': 'https://cdn.discordapp.com/attachments/1092377385590075453/1092385956201513000/pig.png',
      };

      const icon = document.createElement('div');
      icon.className = 'marker';
      icon.style.backgroundImage = `url(${linksICon[typeIcon]})`;
      icon.style.width = `35px`;
      icon.style.height = `35px`;
      icon.style.backgroundSize = '100%';
      const mark = new mapboxgl.Marker(icon)
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + nameUser + '</h3>'))
            .addTo(map);
      return mark;
}

