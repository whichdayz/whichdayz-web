import React from 'react'
import './Home.scss'
import '../Home/Carousel/FadeCarousel'
import { FadeCarousel } from '../Home/Carousel/FadeCarousel'
import { Subtitle, Title } from '../../components'

export default function Home() {
    return (
        <>
            <div className="home-container">
                <Subtitle title='our new site is' alignment='centered' color='primary' size={1} transformation='uppercase'/>
                <Title title='coming soon' alignment='centered' color='primary' size={1} transformation='uppercase'/>
                <Subtitle title='stay tuned!' alignment='centered' color='primary' size={1} transformation='uppercase'/>
            </div>
            <FadeCarousel/>
        </>
    )
}