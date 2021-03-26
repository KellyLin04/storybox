import React from 'react'
import getUser from '../utils/firestore.js'

const Box = ({box_id, content}) => {
    return (
        <div className = "box">
            <div className = "box-text">
                <p>I'm a box!</p>
                <p>{box_id}</p>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Box;


