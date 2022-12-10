import React from 'react'
import { useNavigate } from "react-router-dom";
import searchIcon from "../Assets/Images/search.svg"
import './nav.css';
<script src="https://kit.fontawesome.com/fb5bf97765.js" crossorigin="anonymous"></script>

export default function SearchLink() {

    const navigate = useNavigate();

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            const link = e.target.value.split('/').at(-1)
            navigate(`/link/${link}`)
        }
    }

    const link = window.location.pathname.split('/')[2]

    return (
        <div className='search'>
            <input
                onKeyDown={onKeyDown}
                placeholder='search'
                defaultValue={link}
            />
            <img src={searchIcon} />
        </div>

    )
}