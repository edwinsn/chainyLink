import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import userIcon from '../../../Assets/Images/user.svg'
import "../../../Assets/css/form.css"

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
        <section className='flex-column contenedor'>
            <div className='flex-column centered'>
                <img src={userIcon} alt='user icon' />
                <h1 className='text-center'>
                    Log in to save your links
                </h1>
            </div>
            <form
                className='flex-column align-items-center'
                onSubmit={onSubmit}
            >

                <p className="">{errors.emailError}</p>
                <p className="">{errors.passwordError}</p>

                <input
                    placeholder='name or email'
                    className='text-center '
                    name='email'
                    required
                    autoFocus
                />
                <input
                    placeholder='password'
                    name='password'
                    className='text-center'
                    required
                    type='password'
                />
                <button
                    type='submit'
                    className='bg-pink'
                >
                    login
                </button>
                <button
                    onClick={handleLoginWithGoogle}
                    className='bg-white blue mb-1 '
                >
                    <FontAwesomeIcon icon={faGoogle} className="iconGoogle" />
                    Use Google
                </button>
            </form>
            <p className='text-center'>
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