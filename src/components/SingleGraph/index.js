import React, { Component } from 'react';
import { SingleGraphContainer } from './style.js'

class SingleGraph extends Component {
    state = {
        video: 'https://www.youtube.com/embed/LGwmyf59u94',
    }

    render(){
        return(
            <div>
                <SingleGraphContainer>

                </SingleGraphContainer>
            </div>
        )
    }
}

export default SingleGraph;