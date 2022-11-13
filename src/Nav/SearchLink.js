import React from 'react'
import { useNavigate } from "react-router-dom";

export default function SearchLink() {

    const navigate = useNavigate();

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            const link = e.target.value
            navigate(`/link/${link}`)
        }
    }

    const link = window.location.pathname.split('/')[2]

    return (
        <input
            onKeyDown={onKeyDown}
            placeholder='search'
            defaultValue={link}
        />
    )
}