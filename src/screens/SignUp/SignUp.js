import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { Title } from '../../components';
import app from '../../firebase'

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password, freelancer } = event.target.elements;
        // console.log(email.value, password.value, freelancer.value);
        try {
            const userCred = await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            await userCred.user.updateProfile({
                displayName: freelancer.value,
            })
            // uncomment below when ready for production
            // await userCred.user.sendEmailVerification();
            history.push('/');
        } catch (error) {
            alert(error)
        }
    }, [history])
    return (
        <div>
            <Title title='Sign Up' />
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input name="email" type='email' placeholder='Email'/>
                </label>
                <label>
                    Password
                    <input name="password" type='password' placeholder='Password'/>
                </label>
                <label htmlFor="freelancer">Are you a freelancer?</label>
                    <select name="freelancer">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp);

