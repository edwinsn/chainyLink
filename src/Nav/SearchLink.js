import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from "react-router-dom";
import './Assets/searchbar.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import useCurrentUrl from '../hooks/useCurrentUrl';

export default function SearchLink({ className }) {

    const navigate = useNavigate();
    const url = useCurrentUrl()
    const link = url.split('/')[2]

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            const link = e.target.value.split('/').at(-1)
            navigate(`/link/${link}`)
        }
    }

    const handlePaste = (e) => {

        const link = e.clipboardData.getData('text').split('/').at(-1)

        if (link) {

            e.preventDefault()
            e.target.value = link

        }

    }

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
                    onPaste={handlePaste}
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