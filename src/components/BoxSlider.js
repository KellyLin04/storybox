import React, { useState } from 'react'
import Box from './Box.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

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


    const [current, setCurrent] = useState(0);
    const length = boxes.length;

    const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(boxes) || boxes.length <= 0) {
    return null;
    }

    return(
        <div className = "box-container">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            {boxes.map((box, index) => {
                return (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === current && (
                    <Box box_id = {box.box_id} content = {box.contents}/>
                    )}
                </div>
                );
            })}
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        </div>
    )
}

export default BoxSlider;