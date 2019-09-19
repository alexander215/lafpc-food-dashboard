import React from 'react';
import IntroCopy from '../IntroCopy';
import DoubleComponent from '../DoubleComponent';
import Map from '../MapComponent';
import ToolkitComponent from '../Toolkit';
import VideoComponent from '../VideoComponent';
import Table from '../Table'
import { FlexContainer } from './style';
import SingleGraph from '../SingleGraph'

const Affordable = ({activeHeader, valueDetails}) => {
    return (
        <div>
            <FlexContainer>
                <IntroCopy activeHeader={activeHeader} valueDetails={valueDetails}/>
                <SingleGraph activeHeader={activeHeader}/>
            </FlexContainer>
            <Table/>
            <Map />
            <VideoComponent />
            <ToolkitComponent />
        </div>
    )
}

export default Affordable;