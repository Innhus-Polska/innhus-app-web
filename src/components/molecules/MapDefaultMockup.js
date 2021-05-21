import React from 'react';
import { View } from 'react-native-web';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.55, -0.09];

class MapDefaultMockup extends React.Component {
    render() {
        return (
            <View className="w-full">
                {/* <MapContainer center={position} zoom={1} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer> */}
            </View>
        );
    }
}

export default MapDefaultMockup;
