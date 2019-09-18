import React from 'react';
import IntroCopy from '../IntroCopy';
import Table from '../Table'
import DoubleComponent from '../DoubleComponent';
import VideoComponent from '../VideoComponent';
import Map from '../MapComponent'
import ToolkitComponent from '../Toolkit';

const Healthy = ({activeHeader, valueDetails}) => {
    return (
        <div>
            <IntroCopy activeHeader={activeHeader} valueDetails={valueDetails}/>
            <DoubleComponent />
            <Map />
            <ToolkitComponent />
            <VideoComponent />
        </div>
    )
}

export default Healthy;