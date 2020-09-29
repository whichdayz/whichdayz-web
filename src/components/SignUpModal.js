import React, { useState } from 'react'
import * as firebase from 'firebase/app'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './styles/SignUpModal.scss'

export const SignUpModal = ({ className, onClick, currentUser }) => {

    const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: '/',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
        }
    }
    return (
        
        <div className={className}>
            <div className='modal-background'>
                <div class='modal-content px-6 py-6 has-background-white-ter is-centered is-round'>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
                <button onClick={onClick}class="modal-close is-large has-background-danger-dark" aria-label="close"></button>
                </div>
                
            </div>
        </div>

    )
}