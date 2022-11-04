import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../Components/LogOut';

export default function Nav() {

    const userIsLogged = localStorage.getItem('user')

    return (
        <nav>
            <Link to="/"
                className='ml-1'
            >
                Home
            </Link>
            <Link to="/login"
                className='ml-1'
            >
                Login
            </Link>
            <Link to="/sign-up"
                className='ml-1'
            >
                Sign up
            </Link>
            {
                userIsLogged && (
                    <Link to='/'
                    >
                        <LogOut />
                    </Link>
                )
            }
        </nav>
    )

}