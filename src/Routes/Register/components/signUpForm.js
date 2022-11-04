import React from 'react'
import userIcon from '../../../Assets/Images/user.svg'

export default function SignUpForm({
    handleSignUp,
    handleSignUpWithGoogle,
    errors,
}) {


    const onSubmit = (ev) => {

        ev.preventDefault()
        const { email, password } = ev.target.elements
        handleSignUp(email.value, password.value)

    }

    const showUserExistsMessage = false//invalidPassword && !wasPasswordReseted

    return (
        <section className='full_screen'>
            <header className='flex-column centered'>
                <img src={userIcon} alt='user icon' style={{ margin: '0 auto' }} />
                <h1 className='text-center mt-1'>
                    Sign up to save your links
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
                    Sign up
                </button>
                <button
                    onClick={handleSignUpWithGoogle}
                    className='bg-white blue mb-1'
                >
                    <i className='fa fa-google mr-1'>G</i>
                    use google
                </button>
            </form>
            <p>
                Have an account?
                <a href='/login' className='ml-1'>
                    Sign in
                </a>
            </p>
            {
                showUserExistsMessage &&
                <span>
                    User exists
                </span>
            }
        </section>
    )
}