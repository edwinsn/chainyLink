import React from 'react'
import Sidebar from "react-sidebar";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SideBar({ open, setOpen, children }) {

    const styles = {
        root: {
            position: open ? 'absolute' : undefined,
        },
        content: {
            position: open ? 'absolute' : undefined,
        },
        sidebar: {
            background: "white"
        },
    }

    return (

        <>
            <span
                onClick={() => setOpen(!open)}
            >
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setOpen(!open)}
                />
            </span>
            <Sidebar
                sidebar={children}
                open={open}
                onSetOpen={setOpen}
                styles={styles}
                rootClassName='sidebar_root_container'
            >
                <span></span>
            </Sidebar>
        </>
    )
}