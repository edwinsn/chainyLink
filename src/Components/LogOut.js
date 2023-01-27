import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../fire'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LogOut() {

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('user')
                window.location = '/'
            })
    }

    return (
        <div onClick={handleLogOut} className='ml-1 mx-0 nav-icon-padding'>
            <FontAwesomeIcon icon={faRightFromBracket} className="icon_barra" />
        </div>
    )
}
