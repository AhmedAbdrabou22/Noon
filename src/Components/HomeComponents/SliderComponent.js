import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SliderOne from '../../Images/slider1.avif'
import SliderTwo from '../../Images/slider2.gif'
import SliderThree from '../../Images/slider3.avif'
import SliderFour from '../../Images/slider4.avif'
import SliderFive from '../../Images/slider5.avif'
import SliderSix from '../../Images/slider6.gif'
import SliderSeven from '../../Images/slider7.avif'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllCategory } from '../../redux/actions/GetAllCategoryAction';
import Spinner from 'react-bootstrap/Spinner';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCom = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])
    const categories = useSelector(state => state.CategoryReducer.category)

    if (categories) {
        console.log(categories);
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
                dots: true,
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='' style={{ padding: "15px", borderRadius: "10px" , background:"white" }}>
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
                <Carousel.Item>
                    <img src={SliderSix} alt="data" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={SliderSeven} alt="data" />
                </Carousel.Item>
            </Carousel>


            <Slider {...settings} className='slider-item mt-3'>
                {
                    categories.data ? (
                        categories.data.map((item, index) => {
                            return (<div className='categoryItem'>

                                <img src={item.image} alt="1" />
                                <p>{item.title_ar}</p>

                            </div>)
                        })
                    ) : (<Spinner animation="grow" />)
                }
            </Slider>
        </div>
    )
}

export default SliderCom
