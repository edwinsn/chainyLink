import { useState, useEffect } from 'react'
import { auth, provider } from '../../../fire'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'


export default function useFireBaseLogin() {

    const [user, setUser] = useState(null)
    const [showUserRegisteredText, setShowUserRegisteredText] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(() => {

        const authListener = () => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUser(user)
                } else {
                    setUser("noUser")
                }
            })
        }

        authListener()

    }, [])



    /**
     * Login functions
     */

    const handleSignUpWithEmail = (email, password, callBack) => {

        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                callBack(userCredential)
            })
            .catch(err => {
                console.error(err.code)
                switch (err.code) {
                    case "auth/user-exists-with-different-credential":
                        setShowUserRegisteredText(true)
                        setErrors({ ...errors, passwordError: err.code })
                        break;
                    case "auth/email-already-in-use":
                        setErrors({ ...errors, emailError: 'Email already used' })
                        break;
                    default:
                        setErrors({ ...errors, emailError: err.code })
                }
            })

    }

    const handleSignUpWithGoogle = (callBack) => {

        return signInWithPopup(auth, provider)
            .then((userCredential) => {
                callBack(userCredential)
            })
            .catch(err => {
                setErrors(err.message)
            })

    }


    return {
        user,
        handleSignUpWithGoogle,
        handleSignUpWithEmail,
        showUserRegisteredText,
        errors
    }

}