import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
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

const Slider = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])
    const categories = useSelector(state => state.CategoryReducer.category)

    if (categories) {
        console.log(categories);
    }
    return (
        <div className='shadow' style={{ paddingBottom: "15px", borderRadius: "10px" }}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={SliderOne} alt="sliderImage" style={{ width: "100%" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SliderTwo} alt="sliderImage" style={{ width: "100%" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SliderThree} alt="sliderImage" style={{ width: "100%" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SliderFour} alt="sliderImage" style={{ width: "100%" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SliderFive} alt="sliderImage" style={{ width: "100%" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SliderSix} alt="sliderImage" style={{ width: "100%" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SliderSeven} alt="sliderImage" style={{ width: "100%" }} />
                </SwiperSlide>
            </Swiper>

            <Swiper
                className='mt-4'
                spaceBetween={5}
                slidesPerView={12}
                
            >
                {
                    categories && categories.data ? (
                        categories.data.map((item) => {
                            return (
                                <SwiperSlide className='slider'>
                                    <img src={item.image} alt="categoryOne" />
                                </SwiperSlide>
                            )
                        })
                    ) : null
                }
            </Swiper>
        </div>
    )
}

export default Slider
