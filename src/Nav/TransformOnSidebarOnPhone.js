import React from 'react'
import SideBar from './SideBar';
import useIsPhoneView from '../hooks/useIsPhoneView';

export default function TransformOnSidebarOnPhone({ children }) {

    const [sideBarIsOpen, setSideBarIsOpen] = React.useState(false)

    const isPhoneView = useIsPhoneView()


    if (isPhoneView) return (
        <SideBar open={sideBarIsOpen} setOpen={setSideBarIsOpen}>
            <ul className='column'>
                {children}
            </ul>
        </SideBar>
    )

    return (
        <ul>
            {children}
        </ul>
    )
}
