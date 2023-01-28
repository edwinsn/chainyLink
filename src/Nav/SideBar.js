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
            overflow: "visible"
        },
        sidebar: {
            background: "white",
            overflow: "visible"
        },
    }

    return (

        <>
            <span
                id="menu"
                onClick={() => setOpen(!open)}
                className='pointer'
            >

                <FontAwesomeIcon
                    id="icon_bars"
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
                rootId="part-1"

            >
                <span></span>
            </Sidebar>
        </>
    )
}