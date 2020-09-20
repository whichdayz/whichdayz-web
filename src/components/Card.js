import React from 'react' 





export const Card = ({ imageURL, description, name, title, size }) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <figure className={`image is-${size}`}>
                    <img src={imageURL} alt='Profile'/>
                </figure>
            </div>
            <div className='card-content'>
                <div className='media-content'>
                    <p className='title is-4 is-centered'>{name}</p>
                    <p className='subtitle is-4 is-centered'>{title}</p>
                </div>
                <div className='content'>
                    {description}
                </div>
            </div>
        </div>
    )
}