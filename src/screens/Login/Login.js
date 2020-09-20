import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { Title } from '../../components';

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/')
            } catch (error) {
                alert(error)
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to ='/'/>
    }
    return (
        <div>
            <Title title='Sign Up' />
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name="email" type='email' placeholder='Email'/>
                </label>
                <label>
                    Password
                    <input name="password" type='password' placeholder='Password'/>
                </label>
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default withRouter(Login)
