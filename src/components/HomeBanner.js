import React from 'react';
import Typical from 'react-typical';
// import Typist from 'react-typist';


export const HomeBanner = () => {
    return (
        <div className='pt-5'>
            <section className="hero is-medium is-primary is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                    <h1 className="is-size-3">
                        Search for your favorite skilled{' '}
                        <Typical
                            wrapper='b'
                            steps={[
                                'Barista ☕️ ', 2500,
                                'Bartender 🥂  ', 2500,
                                'DJ 🎧  ', 2500,
                                'Freelancer 🙋‍♀️', 2500
                            ]}
                            loop={Infinity}
                        />
                    </h1>
                    {/* <h1
                    className="is-size-3"
                    >
                    <Typist> 
                        by location, day and time
                    </Typist>
                    <Typist>
  <span> First Sentence </span>
  <Typist.Backspace count={8} delay={200} />
  <span> Phrase </span>
</Typist>
                    </h1> */}
                    {/* <h2 className="subtitle">
                        WhichDayZ is a mobile application which taps into your favorite skilled professional schedule such as barbers, baristas, hair stylists, etc.<br></br>Their flexibility can vary from different venues and time frames.<br></br>
                         WhichDayZ allows you to follow skilled profesionals of your desire so there is no confusion on when and what time to go visit
                    </h2> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
