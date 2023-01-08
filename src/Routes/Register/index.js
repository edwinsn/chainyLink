import SignUpForm from "./components/signUpForm";
import useFireBaseLogin from './logic/signUpLogic'

//What to do when the user just logs in
const callBack = (userCredential) => {
    // Signed in
    localStorage.setItem('user', JSON.stringify(userCredential.user));
    window.location = '/'
}

const Register = () => {

    const {
        handleSignUpWithGoogle,
        handleSignUpWithEmail,
        errors,
    } = useFireBaseLogin()

    const signUp = (email, password) => {

        return handleSignUpWithEmail(email, password, callBack)

    }

    const signUpWithGoogle = () => {

        return handleSignUpWithGoogle(callBack)

    }

    return (
        <SignUpForm
            handleSignUp={signUp}
            handleSignUpWithGoogle={signUpWithGoogle}
            errors={errors}
        />
    )

}

export default Register;