import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router';
import { Title } from '../../components';
import app from '../../firebase'

const SignUp = ({ history }) => {
    const [fileUrl, setFileUrl] = useState(null)
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password, freelancer, name } = event.target.elements;
        console.log(email.value, password.value, freelancer.value, name.value);
        try {
            const userCred = await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            await userCred.user.updateProfile({
                displayName: name.value,
                photoURL: fileUrl,
                tenantId: freelancer.value
            })
            // await userCred.user.updatePhoneNumber(freelancer.value)
            // uncomment below when ready for production
            // await userCred.user.sendEmailVerification();
            history.push('/');
        } catch (error) {
            alert(error)
        }
    }, [history, fileUrl])
    const onFileChange = async e => {
        const file = e.target.files[0]
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
    }
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
                <label>
                    Display Name
                    <input name="name" type='text' placeholder='Display Name'/>
                </label>
                <label htmlFor="freelancer">Are you a freelancer?</label>
                    <select name="freelancer">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <div className="file has-name is-boxed">
                        <label className="file-label">
                            <input className="file-input" type="file" name="resume" onChange={e => onFileChange(e)}/>
                            <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">
                                Choose a file…
                            </span>
                            </span>
                            <span className="file-name">
                            {fileUrl}
                            </span>
                        </label>
                    </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp);
