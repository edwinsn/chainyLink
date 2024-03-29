import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import LogOut from '../Components/LogOut';
import icon_home from '../Assets/Images/chainyicon.svg';
import SearchLink from './SearchLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import './Assets/nav.css';
import TransformOnSidebarOnPhone from './TransformOnSidebarOnPhone';
import useIsPhoneView from '../hooks/useIsPhoneView';
import useTextColor from '../hooks/useTextColor';

export default function Nav() {

    const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false)
    const userIsLogged = localStorage.getItem('user')
    const isPhoneView = useIsPhoneView()
    const textColor = useTextColor()

    const stopPropagation = (ev) => ev.preventDefault();

    let location = useLocation();
    let verifyRouth = (routh) => {
        if (routh === location.pathname) { return "routh_active" }
        else { return " " }
    }


    let sideBarAndIcon = [

        <TransformOnSidebarOnPhone
            sideBarIsOpen={sideBarIsOpen}
            setSideBarIsOpen={setSideBarIsOpen}
            key='nav-part-1'
        >

            <input id="checkbox"
                type="checkbox"
                checked={sideBarIsOpen}
                readOnly
            />
            <label htmlFor="checkbox" ></label>

            <Link
                className='inline-flex align-items-center'
                id="name-app"
                to="/"
                onClick={() => setSideBarIsOpen(false)}
            >
                <span className='flex aling-items-center align-items-center'>
                    <img
                        id="icon_home_bar"
                        src={icon_home}
                        alt=''
                    />

                    <span className="pink" >Chainy</span>
                    <span className='blue'>Link</span>

                </span>

            </Link>

            <Link
                className='mx-1 my-2'
                id={verifyRouth("/about")}
                to="/about"
                onClick={() => setSideBarIsOpen(false)}
                style={{ color: textColor }}
            >
                <span className='mx-1' >
                    <FontAwesomeIcon icon={faCircleInfo} className="icon_barra mr-1" />
                    About
                </span>
            </Link>

            <Link
                className='mx-1 my-2'
                id={verifyRouth("/my-links")}
                to='my-links'
                onClick={() => setSideBarIsOpen(false)}
                style={{ color: textColor }}
            >
                <span className='mx-1'>
                    <FontAwesomeIcon icon={faCaretRight} className="icon_barra mr-1" />
                    My links
                </span>
            </Link>

            <Link
                className='my-2'
                id={verifyRouth("/")}
                to='/'
                onClick={() => setSideBarIsOpen(false)}
                style={{ color: textColor }}
            >
                <span className='mx-1'>
                    <FontAwesomeIcon icon={faCaretRight} className="icon_barra mr-1" />
                    New Link
                </span>
            </Link>

        </TransformOnSidebarOnPhone>
    ]


    if (!isPhoneView) sideBarAndIcon.unshift(
        <Link
            to="/"
            className='mx-1'
            key='chainy-icon'
        >
            <img
                id="icon_home"
                src={icon_home}
                alt=''
                className={`circle ${textColor && 'p-05 bg-white'}`}
            />
        </Link>
    )

    return (
        <nav>
            <div className='flex align-items-center' id="part-1" >

                {sideBarAndIcon}

            </div>
            <div className='flex centered' id="part-2">

                <SearchLink className='mx-1' />

                <li>
                    {
                        !userIsLogged &&
                        <div
                            id='user-login-icon'
                            onClick={stopPropagation}
                            className='ml-1 pointer nav-icon-padding'
                        >
                            <FontAwesomeIcon icon={faUser} className="pink" />
                        </div>
                    }
                    <ul>
                        <Link
                            to="/login"
                            style={{ color: textColor }}
                        >
                            <li className="mx-1" id="login" >
                                Login
                            </li>
                        </Link>
                        <li
                            className='mx-1'
                            style={{ color: textColor }}
                        >
                            {
                                !userIsLogged && (
                                    <Link
                                        to="/sign-up"
                                        id='register'
                                    >
                                        <span className='mt-1 mr-1'>Sin Cuenta? </span>
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
                            style={{ color: textColor }}
                        >
                            <LogOut />
                        </Link>
                    )
                }
            </div>

        </nav>
    )

}