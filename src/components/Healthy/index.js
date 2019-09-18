import React from 'react';
import IntroCopy from '../IntroCopy';
import Table from '../Table'
import DoubleComponent from '../DoubleComponent';

const Healthy = ({activeHeader}) => {
    return (
        <div>
            <IntroCopy activeHeader={activeHeader}/>
            <DoubleComponent />
        </div>
    )
}

export default Healthy;