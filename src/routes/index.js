import React, {useContext} from 'react'
import { Switch, Route } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext'
import { Default } from '../screens'
import UserHome from '../screens/UserHome/UserHome';
import FreelancerHome from '../screens/FreelancerHome/FreelancerHome';
import About from '../screens/About/About';
import Team from '../screens/Team/Team';
import FirebaseSignIn from '../screens/Firebase/FireBaseSignIn'
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'
import { Landing } from '../screens/Landing/Landing';
import { ThemeContext } from '../contexts/ThemeContext';


export const Routes = () => {
    const { currentUser } = useContext(AuthContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    console.log(theme);
    return (
        <main style={{background: `${theme.bg}`}}>
            <Switch>
                {/* Home Page */}
                {/* If current user is not validated he will see Landing else if he is a freelancer he will FreelanceHome else he will see UserHome */}
                <Route 
                    exact path='/' 
                    render={() => (currentUser === null ? <Landing/> : currentUser.displayName === 'yes' ?  <FreelancerHome/> : <UserHome/>)}
                />
                <Route 
                    exact path='/login' 
                    component={Login}
                />
                <Route 
                    exact path='/join' 
                    component={SignUp}
                />

                {/* Team Page */}
                <Route 
                    exact path='/team' 
                    component={Team}
                />
                {/* About Route */}
                <Route 
                    exact path='/about' 
                    component={About}
                />
                {/* Signin Route */}
                <Route 
                    exact path='/SignIn' 
                    component={FirebaseSignIn}
                />
                {/* Page not found */}
                <Route component={Default}/>
            </Switch>
        </main>
    )
}
