import React from 'react';
import { 
    IntroHeader,
    IntroDiv
} from './style';

const IntroCopy = ({activeHeader, valueDetails}) => {
    return (
        <IntroDiv>
        <IntroHeader>{activeHeader}</IntroHeader>
            {valueDetails}
        </IntroDiv>
    )
}

export default IntroCopy;