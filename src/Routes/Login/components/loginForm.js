import React, { useState } from 'react'
import userIcon from '../../../Assets/Images/user.svg'

export default function LoginForm({
    handleLogin,
    handleLoginWithGoogle,
    errors,
    invalidPassword,
    resetPassword
}) {

    const [wasPasswordReseted, setWasPasswordReseted] = useState(false)

    const handlePasswordReset = (ev) => {

        resetPassword()
        setWasPasswordReseted(true)

    }

    const onSubmit = (ev) => {

        ev.preventDefault()
        const { email, password } = ev.target.elements
        handleLogin(email.value, password.value)

    }

    const showResetPasswordMessage = false//invalidPassword && !wasPasswordReseted

    return (
        <section className='full_screen'>
            <header className='flex-column centered'>
                <img src={userIcon} alt='user icon' style={{ margin: '0 auto' }} />
                <h1 className='text-center mt-1'>
                    Log in to save your links
                </h1>
            </header>
            <form
                className='column'
                onSubmit={onSubmit}
            >

                <p className="">{errors.emailError}</p>
                <p className="">{errors.passwordError}</p>

                <input
                    placeholder='name or email'
                    className='mb-1 text-center w-100'
                    name='email'
                    required
                    autoFocus
                />
                <input
                    placeholder='password'
                    name='password'
                    className='mb-1 text-center'
                    required
                    type='password'
                />
                <button
                    type='submit'
                    className='mb-1 bg-pink'
                >
                    login
                </button>
                <button
                    onClick={handleLoginWithGoogle}
                    className='bg-white blue mb-1'
                >
                    <i className='fa fa-google mr-1'>G</i>
                    use google
                </button>
            </form>
            <p>
                Sin cuenta?
                <a href='/register' className='ml-1'>
                    Registrate
                </a>
            </p>
            {
                showResetPasswordMessage &&
                <span onClick={handlePasswordReset}>
                    Restablecer Contraseña
                </span>
            }
            {
                wasPasswordReseted &&
                <span>Se ha enviado un correo para restablecer la contraseña</span>
            }
        </section>
    )
}