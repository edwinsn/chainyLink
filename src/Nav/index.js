import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../Components/LogOut';
import icon_home from '../Assets/Images/chainyicon.svg';
import SearchLink from './SearchLink';
import './nav.css';

export default function Nav() {

    const userIsLogged = localStorage.getItem('user')

    return (
        <nav>
            <Link to="/">
                <img
                    id="icon_home"
                    src={icon_home}
                    alt=''
                />
            </Link>
            <div>
                <SearchLink />
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
                {!userIsLogged && <Link
                    to="/login"
                >
                    Login
                </Link>
                }
                {
                    !userIsLogged && (
                        <Link to="/sign-up"
                            className='ml-1'
                        >
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