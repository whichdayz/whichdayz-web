import React, { Component } from "react"
import './Firebase.scss'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyAToTdC6sGDAasB7Hyv-bggticBmOwmfhs",
  authDomain: "whichdayz-ce21e.firebaseapp.com"
})

export default class FirebaseSignIn extends Component {
  constructor(props) {
    super(props) 
  
  this.state = { 
    isSignedIn: false,
    user: '' 
  }
}
  uiConfig = {
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

  // componentDidMount = () => {

  //   const { setUser } = this.props;

  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({ isSignedIn: !!user })
  //   })
  // }

  

  render() {
    return (
      <div className="container has-text-centered is-centered">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.email}</h1>
          </span>
        ) : (
          <>
          <p class='title is-size-2'>Welcome!</p>
          <p class='subtitle is-size-2'>Please Sign Up/Sign In Below</p>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          </>
        )}
      </div>
    )
  }
}
