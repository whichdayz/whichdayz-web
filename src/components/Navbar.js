import React, { useState, useContext } from 'react'
import logo from '../images/logo.png'
import app from '../firebase'
import { UnAuthenticatedNav,  AuthenticatedNav } from './shared'
import { AuthContext } from '../contexts/AuthContext'
import { ThemeContext } from '../contexts/ThemeContext'

export const Navbar = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext)
    const { currentUser, setCurrentUser } = useContext(AuthContext)
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
        .then(() => {
          setCurrentUser(null)
        })
        .then(function() {
            console.log('sign out successful')
        })
        .catch(function(error) {
            alert(error)
        });
    }
    const toggleNav = () => {
      console.log(isLightTheme, light, dark, toggleTheme);
        return currentUser ? <AuthenticatedNav
                                logo={logo} 
                                hamburgerName={hamburgerName} 
                                changeClassName={changeClassName}
                                signOut={signOut}
                                currentUser={currentUser}
                                isLightTheme={isLightTheme}
                                light={light}
                                dark={dark}
                                toggleTheme={toggleTheme}
                            /> 
                            : 
                            <UnAuthenticatedNav 
                                logo={logo} 
                                hamburgerName={hamburgerName} 
                                changeClassName={changeClassName}
                                isLightTheme={isLightTheme}
                                light={light}
                                dark={dark}
                                toggleTheme={toggleTheme}
                            />
    }
    return (
        toggleNav()
    )
}