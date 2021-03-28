import React, { useState, useEffect } from 'react'
import Box from './Box.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {saveLikedBox as save} from '../utils/firestore.js'
import {getAllBoxes as getAll} from '../utils/firestore.js'

function BoxSlider(){

    const [boxes, setBoxes] = useState([])
    const [current, setCurrent] = useState(0);
    const length = boxes.length;

    useEffect(()=>{
        var arr = getAll();
        setBoxes(arr);
        console.log("hi");
        console.log(boxes);
    }, []);

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
    function handleAcceptClick() {
        // console.log('click happened');
        var one = window.MY_ID
        // console.log(window.MY_ID)
        var two = boxes[current].box_id;
        save({user_id: one, liked_id: two});
        nextSlide();
        // var arr = getAll();
        // console.log({arr})
    }

    return(
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
                <button className = "button1" onClick={nextSlide}>decline</button>
                
                <button className = "button2" onClick={handleAcceptClick}>accept</button>   
            </div>
        </div>
    )
}

export default BoxSlider;