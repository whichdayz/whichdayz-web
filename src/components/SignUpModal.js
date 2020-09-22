import React, { useState } from 'react'
import * as firebase from 'firebase/app'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './styles/SignUpModal.scss'
import SignUp from '../screens/SignUp/SignUp'

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
                <div class='modal-content'>
                <button
                onClick={onClick}
                class='delete is-large'
                />
                <SignUp/>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
                </div>
                {/* <button onClick={onClick}class="modal-close is-large" aria-label="close"></button> */}
            </div>
        </div>

    )
}