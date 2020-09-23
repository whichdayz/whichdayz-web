import React, { useState, useContext } from 'react'
import logo from '../images/logo.png'
import './styles/NavBar.scss'
import { AuthContext } from '../contexts/AuthContext'
import app from '../firebase'
import { UnAuthenticatedNav,  AuthenticatedNav } from './shared'
import { SignUpModal } from './SignUpModal'


export const Navbar = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const [hamburger, setHamburger] = useState(false)
    const [hamburgerName, setHamburgerName] = useState('')
    const changeClassName  = () => {
        setHamburger(!hamburger)
        return hamburger ? setHamburgerName('is-active') : setHamburgerName('')
    }
    const [modalOpen, setModal ] = useState(false)
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
        {
        return <SignUpModal
            className={modalOpen ? 'modal is-active' : 'modal'} 
            />  
        }
    }
    // const toggleNav = () => {
    //     return currentUser ? <AuthenticatedNav
    //                             logo={logo} 
    //                             hamburgerName={hamburgerName} 
    //                             changeClassName={changeClassName}
    //                             signOut={signOut}
    //                             currentUser={currentUser}
    //                         /> 
    //                         : 
    //                         <UnAuthenticatedNav 
    //                             logo={logo} 
    //                             hamburgerName={hamburgerName} 
    //                             changeClassName={changeClassName}
    //                             modalClick={modalClick}
    //                         />
    // }
    return (
        // toggleNav(),
        // modalRender()
        <>
        {currentUser ? <AuthenticatedNav
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
                                onClick={() => setModal(true)}
        /> }
        <SignUpModal
            className={modalOpen ? 'modal is-active' : 'display-none'}
            onClick={() => setModal(false)} 
        /> 
        </> 
    )
}