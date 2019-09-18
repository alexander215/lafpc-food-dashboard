import React from 'react';
import { DoubleContainer } from './style';
import SingleGraph from '../SingleGraph';

const DoubleComponent = () => {
    return (
        <DoubleContainer>       
            <SingleGraph />
        </DoubleContainer>

    )
}

export default DoubleComponent;