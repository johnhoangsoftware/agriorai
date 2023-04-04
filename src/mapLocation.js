"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAllMarkers = exports.addMarker = exports.createMapLocation = void 0;
var dotenv = require("dotenv");
dotenv.config();
var mapboxgl_js_1 = require("../lib/mapboxgl.js");
var mapboxglApiKey = process.env.MAPBOXGL_API_KEY;
function createMapLocation(latitude, longitude) {
    mapboxgl_js_1.default.accessToken = mapboxglApiKey;
    var map = new mapboxgl_js_1.default.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-day-v1',
        center: [longitude, latitude],
        zoom: 16,
    });
    return map;
}
exports.createMapLocation = createMapLocation;
function addMarker(map, latitude, longitude, nameUser, typeIcon) {
    /* Json linksICon */
    var linksICon = {
        'chicken': 'https://cdn.discordapp.com/attachments/1092377385590075453/1092385956201513000/chicken.png',
        'cow': 'https://cdn.discordapp.com/attachments/1092377385590075453/1092385956201513000/cow.png',
        'pig': 'https://cdn.discordapp.com/attachments/1092377385590075453/1092385956201513000/pig.png',
    };
    var icon = document.createElement('div');
    icon.className = 'marker';
    icon.style.backgroundImage = "url(".concat(linksICon[typeIcon], ")");
    icon.style.width = "35px";
    icon.style.height = "35px";
    icon.style.backgroundSize = '100%';
    var mark = new mapboxgl_js_1.default.Marker(icon)
        .setLngLat([longitude, latitude])
        .setPopup(new mapboxgl_js_1.default.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + nameUser + '</h3>'))
        .addTo(map);
    return mark;
}
exports.addMarker = addMarker;
function getAllDataMarkers() {
    /* Tạo data fake json lat,long,nameUser,typeIcon */
    var markers = [
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
function addAllMarkers(map) {
    var markers = getAllDataMarkers();
    markers.forEach(function (marker) {
        addMarker(map, marker.latitude, marker.longitude, marker.nameUser, marker.typeIcon);
    });
}
exports.addAllMarkers = addAllMarkers;
