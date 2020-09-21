import React, {useContext} from 'react'
import { Switch, Route } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext'
import { Default } from '../screens'
import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Team from '../screens/Team/Team';
import FirebaseSignIn from '../screens/Firebase/FireBaseSignIn'
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'
import { Landing } from '../screens/Landing/Landing';


export const Routes = () => {
    const { currentUser } = useContext(AuthContext)
    return (
        <Switch>
            {/* Home Page */}
            <Route exact path='/' render={props => (currentUser ? <Home/> : <Landing/>)}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/join' component={SignUp}/>

            {/* Team Page */}
            <Route exact path='/team' component={Team}/>
            {/* About Route */}
            <Route exact path='/about' component={About}/>
            {/* Signin Route */}
            <Route exact path='/SignIn' component={FirebaseSignIn} />
            {/* Page not found */}
            <Route component={Default}/>
        </Switch>
    )
}
