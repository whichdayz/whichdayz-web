import React, { Component } from 'react'
import { NavLink, Redirect, useHistory } from "react-router-dom";
import '../styles/NavBar.scss'
import firebase from 'firebase'
const logo = require('../../images/logo.png')


export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            isSignedIn: false,
            modal: false,
            buttonClassName: 'circle icon'
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                let user = firebase.auth().currentUser.displayName
                this.setState({
                    user: user,
                    isSignedIn: true
                })
                console.log('user is logged in')
            }
            else {
                console.log('user not logged in')
            }
        })
    }


    changeClassName = () => {
        if(this.state.buttonClassName === 'circle icon') {
            this.setState({ buttonClassName: 'circle icon close' })
        }else if(this.state.buttonClassName === 'circle icon close') {
            this.setState({ buttonClassName: 'circle icon' })
        }
    }
    handleModal = () => {
        this.changeClassName();
        this.setState({ modal: !this.state.modal })
    }

    renderNavModal = () => {
        if (this.state.modal) {
            return (
                <div className="modal">
                    <NavLink exact to='/' onClick={() => this.handleModal()}>Home</NavLink>
                    <NavLink exact to='/about' onClick={() => this.handleModal()}>About</NavLink>
                    <NavLink exact to='/SignIn' onClick={() => this.handleModal()}>{this.state.isSignedIn ? 'Sign Out' : 'Sign In'}</NavLink>
                </div>
            )
        }
    }
    
    signOut = () => {
        this.setState({
            isSignedIn: false
        })
        firebase.auth().signOut().then(function() {
            console.log('sign out successful')
          }).catch(function(error) {
            console.log('redirect failed')
          });
    }

    componentDidUpdate = () => {
        return (
            <Redirect to ='/SignIn'/>
        )
    }

    
    renderMainLinks = () => {
        const { isSignedIn } = this.state 
        return (
                    <div className="navbar-brand">
                        
                            <div className="image is-flex self-centered">
                                <NavLink exact to='/'>
                                <img src={logo} alt="logo" className="logo-image"/>
                               </NavLink>
                            </div>
                        <div id="wrapper" onClick={() => this.handleModal()}>
                            <div className={this.state.buttonClassName}>
                                <span className="line top"></span>
                                <span className="line middle"></span>
                                <span className="line bottom"></span>
                            </div>
                        </div>
                        <div className="navbar-menu" id='navbarMenuHeroC'>
                            <div className="navbar-end is-flex">
                                <NavLink exact to='/' className='black' activeClassName='white'>Home</NavLink>
                                <NavLink exact to='/about' className='black' activeClassName='white'>About</NavLink>
                                {isSignedIn ? <a className='black' onClick={() => this.signOut()}>Sign Out </a> : <NavLink exact to='/SignIn' className='black' activeClassName='white'>Sign In</NavLink>}
                            </div>
                        </div>
                    </div>
        )
    }
    render() {
        return (
            <>
            {this.renderMainLinks()}
            {this.renderNavModal()}
            </>
        )
    }
}