import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';
import MarkerComponent from './MarkerComponent';
import { AirportType } from '../types/AirportType';
import MapComponentEmpty from '../components/MapComponentEmpty';
import { lat, lng } from "../types/AirportType";
import { useState } from 'react';
import CountryInputComponent from './CountryInputComponent';

type PropsType = {
    airportList: AirportType[]
    selectedCoordinateA: number []
    selectedCoordinateB: number []
    setSelectedCoordinateA: React.Dispatch<React.SetStateAction<number []>>
    setSelectedCoordinateB: React.Dispatch<React.SetStateAction<number []>>
}

const MapComponent = ({airportList, selectedCoordinateA, selectedCoordinateB, setSelectedCoordinateA, 
    setSelectedCoordinateB}: PropsType) => {

    const filteredAirportList: AirportType [] = []
    const coordinatesList: [number, number][] = []
    const redOptions = { color: 'red' }

    const countryNameList: string [] = ['#']

    const [country, setCountry] = useState<string>('')
    const [country2, setCountry2] = useState<string>('')
    const [isFirstInputActive, setIsFirstInputActive] = useState<boolean>(false)

    if (selectedCoordinateA.length && selectedCoordinateB.length) {
        coordinatesList.push([selectedCoordinateA[lat], selectedCoordinateA[lng]])
        coordinatesList.push([selectedCoordinateB[lat], selectedCoordinateB[lng]])
    }

    airportList.forEach(airport => {
        if (airport.properties.Country !== undefined){

            if (!countryNameList.includes(airport.properties.Country)) {
                countryNameList.push(airport.properties.Country)
            }
 
            if ((airport.properties.Country).toLowerCase() === country.toLowerCase()
            || (airport.properties.Country).toLowerCase() === country2.toLowerCase()) {
                filteredAirportList.push(airport)
            }
        }
    })

    const ChangeCenterComponent = () => {
        const map = useMap()

        if (isFirstInputActive) {
            const airportOne = filteredAirportList.findLast(airport => airport.properties.Country.toLowerCase() === country.toLowerCase())
            if (airportOne) map.setView([airportOne.geometry.coordinates[lng], airportOne.geometry.coordinates[lat]])
        } else {
            const airportTwo = filteredAirportList.findLast(airport => airport.properties.Country.toLowerCase() === country2.toLowerCase())
            if (airportTwo) map.setView([airportTwo.geometry.coordinates[lng], airportTwo.geometry.coordinates[lat]])
        }
        return null
    }

    return (
        <div className="map-container">

            <div className="map stack-top">
                <CountryInputComponent 
                    country={country} 
                    setCountry={setCountry}
                    country2={country2}
                    setCountry2={setCountry2}
                    setIsFirstInputActive={setIsFirstInputActive}
                    countryNameList={countryNameList}/>
            </div>
        
            <div className="map">
                {filteredAirportList.length
                ?
                <MapContainer 
                    center={[0, -0]} 
                    zoom={4} 
                    scrollWheelZoom={true} 
                    doubleClickZoom={false}>

                <ChangeCenterComponent/>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                {coordinatesList.length ? <Polyline pathOptions={redOptions} positions={coordinatesList} /> : null}

                <MarkerComponent 
                    filteredAirportList={filteredAirportList} 
                    setSelectedCoordinateA={setSelectedCoordinateA}
                    setSelectedCoordinateB={setSelectedCoordinateB}/>

                </MapContainer>

                : <MapComponentEmpty/>}
            </div>
            
        </div>
    )
}

export default MapComponent