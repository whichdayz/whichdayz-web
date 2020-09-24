import React, { useState, useContext } from 'react'
import logo from '../images/logo.png'
import app from '../firebase'
import { UnAuthenticatedNav,  AuthenticatedNav } from './shared'
import { AuthContext } from '../contexts/AuthContext'
import { ThemeContext } from '../contexts/ThemeContext'
import { useHistory } from 'react-router'

export const Navbar = () => {
    const history = useHistory();
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext)
    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const [hamburger, setHamburger] = useState(false)
    const [hamburgerName, setHamburgerName] = useState('')
    // const [modalOpen, setModal ] = useState(false)
    const changeClassName  = () => {
        setHamburger(!hamburger)
        return hamburger ? setHamburgerName('is-active') : setHamburgerName('')
    }
    const signOut = () => {
        app
            .auth()
            .signOut()
            .then(() => history.push('/'))
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

    // const modalRender = () => {
    //     {
    //     return <SignUpModal
    //         className={modalOpen ? 'modal is-active' : 'modal'} 
    //         />  
    //     }
    // }
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
                                modalClick={modalClick}
                            />
    }
    return (
        toggleNav(),
    )
        // modalRender()
    //     <>
    //     {currentUser ? <AuthenticatedNav
    // const toggleNav = () => {
    //   console.log(isLightTheme, light, dark, toggleTheme);
    //     return currentUser ? <AuthenticatedNav
    //                             logo={logo} 
    //                             hamburgerName={hamburgerName} 
    //                             changeClassName={changeClassName}
    //                             signOut={signOut}
    //                             currentUser={currentUser}
    //                             isLightTheme={isLightTheme}
    //                             light={light}
    //                             dark={dark}
    //                             toggleTheme={toggleTheme}
    //                         /> 
    //                         : 
    //                         <UnAuthenticatedNav 
    //                             logo={logo} 
    //                             hamburgerName={hamburgerName} 
    //                             changeClassName={changeClassName}
    //                             onClick={() => setModal(true)}
    //     /> }
    //     <SignUpModal
    //         className={modalOpen ? 'modal is-active' : 'display-none'}
    //         onClick={() => setModal(false)} 
    //     /> 
    //     </> 
    //                             isLightTheme={isLightTheme}
    //                             light={light}
    //                             dark={dark}
    //                             toggleTheme={toggleTheme}
    //                         />
    // }
    // return (
    //     toggleNav()
    // )
}