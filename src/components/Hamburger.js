import React from 'react'

export const Hamburger = ({hamburgerName, changeClassName}) => {
    return (
        <div role="button" aria-label="menu" aria-expanded='false' className={`navbar-burger burger ${hamburgerName}`} data-target="navbarBasicExample" onClick={changeClassName}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    )
}
