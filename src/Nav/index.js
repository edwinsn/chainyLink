import React from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../Components/LogOut';
import icon_home from '../Assets/Images/chainyicon.svg';
import SearchLink from './SearchLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import './Assets/nav.css';
import TransformOnSidebarOnPhone from './TransformOnSidebarOnPhone';
import useIsPhoneView from '../hooks/useIsPhoneView';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {

    const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false)
    const userIsLogged = localStorage.getItem('user')
    const isPhoneView = useIsPhoneView()
    const stopPropagation = (ev) => ev.preventDefault();

    let sideBarAndIcon = [
        <p
            to="/"
            className='mx-1'
            key='chainy-icon'
        >
            <img
                id="icon_home"
                src={icon_home}
                alt=''
            />
        </p>,

        <TransformOnSidebarOnPhone
            sideBarIsOpen={sideBarIsOpen}
            setSideBarIsOpen={setSideBarIsOpen}
            key='nav-part-1'
        >

            <input id="checkbox" type="checkbox" checked={sideBarIsOpen} />
            <label for="checkbox" ></label>

            <p
                to="/"
                id="name-app"
                onClick={() => setSideBarIsOpen(false)}
            >
                <span className="pink" >Chainy</span>
                <span className='blue'>Link</span>
            </p>



            <Link
                className='mx-1 my-2'
                to="/about"
                onClick={() => setSideBarIsOpen(false)}

            >
                <span className='mx-1'>
                    <FontAwesomeIcon icon={faCircleInfo} className="icon_barra mr-1" />
                    About
                </span>
            </Link>
            <Link
                className='mx-1 my-2'
                to='my-links'
                onClick={() => setSideBarIsOpen(false)}
            >
                <span className='mx-1'>
                    <FontAwesomeIcon icon={faCaretRight} className="icon_barra mr-1" />
                    My links
                </span>
            </Link>
            <Link
                className='my-2'
                to="/"
                onClick={() => setSideBarIsOpen(false)}
            >
                <span className='mx-1'>
                    <FontAwesomeIcon icon={faCaretRight} className="icon_barra mr-1" />
                    New Link
                </span>
            </Link>

        </TransformOnSidebarOnPhone>
    ]

    if (isPhoneView) sideBarAndIcon = sideBarAndIcon.reverse()

    return (
        <nav>
            <div className='flex' id="part-1" >

                {sideBarAndIcon}

            </div>
            <div className='flex centered part-2' id="part-2">

                <SearchLink className='mx-1' />

                <li>
                    {
                        !userIsLogged &&
                        <div
                            id='user-login-icon'
                            onClick={stopPropagation}
                            className='ml-1 pointer'
                        >
                            <FontAwesomeIcon icon={faUser} className="pink" />
                        </div>
                    }
                    <ul>
                        <Link
                            to="/login"
                        >
                            <li className="mx-1" id="login" >
                                Login
                            </li>
                        </Link>
                        <li className='mx-1'>
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
                </li >
                {
                    userIsLogged && (
                        <Link to='/'
                        >
                            <LogOut />
                        </Link>
                    )
                }
            </div >

        </nav >
    )

}