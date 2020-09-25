import React from 'react';
// import '../Home/Carousel/FadeCarousel'
// import { FadeCarousel } from './Carousel/FadeCarousel'
import { useHistory } from 'react-router';
import { Button, Subtitle, Title } from '../../components'

export default function UserHome() {
    const history = useHistory();
    return (
        <>
            <div>
                <Subtitle title='welcome non freelancer' alignment='centered' color='primary' size={1} transformation='uppercase'/>
                <Title title='coming soon' alignment='centered' color='primary' size={1} transformation='uppercase'/>
                <Subtitle title='stay tuned!' alignment='centered' color='primary' size={1} transformation='uppercase'/>
                <Button title='Go to Profile' onClick={() => history.push('/profile')} />
            </div>
            {/* <FadeCarousel/> */}
        </>
    )
}