"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var mapboxglApiKey = process.env.MAPBOXGL_API_KEY;
if (mapboxglApiKey == 'pk.eyJ1IjoiaG9hbmdrczUiLCJhIjoiY2xnMGpkNHlhMDczZzNncDkzZW5oaTBpMSJ9.oRcY6IJ3fJdBFS-jhI7BAg') {
    console.log('mapboxglApiKey is not set');
}
