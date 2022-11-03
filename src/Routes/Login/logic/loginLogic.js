import { useState, useEffect } from 'react'
import { auth, provider } from '../../../fire'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'


export default function useFireBaseLogin() {

    const [user, setUser] = useState(null)
    const [showNewPasswordText, setShowNewPasswordText] = useState(false)
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

    const handleLoginWithEmail = (email, password, callBack) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                callBack(userCredential)
            })
            .catch(err => {
                switch (err.code) {

                    case "auth/too-many-requests":
                    case "auth/wrong-password":
                        setShowNewPasswordText(true)
                        setErrors({ ...errors, passwordError: err.message })
                        break;
                    default:
                        setErrors({ ...errors, emailError: err.message })
                }
            })
            
    }

    const handleLoginWithGoogle = (callBack) => {

        signInWithPopup(auth, provider)
            .then((userCredential) => {
                callBack(userCredential)
            })
            .catch(err => {
                setErrors(err.message)
            })

    }

    const handleResetPassword = (email) => {
        resetPassword({ auth, email })
    }

    return {
        user,
        handleLoginWithGoogle,
        handleLoginWithEmail,
        handleResetPassword,
        showNewPasswordText,
        errors
    }

}

const resetPassword = ({ auth, email = '' }) => {
    //setErrors({})
    //fire.auth().sendPasswordResetEmail(email.current)
    auth.sendPasswordResetEmail()
        .then((res => console.log(res)))
        .catch((err) => { console.log(err) })
}