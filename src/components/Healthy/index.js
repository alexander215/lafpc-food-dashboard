import React from 'react';
import IntroCopy from '../IntroCopy';
import Table from '../Table'
import DoubleComponent from '../DoubleComponent';
import VideoComponent from '../VideoComponent';
import Map from '../MapComponent'

const Healthy = ({activeHeader}) => {
    return (
        <div>
            <IntroCopy activeHeader={activeHeader}/>
            <DoubleComponent />

            <Map />

            <VideoComponent />
        </div>
    )
}

export default Healthy;