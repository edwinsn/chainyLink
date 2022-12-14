import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../Components/LogOut';
import icon_home from '../Assets/Images/chainyicon.svg';
import SearchLink from './SearchLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Assets/nav.css';

export default function Nav() {

    const userIsLogged = localStorage.getItem('user')

    return (
        <nav>
            <div className='flex part-1' >
                <Link to="/">
                    <img
                        id="icon_home"
                        src={icon_home}
                        alt=''
                    />
                </Link>

                <div>
                    <input type="checkbox" id="menu" />
                    <label className='gray' for="menu">
                        <FontAwesomeIcon icon={faBars} />
                    </label>
                    <ul>
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
                        <Link
                            to="/"
                        >
                            New Link
                        </Link>
                    </ul>
                </div>

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