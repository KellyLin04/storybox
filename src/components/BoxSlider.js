import { useState } from 'react'
import Box from './Box.js'

function BoxSlider(){
    const [boxes, setBoxes] = useState([
        {
            box_id: '1',
            contents: 'none',
        },
        {
            box_id: '2',
            contents: 'none',
        }
    ])
    return(
        <div>
        {boxes.map((box) => (
            <Box box_id = {box.box_id} content = {box.contents}/>
        ))}
        </div>
    )
}

export default BoxSlider;