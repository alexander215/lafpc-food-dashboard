import React from 'react';
import IntroCopy from '../IntroCopy';
import DoubleComponent from '../DoubleComponent';
import Map from '../MapComponent';
import VideoComponent from '../VideoComponent';

const Sustainable = ({activeHeader}) => {
    return (
        <div>
            <IntroCopy activeHeader={activeHeader}/>
            <DoubleComponent />

            <Map />

            <VideoComponent />
        </div>
    )
}

export default Sustainable;