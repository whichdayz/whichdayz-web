import React, { useState, useContext } from 'react'
import logo from '../images/logo.png'
import './styles/NavBar.scss'
import { AuthContext } from '../contexts/AuthContext'
import { ThemeContext } from '../contexts/ThemeContext'
import app from '../firebase'
import { UnAuthenticatedNav,  AuthenticatedNav } from './shared'
import { SignUpModal } from './SignUpModal'


export const Navbar = () => {
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext)
    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const [hamburger, setHamburger] = useState(false)
    const [hamburgerName, setHamburgerName] = useState('')
    const changeClassName  = () => {
        setHamburger(!hamburger)
        return hamburger ? setHamburgerName('is-active') : setHamburgerName('')
    }
    const [modal, setModal ] = useState(false)
    const signOut = () => {
        app
            .auth()
            .signOut()
        .then(function() {
            setCurrentUser(null)
        })
        .catch(function(error) {
            console.log(error)
        });
    }

    const modalRender = () => {
        return <SignUpModal
            className={modal ? 'modal is-active' : 'modal'} 
            onClick={() => setModal(false)} 
            />  
    }
    const toggleNav = () => {
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
                                onClick={() => setModal(true)}
                                isLightTheme={isLightTheme}
                                light={light}
                                dark={dark}
                                toggleTheme={toggleTheme}
                            />
    }
    return (
        
        <>
        {toggleNav()},
        {modalRender()}
        </> 
    )
}