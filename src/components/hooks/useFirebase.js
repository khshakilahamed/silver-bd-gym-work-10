import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // console.log(user);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUserAccount = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                window.location.reload();
                setUserName(name);
                setError('');
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => { })
    }

    const loginUsingEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                // window.location.reload();
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
    }, []);


    const handleError = (errorMessage) => {
        setError(errorMessage);
    }




    return {
        user,
        error,
        createUserAccount,
        loginUsingEmailPassword,
        handleGoogleLogin,
        handleFacebookLogin,
        handleGithubLogin,
        handleLogout,
        handleError,
        resetPassword,
    }

}

export default useFirebase;