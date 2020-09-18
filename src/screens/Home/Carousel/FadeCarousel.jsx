import React from 'react' 
import './Carousel.scss'
import Desktop from '../../../images/desktop.jpg'
import Tablet from '../../../images/tablet.jpg'
import Slider from 'react-slick';



export const FadeCarousel = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    }
    return (
        <Slider {...settings}>
            <img src={Desktop}/>
            <img src={Tablet}/>
        </Slider>
    )
}