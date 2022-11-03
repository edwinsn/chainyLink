import { useState } from "react";
import LoginForm from "./components/loginForm";
import useFireBaseLogin from './logic/loginLogic'

//What to do when the user just logs in
const callBack = (userCredential) => {
    // Signed in
    localStorage.setItem('user', JSON.stringify(userCredential.user));
    window.location = '/yourLinks'
}

const Login = () => {


    const [hasAccount, setHasAccount] = useState(true)

    const {
        handleLoginWithGoogle,
        handleLoginWithEmail,
        //handleResetPassword,
        //handleLogout,
        showNewPasswordText,
        errors
    } = useFireBaseLogin()

    const Login = (email, password) => {

        handleLoginWithEmail(email, password, callBack)

    }

    const LoginWithGoogle = () => {

        handleLoginWithGoogle(callBack)
    }

    return (
        <LoginForm
            handleLogin={Login}
            handleLoginWithGoogle={LoginWithGoogle}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            errors={errors}
            resetPassword={showNewPasswordText}
        />
    )

}

export default Login;