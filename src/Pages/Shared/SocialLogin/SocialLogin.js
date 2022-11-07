import React from 'react';
import { useContext } from 'react';
import { setAuthToken } from '../../../API/Auth';
import { AuthContext } from '../../../contexts/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                setAuthToken(res);
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='mt-5'>
            <p className='text-center mb-2'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;