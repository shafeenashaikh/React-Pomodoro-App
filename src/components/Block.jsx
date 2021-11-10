import React from 'react'

const Block= ({param, number}) => {
    return (
        <div>
            <h1>{number}</h1>
            <h1>{param}</h1>
        </div>
    )
}

export default Block
