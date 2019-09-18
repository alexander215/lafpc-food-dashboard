import React from 'react';
import { 
    IntroHeader,
    IntroDiv,
    IntroText
} from './style';

const IntroCopy = ({ valueDetails }) => {
    console.log(valueDetails, 'value details')
        return (
            <IntroDiv>
                <IntroHeader>
                {valueDetails[0]}
                </IntroHeader>
                <IntroText>
                {valueDetails[1]}
                </IntroText>
            </IntroDiv>
        )
    }

export default IntroCopy;