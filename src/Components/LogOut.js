import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../fire'

export default function LogOut() {

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('user')
                window.location = '/'
            })
    }

    return (
        <div onClick={handleLogOut}>
            LogOut
        </div>
    )
}
