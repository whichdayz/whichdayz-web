import React from 'react' 
import './Carousel.scss'
import Desktop from '../../../images/desktop.jpg'
import Tablet from '../../../images/tablet.jpg'
import Slider from 'react-slick';



export const FadeCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        fade: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    }
    return (
        <Slider {...settings}>
            <img src={Desktop} alt='desktop'/>
            <img src={Tablet} alt='tablet'/>
        </Slider>
    )
}