# Airports All Around The World

A simple application, which displays airports all over the world. Created with ReactJs + Typescript.

### Features

- Total 2174 Airports
- Total 223 Countries
- Airport informations displayed on popups
- Calculates distance between selected airports using the Haversine formula.
- Json server for simulating a backend server.

## Build/Run

### Requirements

- Node.js

```javascript

/* Install the needed packages */
npm install

/* Start the json-server */
npx json-server -w data/airport_location.json -p 3500

/* Start the app */
npm run dev

```

## How to use
- Maximum two countries can be picked at once.
- Choose one or two countries from the dropdown menu or start typing the desired country in the search bar.
- The center of the map jumps to the recently selected country. 
- The zoom level is preserved during jumping.
- If no valid country was selected in either of the inputs the map zooms out. 
- Hovering over the markers displays the airport's name.
- Clicking once on a marker, a popup is displayed showing the airport's Id, Name and Total Seat Count (Available Seat Kilometres).
- Clicking once again on the previous marker or on the 'X' closes the popup.
- Clicking twice on a marker selects it, the marker turns red and on the left the airport's coordinates are displayed (Coordinate A). 
- Clicking twice on another marker selects it again and a red line connects the two selected markers. On the left the second airport's coordinates are displayed (Coordinate B) with the distance between them. 
- After the calculation was done clicking twice on any of the markers deselects the airports and clears the coordinates area.

## Note
- The Haversine formula calulates the shortest distance, but the line is not correctly represents the distance in some cases. 
(e.g. the easternmost airport in Russia - the westernmost airport in USA)

## Source
Airport data: https://datacatalog.worldbank.org/search/dataset/0038117/Global-Airports 
(Converted from csv to geojson.)
