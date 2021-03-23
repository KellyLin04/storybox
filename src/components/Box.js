import React from 'react'

const Box = ({box_id, content}) => {
    return (
        <div>
            <p>I'm a box!</p>
            <p>{box_id}</p>
            <p>{content}</p>
        </div>
    )
}

export default Box;


