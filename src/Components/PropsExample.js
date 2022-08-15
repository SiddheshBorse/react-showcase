import React from 'react'

function PropsExample(props) {
    const { name, skill } = props
    return (
        <div>
            <h1>Hello my name is {name} and I am learning {skill}</h1>
        </div>
    )
}

export default PropsExample