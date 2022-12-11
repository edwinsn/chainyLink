import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../Components/LogOut';
import icon_home from '../Assets/Images/chainyicon.svg';
import SearchLink from './SearchLink';
import './Assets/nav.css';

export default function Nav() {

    const userIsLogged = localStorage.getItem('user')

    return (
        <nav>
            <div className='flex centered'>
                <Link to="/">
                    <img
                        id="icon_home"
                        src={icon_home}
                        alt=''
                    />
                </Link>
                <Link
                    to="/"
                >
                    New Link
                </Link>
                <Link
                    to="/about"
                >
                    About
                </Link>
                <Link
                    to='my-links'
                >
                    My links
                </Link>
            </div>
            <div className='flex centered'>
                <SearchLink />

                {!userIsLogged && <Link
                    to="/login"
                >
                    Login
                </Link>
                }
                {
                    !userIsLogged && (
                        <Link to="/sign-up" >
                            Sign up
                        </Link>
                    )
                }
                {
                    userIsLogged && (
                        <Link to='/'
                        >
                            <LogOut />
                        </Link>
                    )
                }

            </div>

        </nav>
    )

}