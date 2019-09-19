import React from 'react';
import IntroCopy from '../IntroCopy';
import DoubleComponent from '../DoubleComponent';
import Map from '../MapComponent';
import ToolkitComponent from '../Toolkit';
import VideoComponent from '../VideoComponent';
import Table from '../Table'
import { FlexContainer } from './style';
import SingleGraph from '../SingleGraph'


const Sustainable = ({activeHeader, valueDetails}) => {
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

export default Sustainable;