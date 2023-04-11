import { Marker, Popup } from 'react-leaflet';
import { AirportType } from '../types/AirportType';
import { blueIcon, redIcon } from '../icons/icons';
import { useState } from "react";
import { lat, lng } from "../types/AirportType";
import { LeafletMouseEvent } from 'leaflet';

type PropsType = {
    filteredAirportList: AirportType[]
    setSelectedCoordinateA: React.Dispatch<React.SetStateAction<number []>>
    setSelectedCoordinateB: React.Dispatch<React.SetStateAction<number []>>
}

const MarkerComponent = ( { filteredAirportList, setSelectedCoordinateA, setSelectedCoordinateB } : PropsType ) => {

    const [selectedMarkerTitle1, setSelectedMarkerTitle1] = useState('');
    const [selectedMarkerTitle2, setSelectedMarkerTitle2] = useState('');

    const handleClick = (e: LeafletMouseEvent) => {
        const title: string = e.target.options.title
        const { lat, lng } = e.latlng
        
        if (selectedMarkerTitle1 === '') {
            setSelectedMarkerTitle1(title)
            setSelectedCoordinateA([lat, lng])

        } else if (selectedMarkerTitle2 === '') {
            setSelectedMarkerTitle2(title)
            setSelectedCoordinateB([lat, lng])
            
        } else {
            setSelectedMarkerTitle1('')
            setSelectedMarkerTitle2('')
            setSelectedCoordinateA([])
            setSelectedCoordinateB([])
        }
    }

    const getMarkerIcon = (markerTitle: string) => {
        if (markerTitle === selectedMarkerTitle1 || markerTitle === selectedMarkerTitle2) return redIcon
        return blueIcon
    }

    return (
        <section>

            {filteredAirportList.map((airport) => 
            <Marker 
                key={airport.properties.Name}
                title={airport.properties.Name}
                position={[airport.geometry.coordinates[lng], airport.geometry.coordinates[lat] ]}
                icon={getMarkerIcon(airport.properties.Name)}
                eventHandlers={
                    {dblclick: (e) => {handleClick(e)}}
                }>
            
                <Popup>
                    <span>ID: {airport.properties.Code}</span><br />
                    <span>Name: {airport.properties.Name}</span><br />
                    <span>Total Seats: {airport.properties.TotalSeats.split('.')[0]}</span>
                </Popup>

            </Marker>
            )}

        </section>
    )
}

export default MarkerComponent