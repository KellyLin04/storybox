import React, { useState } from 'react'
import Box from './Box.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function BoxSlider(){
    const [boxes, setBoxes] = useState([
        {
            box_id: '101798993267056885108', // andy's box hardcode
            contents: 'none',
        },
        {
            box_id: '108304798411370817374', // doris's box hardcode
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

    //save box to data base
    function saveLikedBox(){
        console.log("save to database");
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

        <div className="box-slider">
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
            <br></br>
            <div className="box-slider-buttons">

                <button className = "button1" onClick={nextSlide}>Decline</button>
                <button className = "button2" onClick={saveLikedBox}>Accept</button>
            </div>
                <button className = "button1" onClick={nextSlide}>Decline</button>
                <button className = "button2" onClick={saveLikedBox}>Accept</button>

            </div>
        </div>
    )
}

export default BoxSlider;