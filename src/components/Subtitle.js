import React from 'react'
// Props
// title -> title string
// color -> text color
// size -> 1-7 (largest : 1) Rule of thumb: difference of 2 between title and subtitle
// alignment -> centered, left, right, justified
// transformation -> capitalized, lowercase, uppercase, italic
// weight -> font weight (light, normal, medium, semibold, bold)
// fontFamily -> (sans-serif, monospace, primary, secondary)

export const Subtitle = () => ({ title, color, size, alignment, transformation, weight, fontFamily  }) => {
    return (
        <h2 className={`subtitle has-text-${color} is-size-${size} has-text-${alignment} is-${transformation} has-text-weight-${weight} is-family-${fontFamily}`}>
            {title}
        </h2>
    )
}
