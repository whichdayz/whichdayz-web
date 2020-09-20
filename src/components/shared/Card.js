import React from 'react' 





export const Card = ({ imageURL, description, name, title, size }) => {
    return (
        <div class='card'>
            <div class='card-image'>
                <figure class={`image is-${size}`}>
                    <img src={imageURL} alt='Profile Image'/>
                </figure>
            </div>
            <div class='card-content'>
                <div class='media-content'>
                    <p class='title is-4 is-centered'>{name}</p>
                    <p class='subtitle is-4 is-centered'>{title}</p>
                </div>
                <div class='content'>
                    {description}
                </div>
            </div>
        </div>
    )
}