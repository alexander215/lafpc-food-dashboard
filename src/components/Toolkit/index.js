import React, { Component } from 'react';
import { ToolkitContainer, ToolkitInner, ToolkitTitle, ToolkitDownloadList } from './style';


class ToolkitComponent extends Component {
    state ={

    }
    render() {
        return(
            <ToolkitContainer>
                <ToolkitInner>
                    <ToolkitTitle>
                        Toolkit
                    </ToolkitTitle>
                    <ToolkitDownloadList>
                        Item 1
                        item 2
                        item 3
                    </ToolkitDownloadList>

                </ToolkitInner>

            </ToolkitContainer>
        )
    }
}

export default ToolkitComponent;