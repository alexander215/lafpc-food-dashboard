import React from 'react';

const IntroCopy = ({activeHeader, valueDetails}) => {
    return (
        <div>
            <h1>{activeHeader}</h1>
            <p>{valueDetails}</p>
        </div>
    )
}

export default IntroCopy;