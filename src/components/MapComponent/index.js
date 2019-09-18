import React, { Component } from 'react';
import { MapContainer, EmbeddedMap, MapCaption } from './style';

class Map extends Component {
    state = {
        map: 'https://www.google.com/maps/d/embed?mid=1X4SoOI2r5QQlFhkNrPvxgXuKlQKKmwO5',
        caption: 'GIS Map of Farmers Markets in LA County'
    }

    render() {
        return (
            <MapContainer>
                <EmbeddedMap>
                    <iframe src={this.state.map} width='640' height='480' />
                </EmbeddedMap>
                <MapCaption>
                    {this.state.caption}
                </MapCaption>
                
            </MapContainer>
        )
    }
}

export default Map;