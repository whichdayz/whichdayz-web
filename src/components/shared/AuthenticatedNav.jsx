import React from 'react'
import { Link } from 'react-router-dom'
import { Hamburger, Button } from '../index'

export const AuthenticatedNav = ({ logo, hamburgerName, changeClassName, currentUser, signOut, isLightTheme, light, dark, toggleTheme }) => {
    const theme = isLightTheme ? light : dark
    return (
        <nav className={`navbar is-spaced is-${theme.nav}`} role="navigation" aria-label="main navigation">
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
                            <h1>{`Welcome ${currentUser.email}`}</h1>
                                <div className="buttons">
                                    <Button
                                        title={isLightTheme ? 'Light': 'Dark'}
                                        className='has-text-weight-bold has-text-centered'
                                        color={theme.drkModeBtn}
                                        onClick={toggleTheme}
                                    />
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
