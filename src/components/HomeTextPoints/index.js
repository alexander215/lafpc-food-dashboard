import React, { Component } from 'react';
import { HomeTextContainer, LineContainer, IconContainer, TextContainer, TitleContainer, CopyContainer } from './style.js'
import heart from './Heart.png';
import leaf from './leaf.png';
import people from './People.png';

class HomeTextPoints extends Component {
    state = {

    }
    render(){
        return(
            <div>
                <HomeTextContainer> 
                    <LineContainer>
                        <IconContainer>
                            <img src={heart} alt="Heart icon" width="65"/>
                        </IconContainer>
                        <TextContainer>
                            <TitleContainer>
                                The 4 Values
                            </TitleContainer>
                            <CopyContainer>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et massa id eget tempor et condimentum quis. Id nisi, eget mattis ultricies. Felis dolor, diam ultrices augue. Amet urna, amet enim hendrerit sem molestie sit.
                            </CopyContainer>
                        </TextContainer>    
                    </LineContainer>
                    <LineContainer>
                        <IconContainer>
                            <img src={leaf} alt="Leaf icon" width="65"/>
                        </IconContainer>
                        <TextContainer>
                            <TitleContainer>
                                What It Is
                            </TitleContainer>
                            <CopyContainer>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et massa id eget tempor et condimentum quis. Id nisi, eget mattis ultricies. Felis dolor, diam ultrices augue. Amet urna, amet enim hendrerit sem molestie sit.
                            </CopyContainer>
                        </TextContainer>    
                    </LineContainer>
                    <LineContainer>
                        <IconContainer>
                            <img src={people} alt="People icon" width="65"/>
                        </IconContainer>
                        <TextContainer>
                            <TitleContainer>
                                Why It Is
                            </TitleContainer>
                            <CopyContainer>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et massa id eget tempor et condimentum quis. Id nisi, eget mattis ultricies. Felis dolor, diam ultrices augue. Amet urna, amet enim hendrerit sem molestie sit.
                            </CopyContainer>
                        </TextContainer>    
                    </LineContainer>
                </HomeTextContainer>
            </div>
        )
    }

}

export default HomeTextPoints;