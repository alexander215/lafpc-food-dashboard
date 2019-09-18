import React from 'react';
import IntroCopy from '../IntroCopy';
import Table from '../Table'

const Healthy = ({activeHeader, valueDetails}) => {
    return (
        <div>
            <IntroCopy activeHeader={activeHeader} valueDetails={valueDetails}/>
        </div>
    )
}

export default Healthy;