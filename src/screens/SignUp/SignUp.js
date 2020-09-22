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
            <Title title='Sign Up' alignment='centered' />
            {/* <div class='column'> */}
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSignUp}>
                {/* <label class='mr-6'>
                    Email */}
                    <input class='mb-4' name="email" type='email' placeholder='Email'/>
                {/* </label> */}
                {/* <label> */}
                    {/* Password */}
                    <input class='mb-4' name="password" type='password' placeholder='Password'/>
                {/* </label> */}
                <button class='mb-6' type='submit'>Sign Up</button>
            </form>
            {/* </div> */}
        </div>
    )
}

export default withRouter(SignUp);

