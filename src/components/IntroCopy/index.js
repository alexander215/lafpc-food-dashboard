import React from 'react';
import { 
    IntroHeader,
    IntroDiv,
    IntroText,
    DesignDiv,
    Images,
    ImageCont
} from './style';
import leaf from './leaf.svg';
import rectangle from './Rectangle 3.svg'

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
                <DesignDiv>
                    <ImageCont>
                        <img src={rectangle} alt="Line"></img>
                    </ImageCont>
                    <ImageCont>
                        <img src={leaf} alt="Leaf"></img>
                    </ImageCont>
                    <ImageCont>
                        <img src={rectangle} alt="Line"></img>
                    </ImageCont>

                </DesignDiv>
            </IntroDiv>
        )
    }

export default IntroCopy;