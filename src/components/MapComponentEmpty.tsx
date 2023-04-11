import { MapContainer, TileLayer } from 'react-leaflet'

const MapComponentEmpty = () => {
    return (
        <MapContainer center={[0, -0]} zoom={2} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </MapContainer>
    )
}

export default MapComponentEmpty