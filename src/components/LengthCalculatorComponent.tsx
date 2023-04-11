import { lat, lng } from "../types/AirportType";

type PropsType = {
    selectedCoordinateA: number []
    selectedCoordinateB: number []
}

const LengthCalculatorComponent = ({ selectedCoordinateA, selectedCoordinateB } : PropsType) => {

    const lat1 = selectedCoordinateA[lat]
    const lng1 = selectedCoordinateA[lng]
    const lat2 = selectedCoordinateB[lat]
    const lng2 = selectedCoordinateB[lng]

    //Haversine formula

    const earthRadius: number = 6371; // km

    const diffLat = (lat2 - lat1) * Math.PI / 180;  
    const diffLng = (lng2 - lng1) * Math.PI / 180;  

    const arc = Math.cos(
        lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) 
        * Math.sin(diffLng/2) * Math.sin(diffLng/2)
        + Math.sin(diffLat/2) * Math.sin(diffLat/2);

    const line = 2 * Math.atan2(Math.sqrt(arc), Math.sqrt(1-arc));

    const distance = (earthRadius * line).toFixed(2);
    
    return (
        <section style={!selectedCoordinateA.length && !selectedCoordinateB.length 
        ? {backgroundColor: "transparent"} 
        : {backgroundColor: "#d3a693"}  }>
            
            {selectedCoordinateA.length 
            ? 
            <>
                <p style={{textDecoration: "underline"}}>Coordinate A </p>
                <p>Latitude: {lat1}</p>
                <p>Longitude: {lng1}</p><br />
            </>

            : null}
            
            {selectedCoordinateB.length 
            ? 
            <>
                <p style={{textDecoration: "underline"}}>Coordinate B </p>
                <p>Latitude: {lat2}</p>
                <p>Longitude: {lng2}</p><br />
                <p style={{color: "red"}}>Distance: {distance} km</p>
            </>

            : null}

        </section>
    )
}

export default LengthCalculatorComponent