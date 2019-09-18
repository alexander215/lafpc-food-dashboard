import React from 'react';

const IntroCopy = ({activeHeader, valueDetails}) => {
    return (
        <div>
        {activeHeader}
            {valueDetails}
        </div>
    )
}

export default IntroCopy;