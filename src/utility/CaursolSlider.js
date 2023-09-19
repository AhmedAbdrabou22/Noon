import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SliderOne from '../Images/cat1.avif'
import SliderTwo from '../Images/cat2.avif'
import SliderThree from '../Images/cat3.avif'
import SliderFour from '../Images/cat4.avif'
import SliderFive from '../Images/cat5.avif'
const CaursolSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} className="caursol">
                <Carousel.Item>
                    <img src={SliderOne} alt="data" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={SliderTwo} alt="data" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={SliderThree} alt="data" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={SliderFour} alt="data" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={SliderFive} alt="data" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CaursolSlider
