import React from 'react'
import copyIcon from '../../../Assets/Images/copyIcon.svg'
import checkIcon from '../../../Assets/Images/checkIcon.svg'

export default function ParentLink({ id }) {

    const [copied, setCopied] = React.useState(false)

    const copyLink = () => {
        navigator.clipboard.writeText(`https://chainylink.com/${id}`)
        setCopied(prev => !prev)
    }

    return (
        <div
            id='parent-link'
            className='w-100 flex centered mb-2'
            onClick={copyLink}
        >
            <input
                onFocus={copyLink}
                type='text'
                value={(id && `http://chainylink.com/${id}`) || 'Loading...'}
                readOnly={true}
            />
            <img src={copied ? checkIcon : copyIcon} alt='copy link' />
        </div>
    )
}