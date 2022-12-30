import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from "react-router-dom";
import './Assets/searchbar.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchLink({ className }) {

    const navigate = useNavigate();

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            const link = e.target.value.split('/').at(-1)
            navigate(`/link/${link}`)
        }
    }

    const link = window.location.pathname.split('/')[2]

    return (
        <div className="searchbar-contanier">
            <div className="search rounded">
                <input
                    type="text"
                    className="search__input"
                    aria-label="search"
                    onKeyDown={onKeyDown}
                    placeholder='search link'
                    defaultValue={link}
                />
                <button
                    className="search__submit flex centered gray"
                    aria-label="submit search">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>

    )
}