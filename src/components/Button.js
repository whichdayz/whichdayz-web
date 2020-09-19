import React from 'react'
// title -> button title
// className -> additional classnames
// color -> button color
// size -> button size (small, normal, medium, large)
// onClick -> click function
// style -> custom styling

export const Button = ({ title, className, color, size, onClick, style }) => {
    return (
    <button className={`button ${className} is-${color} is-${size}`} onClick={onClick} style={style}>
        {title}
    </button>
    )
}
