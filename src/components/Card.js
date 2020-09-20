import React from 'react' 
import './styles/Card.scss'

export const Card = ({ imageURL, description, name, title, size }) => {
    return (
        <div className='card margin'>
            <div className='card-image'>
                <figure className={`image is-${size}`}>
                    <img src={imageURL} alt='Profile'/>
                </figure>
            </div>
            <div className='card-content'>
                <div className='media-content'>
                    <p className='title is-4'>{name}</p>
                    <p className='subtitle is-4'>{title}</p>
                </div>
                <div className='content'>
                    {description}
                </div>
            </div>
        </div>
    )
}