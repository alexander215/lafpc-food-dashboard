import React from 'react';
import IntroCopy from '../IntroCopy';
import Map from '../MapComponent';
import ToolkitComponent from '../Toolkit';
import VideoComponent from '../VideoComponent';
import Table from '../Table'
import SingleGraph from '../SingleGraph'
import { FlexContainer } from './style'


const Fair = ({activeHeader, valueDetails}) => {
    return (
        <div>
            <FlexContainer>
                <IntroCopy activeHeader={activeHeader} valueDetails={valueDetails}/>
                <SingleGraph />
            </FlexContainer>
            <Table/>
            <Map />
            <VideoComponent />
            <ToolkitComponent />
        </div>
    )
}

export default Fair;