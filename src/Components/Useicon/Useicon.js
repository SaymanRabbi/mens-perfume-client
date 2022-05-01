import React, { useEffect } from 'react';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSignInWithGoogle,useSignInWithGithub, useSignInWithFacebook} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const Useicon = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, Gooleuser] = useSignInWithGoogle(auth);
    // githubsignin
    const [signInWithGithub, Githubuser] = useSignInWithGithub(auth);
    //facebooksignin
    const [signInWithFacebook, Facebookuser] = useSignInWithFacebook(auth);
    useEffect(() => {
        if (Gooleuser || Githubuser || Facebookuser) {
            navigate('/')
            toast.success('Login Sucessfully', { id: '02' })
        }
    }, [navigate, Gooleuser, Githubuser, Facebookuser])
    //GoogleSign in
    const signinGoogle = () => {
        signInWithGoogle();
    }
     //GithubSignin
    const signinGithub = () => {
        signInWithGithub();
    }
     //FacebookSignin
    const facebooklogin = () => {
        signInWithFacebook()
    }
    return (
        <div className='w-3/4 mx-auto mt-6 flex gap-4 justify-center items-center'>
            <div onClick={signinGoogle} className='w-[40px] h-[40px] icon-style google text-red-700'><FontAwesomeIcon icon={faGoogle}size="2x" /></div>
                        <div onClick={facebooklogin} className='w-[40px] h-[40px] icon-style text-cyan-400 facebook'><FontAwesomeIcon icon={faFacebook} size="2x" /></div>
                        <div onClick={signinGithub} className='w-[40px] h-[40px] icon-style text-dark github'><FontAwesomeIcon icon={faGithub}size="2x" /></div>
                        {/* <FontAwesomeIcon icon={google} /> */}
        </div>
    );
};

export default Useicon;