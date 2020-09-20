import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { Button } from './Button'
import { Hamburger } from './Hamburger'
import { AuthContext } from '../contexts/AuthContext'
import app from '../firebase'

// import firebase from 'firebase'

export const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
    const [modal, setModal] = useState(false)
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
    const toggleModal = () => {
        setModal(!modal)
    }
    const toggleNav = () => {
        if (currentUser === null) {
            return (
                    <nav className="navbar is-spaced is-primary" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <Link to='/' className='navbar-item'>
                                <img 
                                    src={logo} 
                                    alt='logo' 
                                    style={{maxHeight: '2.5em', display: 'block',margin: 'auto', borderRadius: '40%'}}
                                />
                            </Link>
                            <Hamburger 
                                changeClassName={changeClassName} 
                                hamburgerName={hamburgerName} 
                            />
                        </div>
                        <div className={`${hamburgerName} navbar-menu`}>
                            <div className="navbar-start">
                                <Link to='/' className='navbar-item'>Home</Link>
                                <Link to='/team' className='navbar-item'>Team</Link>
                                <div className="navbar-item has-dropdown is-hoverable">
                                    <div className="navbar-link">
                                    More
                                    </div>
                                    <div className="navbar-dropdown">
                                        <Link to='/about' className='navbar-item'>About</Link>
                                        <Link to='/jobs' className='navbar-item'>Jobs</Link>
                                        <Link to='/contact' className='navbar-item'>Contact</Link>
                                            <hr className="navbar-divider"></hr>
                                        <Link to='/report' className='navbar-item'>Report an issue</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons">
                                        <Button 
                                            title='Sign In' 
                                            className='is-light has-text-weight-bold has-text-centered' 
                                            color='primary'
                                            onClick={() => window.location.href='http://localhost:3000/login'}
                                        />
                                        <Button 
                                            title='Get Started' 
                                            className='has-text-weight-bold has-text-centered' 
                                            color='success'
                                            onClick={toggleModal}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
            )
        } else {
            return  (
                <nav className="navbar is-spaced is-primary" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link to='/' className='navbar-item'>
                            <img 
                                src={logo} 
                                alt='logo' 
                                style={{maxHeight: '2.5em', display: 'block',margin: 'auto', borderRadius: '40%'}}
                            />
                        </Link>
                        <Hamburger 
                            changeClassName={changeClassName} 
                            hamburgerName={hamburgerName} 
                        />
                    </div>
                    <div className={`${hamburgerName} navbar-menu`}>
                        <div className="navbar-start">
                            <Link to='/' className='navbar-item'>Home</Link>
                            <Link to='/team' className='navbar-item'>Team</Link>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <div className="navbar-link">
                                More
                                </div>
                                <div className="navbar-dropdown">
                                    <Link to='/about' className='navbar-item'>About</Link>
                                    <Link to='/jobs' className='navbar-item'>Jobs</Link>
                                    <Link to='/contact' className='navbar-item'>Contact</Link>
                                        <hr className="navbar-divider"></hr>
                                    <Link to='/report' className='navbar-item'>Report an issue</Link>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Button 
                                        title='Sign Out' 
                                        className='is-light has-text-weight-bold has-text-centered' 
                                        color='danger'
                                        onClick={signOut}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            )
        }
    }
    return (
        toggleNav()
    )
}