import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Title } from '../../components';
import app from '../../firebase'

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error)
        }
    }, [history])
    return (
        <div>
            <Title title='Sign Up' />
            {/* <div class='column'> */}
            <form class='is-flex' onSubmit={handleSignUp}>
                <label class='mr-6'>
                    Email
                    <input name="email" type='email' placeholder='Email'/>
                </label>
                <label>
                    Password
                    <input name="password" type='password' placeholder='Password'/>
                </label>
                <button type='submit'>Sign Up</button>
            </form>
            {/* </div> */}
        </div>
    )
}

export default withRouter(SignUp);

