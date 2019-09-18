import React, { Component } from 'react';
import { ToolkitContainer, ToolkitInner, ToolkitTitle, ToolkitDownloadList, ToolkitItem, ToolkitLine, ImageContainer, LinkContainer } from './style';
import dlicon from './download-icon.png'

class ToolkitComponent extends Component {
    state ={
        link: 'https://static1.squarespace.com/static/5bc50618ab1a624d324ecd81/t/5be5fda240ec9a789e87e811/1541799360838/GoodFoodforAllAgenda2018.pdf'

    }
    render() {
        return(
            <ToolkitContainer>
                <ToolkitInner>
                    <ToolkitTitle>
                        Toolkit
                    </ToolkitTitle>
                    <ToolkitDownloadList>
                        <ToolkitItem>
                            <ImageContainer>
                                <img src={dlicon}/>
                            </ImageContainer>
                            <LinkContainer>
                                <a href={this.state.link}>
                                    Download the full report
                                </a>
                            </LinkContainer>
                        </ToolkitItem>
                        
                        <ToolkitItem>
                            <ImageContainer>
                                <img src={dlicon}/>
                            </ImageContainer>
                            <LinkContainer>
                                <a href={this.state.link}>
                                    Download the Excel spreadsheet    
                                </a>
                            </LinkContainer>
                        </ToolkitItem>

                        <ToolkitItem>
                            <ImageContainer>
                                <img src={dlicon}/>
                            </ImageContainer>
                            <LinkContainer>
                                <a href={this.state.link}>
                                    Download the Healthy PDF
                                </a>
                            </LinkContainer>
                        </ToolkitItem>
                    </ToolkitDownloadList>
                </ToolkitInner>
            </ToolkitContainer>
        )
    }
}

export default ToolkitComponent;