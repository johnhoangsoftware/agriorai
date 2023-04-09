"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAllMarkers = exports.addMarker = exports.createMapLocation = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const mapboxgl_js_1 = __importDefault(require("../lib/mapboxgl.js"));
const mapboxglApiKey = process.env.MAPBOXGL_API_KEY;
function createMapLocation(latitude, longitude) {
    mapboxgl_js_1.default.accessToken = mapboxglApiKey;
    const map = new mapboxgl_js_1.default.Map({
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
    const mark = new mapboxgl_js_1.default.Marker(icon)
        .setLngLat([longitude, latitude])
        .setPopup(new mapboxgl_js_1.default.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + nameUser + '</h3>'))
        .addTo(map);
    return mark;
}
exports.addMarker = addMarker;
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
function addAllMarkers(map) {
    const markers = getAllDataMarkers();
    markers.forEach((marker) => {
        addMarker(map, marker.latitude, marker.longitude, marker.nameUser, marker.typeIcon);
    });
}
exports.addAllMarkers = addAllMarkers;
addAllMarkers(createMapLocation(10.762622, 106.660172));
