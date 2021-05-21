import * as React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import MapGL, { Popup, NavigationControl, FullscreenControl, ScaleControl, GeolocateControl } from 'react-map-gl';

import ControlPanel from './MapControls/ControlPanel';
import Pins from './MapControls/Pins';
import CityInfo from './MapControls/CityInfo';

import CITIES from './MapControls/cities.json';

const TOKEN = 'pk.eyJ1Ijoia3JlYXRvcnp5bWFyemVuIiwiYSI6ImNrb25pNjllMjAxczYydG51azJ5cWtobzYifQ.PRa8LQIzpV5-9bjVvGjWKg'; // Set your mapbox token here

const geolocateStyle = {
    top: 0,
    left: 0,
    padding: '10px',
};

const fullscreenControlStyle = {
    top: 36,
    left: 0,
    padding: '10px',
};

const navStyle = {
    top: 72,
    left: 0,
    padding: '10px',
};

const scaleControlStyle = {
    bottom: 36,
    left: 0,
    padding: '10px',
};

export default function MapComponent() {
    const [viewport, setViewport] = useState({
        latitude: 40,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
    });
    const [popupInfo, setPopupInfo] = useState(null);

    return (
        <>
            <MapGL
                {...viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={setViewport}
                mapboxApiAccessToken={TOKEN}
            >
                <Pins data={CITIES} onClick={setPopupInfo} />

                {popupInfo && (
                    <Popup
                        tipSize={5}
                        anchor="top"
                        longitude={popupInfo.longitude}
                        latitude={popupInfo.latitude}
                        closeOnClick={false}
                        onClose={setPopupInfo}
                    >
                        <CityInfo info={popupInfo} />
                    </Popup>
                )}

                <GeolocateControl style={geolocateStyle} />
                <FullscreenControl style={fullscreenControlStyle} />
                <NavigationControl style={navStyle} />
                <ScaleControl style={scaleControlStyle} />
            </MapGL>

            <ControlPanel />
        </>
    );
}
