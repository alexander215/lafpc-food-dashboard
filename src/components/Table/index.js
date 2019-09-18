import React, {Component} from 'react';

class Table extends Component {
    state = {
        masterSheet: []
    };

    componentDidMount(){
        console.log(this.props, 'this.props in componentDidMount')
        const msRef = this.props.db.database().ref().child("masterSheet")
        const childRef = msRef.child("0")
        console.log(childRef, 'childRef in componentDidMount')
        childRef.on("value", snapshot=>{
            console.log(snapshot, "snpashot")
            this.setState({
                masterSheet: snapshot.val()
            })
        })
    }

    render(){
        console.log(this.props.db)
        console.log(this.state.masterSheet)
        return(
        <div>
            {this.state.masterSheet}
        </div>
        )
    }
}

export default Table
