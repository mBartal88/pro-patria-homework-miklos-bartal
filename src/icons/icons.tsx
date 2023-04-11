import * as L from 'leaflet';

export const blueIcon = new L.Icon({
    iconUrl: '../../marker_images/marker-icon-blue.png',
    shadowUrl: '../../marker_images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export const redIcon = new L.Icon({
    iconUrl: '../../marker_images/marker-icon-red.png',
    shadowUrl: '../../marker_images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});