import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../Components/LogOut';
import icon_home from '../Assets/Images/chainyicon.svg';
import SearchLink from './SearchLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretRight, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
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
                    <label className='gray' htmlFor="menu">
                        <FontAwesomeIcon icon={faBars} />
                    </label>
                    <ul>
                        <section id="ote"></section>
                        <Link
                            to="/about"
                        >
                            <FontAwesomeIcon icon={faCircleInfo} className="icon_barra" />
                            About
                        </Link>
                        <Link
                            to='my-links'

                        >
                            <FontAwesomeIcon icon={faCaretRight} className="icon_barra" />
                            My links
                        </Link>
                        <Link
                            to="/"

                        >
                            <FontAwesomeIcon icon={faCaretRight} className="icon_barra" />
                            New Link
                        </Link>

                    </ul>
                </div>


            </div>
            <div className='flex centered part-2'>

                <SearchLink />

                <li>
                    {
                        !userIsLogged &&
                        <a id='user-login-icon' href='/'>
                            <FontAwesomeIcon icon={faUser} className="pink" />
                        </a>
                    }
                    <ul>
                        <li className="login" >
                            {!userIsLogged &&
                                <Link
                                    to="/login"
                                >
                                    Login
                                </Link>
                            }
                        </li>
                        <li>
                            {
                                !userIsLogged && (
                                    <Link
                                        to="/sign-up"
                                        className='register'
                                    >
                                        <span>Sin Cuenta? </span>
                                        Sign up
                                    </Link>
                                )
                            }
                        </li>
                    </ul>
                </li>
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