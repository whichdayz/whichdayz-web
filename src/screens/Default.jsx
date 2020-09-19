import React from 'react'
import { Title, Button } from '../components'
export const Default = ({ history, location }) => {
    return (
        <section class="hero is-success is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <Title 
                        title='404 error page not found' 
                        alignment='centered' 
                        transformation='capitalized'
                        size='1'
                    />
                    <h3 
                        className="subtitle has-text-centered is-size-3">
                            The requested URL<span className="has-text-danger"> {location.pathname}</span> was not found
                    </h3>
                    <Button 
                        title='Go Home' 
                        color='primary'
                        onClick={() => history.push('/')} 
                        className='is-block is-light' 
                        style={{ margin: 'auto' }}
                    />
                </div>
            </div>
        </section>
    )
}
