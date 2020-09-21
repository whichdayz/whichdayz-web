import React, { useState } from 'react'
import * as firebase from 'firebase/app'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './styles/SignUpModal.scss'

export const SignUpModal = ({ className, onClick }) => {

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
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
                <button
                onClick={onClick}
                class='delete is-large'
                />
            </div>
        </div>

    )
}