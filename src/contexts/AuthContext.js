import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser)
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
// class AuthContextProvider extends Component {
//     state = {
//         isAuthenticated: false,
//         user: null,
//     }
//     signOut = () => {
//         this.setState({
//             isAuthenticated: false,
//             user: null
//         })
//         firebase
//             .auth()
//             .signOut()
//             .then(function() {
//                 console.log('sign out successful')
//             })
//             .catch(function(error) {
//                 console.log('redirect failed')
//         });
//     }
//     render() {
//         return (
//             <AuthContext.Provider 
//                 value={
//                     {
//                     ...this.state, 
//                     signOut: this.signOut
//                     }
//                 }
//             >
//                 {this.props.children}
//             </AuthContext.Provider>
//         );
//     }
// }

// export default AuthContextProvider