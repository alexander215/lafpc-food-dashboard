import React from 'react';
import IntroCopy from '../IntroCopy';
import Table from '../Table'
import DoubleComponent from '../DoubleComponent';
import VideoComponent from '../VideoComponent';
import Map from '../MapComponent'
import ToolkitComponent from '../Toolkit';
import SingleGraph from '../SingleGraph';
import './style'
import { FlexContainer } from './style';

const Healthy = ({activeHeader, valueDetails}) => {
    return (
        <div>
            <FlexContainer>
                <IntroCopy activeHeader={activeHeader} valueDetails={valueDetails}/>
                <SingleGraph/>
            </FlexContainer>
            <Table/>
            <Map />
            <VideoComponent />
            <ToolkitComponent />
        </div>
    )
}

export default Healthy;