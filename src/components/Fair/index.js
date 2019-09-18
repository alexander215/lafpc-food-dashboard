import React from 'react';
import IntroCopy from '../IntroCopy';
import DoubleComponent from '../DoubleComponent';
import Map from '../MapComponent';
import ToolkitComponent from '../Toolkit';
import VideoComponent from '../VideoComponent';
import Table from '../Table'


const Fair = ({activeHeader, valueDetails}) => {
    return (
        <div>
            <IntroCopy activeHeader={activeHeader} valueDetails={valueDetails}/>
            <DoubleComponent />
            <Map />
            <ToolkitComponent />
            <VideoComponent />
            <Table/>
        </div>
    )
}

export default Fair;