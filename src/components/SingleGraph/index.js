import React, { Component } from 'react';
import { SingleGraphContainer, GraphTitle, SourceLink } from './style.js'
import graph from './306.png'

class SingleGraph extends Component {
    state = {
        title: 'Graph',
        graph: require('./306.png'),
        source: 'https://static1.squarespace.com/static/5bc50618ab1a624d324ecd81/t/5be5fda240ec9a789e87e811/1541799360838/GoodFoodforAllAgenda2018.pdf',
    }

    render(){
        return(
            <SingleGraphContainer>
                    <GraphTitle>
                        {this.state.title}
                    </GraphTitle>
                    <img src={this.state.graph}/>
                <SourceLink>
                    <a href={this.state.source} target="_blank">Click here to download.</a>
                </SourceLink>
            </SingleGraphContainer>
        )
    }
}

export default SingleGraph;