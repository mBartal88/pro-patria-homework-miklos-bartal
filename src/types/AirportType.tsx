export type AirportType = {
    type: string;
    properties: {
        Code: string;
        Name: string;
        TotalSeats: string;
        Country: string;
        Latitude: number;
        Longitude: number;
    };
    geometry: {
        type: string;
        coordinates: number[];
    };
}

export const lat = 0;
export const lng = 1;