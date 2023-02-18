import React, { useEffect } from 'react'
import copyIcon from '../../../Assets/Images/copyIcon.svg'
import checkIcon from '../../../Assets/Images/checkIcon.svg'
import updateLink from '../services/updateLink'
import debounce from '../../../utils/debounce'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios'

export default function ParentLink({ id }) {

    const [copied, setCopied] = React.useState(false)
    const [name, setName] = React.useState()
    const [nameTaken, setNameTaken] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const [suggestions, setSuggestions] = React.useState([])
    const previousCancelToken = React.useRef()
    const hasInputChanged = React.useRef(false)
    const hasNotBeenFocused = React.useRef(true)
    const inputRef = React.useRef()

    const suggestionsOptions = suggestions.map((suggestion, index) => (
        <option key={index} value={suggestion} />
    ))

    useEffect(() => {
        if (!!hasInputChanged && id) {
            inputRef.current.value = id
        }
    }, [id])

    const copyLink = () => {

        if (loading) return
        if (!id) return

        if (hasNotBeenFocused.current) {
            inputRef.current.select()
            hasNotBeenFocused.current = false
        }

        navigator.clipboard.writeText(`https://chainylink.com/link/${name || id}`)
        setCopied(prev => !prev)
    }

    const handleChange = debounce((ev) => {

        const name = ev.target.value

        setName(name)
        setLoading(true)
        hasInputChanged.current = true

        const mkt = navigator.language || navigator.userLanguage;
        const source = axios.CancelToken.source();

        previousCancelToken.current?.cancel('Operation canceled by the user.')
        previousCancelToken.current = source

        updateLink({
            name,
            mkt,
            parentLink: id,
            cancelToken: source.token,
        })
            .then((res) => {
                setNameTaken(false)
                setLoading(false)
                setSuggestions(res?.data?.suggestions || [])
            })
            .catch((err) => {

                if (err.message === 'Operation canceled by the user.') return

                setLoading(false)
                if (err?.response?.data?.message === 'Name already taken') setNameTaken(true)
            })

    }, 100)

    return (
        <>
            <div
                id='parent-link'
                className='w-100 flex centered mb-2'
                onClick={copyLink}
            >
                <input
                    ref={inputRef}
                    onFocus={copyLink}
                    type='text'
                    list='parent-link-input'
                    defaultValue={id}
                    placeholder='Loading...'
                    onChange={handleChange}
                    readOnly={!id}
                />
                <datalist id="parent-link-input">
                    {<option value="Loading..." disabled />}
                    {suggestionsOptions}
                </datalist>
                {
                    loading && <FontAwesomeIcon
                        icon={faSpinner}
                        spin
                        className="mr-1" />
                }
                {!loading && <img src={copied ? checkIcon : copyIcon} alt='copy link' />}
            </div>
            {nameTaken && <p className='text-danger orange w-100 text-center'>This name is already taken</p>}
        </>

    )
}