import React from 'react'
import copyIcon from '../../../Assets/Images/copyIcon.svg'
import checkIcon from '../../../Assets/Images/checkIcon.svg'
import updateLink from '../services/updateLink'
import debounce from '../../../utils/debounce'

export default function ParentLink({ id }) {

    const [copied, setCopied] = React.useState(false)
    const [name, setName] = React.useState()
    const [nameTaken, setNameTaken] = React.useState()
    const [loading, setLoading] = React.useState(false)

    const hasNotBeenFocused = React.useRef(true)
    const inputRef = React.useRef()

    const copyLink = () => {

        if(loading) return
        if(!id) return

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

        updateLink({
            name,
            parentLink: id,
        })
            .then(() => {
                setNameTaken(false)
            })
            .catch((err) => {
                console.log({ err })
                if (err?.response?.data?.message === 'Name already taken') setNameTaken(true)
            })
            .finally(() => {
                setLoading(false)
            })
    })


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
                    defaultValue={id}
                    placeholder='Loading...'
                    onChange={handleChange}
                    readOnly={!id}
                />
                <img src={copied ? checkIcon : copyIcon} alt='copy link' />
            </div>
            {nameTaken && <p className='text-danger orange w-100 text-center'>This name is already taken</p>}
        </>

    )
}