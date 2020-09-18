import React, { useState } from 'react'
import './Home.scss'
import '../Home/Carousel/FadeCarousel'
import { FadeCarousel } from '../Home/Carousel/FadeCarousel'

export default function Home() {

    const [hovered, isHovered] = useState(false);

    return (
        <>
        <section className='hero is-fullheight' id='home'>
                <div className="home-container">
                    <h1 className="subtitle is-uppercase has-text-centered has-text-primary is-size-1">our new site is</h1>
                    <h1 className="title is-uppercase has-text-centered has-text-primary is-size-1">coming soon</h1>
                    <h1 className="subtitle is-uppercase has-text-centered has-text-primary is-size-1">stay tuned!</h1>
                </div>
            </section>
        <FadeCarousel/>
        </>

    )
}