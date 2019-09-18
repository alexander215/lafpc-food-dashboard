import React from 'react';
import IntroCopy from '../IntroCopy';

const Fair = ({activeHeader, valueDetails}) => {
    return (
        <div>
            <IntroCopy activeHeader={activeHeader} valueDetails={valueDetails}/>
        </div>
    )
}

export default Fair;