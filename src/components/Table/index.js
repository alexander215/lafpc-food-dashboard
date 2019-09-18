import React, {Component} from 'react';
import { SingleTableContainer, TableTitle, SourceLink } from './style.js'


class Table extends Component {
    state = {
        title: 'Table',
        table: require('./table.png'),
        source: 'https://static1.squarespace.com/static/5bc50618ab1a624d324ecd81/t/5be5fda240ec9a789e87e811/1541799360838/GoodFoodforAllAgenda2018.pdf', 
    }

    render(){
        return(
            <div>
                <SingleTableContainer>
                    {/* <TableTitle>
                        {this.state.title}
                    </TableTitle> */}
                    <img src={this.state.table}/>
                </SingleTableContainer>
                {/* <SourceLink>
                    <a href={this.state.source} target="_blank">Click here to download.</a>
                </SourceLink> */}
            </div>
        )
    }
}

export default Table
