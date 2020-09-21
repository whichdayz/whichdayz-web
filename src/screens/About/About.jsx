import React, { useEffect, useState } from 'react'
import './About.scss'
import Typical from 'react-typical'
import Typist from 'react-typist'

export default function About() {


   const [ finished, setFinished ] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setFinished('true')
        }, 10000);
    }, [])


    return (
        <div className='about-container mt-5' id='about'>
            <section class="hero is-medium is-primary is-bold">
                <div class="hero-body">
                    <div class="container has-text-centered">
                    <h1 class="is-size-3">
                        Search for your favorite skilled{' '}
                        <Typical
                            wrapper='b'
                            steps={[
                                'Barista', 2000,
                                'Bartender', 1000,
                                'Waitress', 1000,
                                'DJ', 1000,
                                'Professional'
                            ]}
                        />
                    </h1>
                    <h1
                    class="is-size-3"
                    >{ finished ? 
                    <Typist
                    cursor={{
                        show: false
                    }}
                    > 
                        by location, day and time
                    </Typist> : null}
                    </h1>
                    {/* <h2 class="subtitle">
                        WhichDayZ is a mobile application which taps into your favorite skilled professional schedule such as barbers, baristas, hair stylists, etc.<br></br>Their flexibility can vary from different venues and time frames.<br></br>
                         WhichDayZ allows you to follow skilled profesionals of your desire so there is no confusion on when and what time to go visit
                    </h2> */}
                    </div>
                </div>
            </section>
        </div>
    )
}