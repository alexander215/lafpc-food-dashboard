import React, { Component } from 'react';
import { VideoContainer } from './style.js'

class VideoComponent extends Component {
    state = {
        video: 'https://www.youtube.com/embed/ooe8dURgHsA',
    }

    render(){
        return(
            <div>
                <VideoContainer>
                    <iframe width="560" height="315"
                        src={this.state.video}>
                    </iframe>
                </VideoContainer>
            </div>
        )
    }
}

export default VideoComponent;