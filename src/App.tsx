import { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';
import axios from "axios";
import { AirportType } from './types/AirportType';
import LengthCalculatorComponent from './components/LengthCalculatorComponent';

function App() {

    const url = 'http://localhost:3500/features';
    const initState: AirportType[] = [];

    const [airportList, setAirportList] = useState<AirportType[]>(initState);
    const [selectedCoordinateA, setSelectedCoordinateA] = useState<number []>([]);
    const [selectedCoordinateB, setSelectedCoordinateB] = useState<number []>([]);

    useEffect(() => {
        axios.get<AirportType[]>(url)
        .then((response) => {
            setAirportList(response.data);
        });
    }, []);

    return (
        <main>

            <h1>Airports All Around The World</h1><br /><br />
            <img className="logo" src="../img/logo.png"/>

            <div id="length-calc-component">
                <LengthCalculatorComponent
                    selectedCoordinateA={selectedCoordinateA} 
                    selectedCoordinateB={selectedCoordinateB}/> 
            </div>
            
            <div id="map-component">
                <MapComponent 
                    airportList={airportList} 
                    selectedCoordinateA={selectedCoordinateA} 
                    selectedCoordinateB={selectedCoordinateB}
                    setSelectedCoordinateA={setSelectedCoordinateA}
                    setSelectedCoordinateB={setSelectedCoordinateB}/>
            </div>

        </main>
    )
}

export default App
