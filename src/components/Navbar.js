import React, { useState, useContext } from 'react'
import logo from '../images/logo.png'
import { AuthContext } from '../contexts/AuthContext'
import app from '../firebase'
import { UnAuthenticatedNav,  AuthenticatedNav } from './shared'

export const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
    const [hamburger, setHamburger] = useState(false)
    const [hamburgerName, setHamburgerName] = useState('')
    const changeClassName  = () => {
        setHamburger(!hamburger)
        return hamburger ? setHamburgerName('is-active') : setHamburgerName('')
    }
    const signOut = () => {
        app
            .auth()
            .signOut()
        .then(function() {
            console.log('sign out successful')
        })
        .catch(function(error) {
            console.log(error)
        });
    }
    const toggleNav = () => {
        return currentUser ? <AuthenticatedNav
                                logo={logo} 
                                hamburgerName={hamburgerName} 
                                changeClassName={changeClassName}
                                signOut={signOut}
                                currentUser={currentUser}
                            /> 
                            : 
                            <UnAuthenticatedNav 
                                logo={logo} 
                                hamburgerName={hamburgerName} 
                                changeClassName={changeClassName}
                            />
    }
    return (
        toggleNav()
    )
}