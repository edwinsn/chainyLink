import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import userIcon from '../../../Assets/Images/user.svg'
import "../../../Assets/css/form.css"

export default function SignUpForm({
    handleSignUp,
    handleSignUpWithGoogle,
    errors,
}) {

    const [loading, setLoading] = React.useState(false)

    const onSubmit = (ev) => {

        ev.preventDefault()
        const { email, password } = ev.target.elements

        setLoading(true)

        handleSignUp(email.value, password.value)
            .finally(() => {
                setLoading(false)
            })

    }

    console.log({ errors })

    return (
        <section className='flex-column aling-center justify-center'>
            <header className='flex-column centered'>
                <img src={userIcon} alt='user icon' />
                <h1 className='text-center'>
                    Sign up to save your links
                </h1>
            </header>
            <form
                className='flex-column centered'
                onSubmit={onSubmit}
            >
                <p>
                    <span>{errors?.emailError}</span>
                    {errors?.passwordError}
                </p>
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
                    disabled={loading}
                    type='submit'
                    className={`bg-pink ${loading && 'loading-button'}`}
                >
                    Sign up
                </button>
                <button
                    onClick={handleSignUpWithGoogle}
                    className='bg-white blue mb-1'
                >
                    <FontAwesomeIcon icon={faGoogle} className="iconGoogle" />
                    use google
                </button>
            </form>
            <p className='text-center'>
                Have an account?
                <a href='/login' className='ml-1'>
                    Sign in
                </a>
            </p>
        </section >
    )
}