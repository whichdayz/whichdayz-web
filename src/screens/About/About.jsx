import React from 'react';
import Typical from 'react-typical';
// import Typist from 'react-typist'

export default function About() {




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
                    </div>
                </div>
            </section>
        </div>
    )
}