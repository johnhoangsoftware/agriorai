// import * as dotenv from 'dotenv';
// dotenv.config();
import mapboxgl from '../../lib/mapboxgl.js';

const mapboxglApiKey = "pk.eyJ1IjoiaG9hbmdrczUiLCJhIjoiY2xmcm55NDVrMDVwZjN6b3VwMnlhd2gyZyJ9.sH9KEwAMkw7Z6I-aDuNm9w";

function createMapLocation(latitude: number, longitude: number) {
   mapboxgl.accessToken = mapboxglApiKey;
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

function getAllDataMarkers() {
   /* Tạo data fake json lat,long,nameUser,typeIcon */
   const markers = [
      {
         latitude: 10.762622,
         longitude: 106.660172,
         nameUser: 'Nguyễn Văn A',
         typeIcon: 'chicken',
      },
      {
         latitude: 10.762622,
         longitude: 106.660172,
         nameUser: 'Nguyễn Văn B',
         typeIcon: 'cow',
      },
      {
         latitude: 10.762622,
         longitude: 106.660172,
         nameUser: 'Nguyễn Văn C',
         typeIcon: 'pig',
      },
   ];
   return markers;
}

function addAllMarkers(map: mapboxgl.Map) {
   const markers = getAllDataMarkers();
   markers.forEach((marker) => {
      addMarker(map, marker.latitude, marker.longitude, marker.nameUser, marker.typeIcon);
   });
}

export { createMapLocation, addMarker, addAllMarkers };