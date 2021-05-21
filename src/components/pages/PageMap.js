import React from 'react';
import { View } from 'react-native-web';
import MapComponent from '../molecules/MapComponent';
import 'mapbox-gl/dist/mapbox-gl.css';

class PageMap extends React.Component {
    render() {
        return (
            <View>
                <MapComponent />
            </View>
        );
    }
}

export default PageMap;
