import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                // window.location.reload();
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))

    }

    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const handleFacebookLogin = () => {
        setIsLoading(true)
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const handleGithubLogin = () => {
        setIsLoading(true)
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }


    const handleLogout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
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