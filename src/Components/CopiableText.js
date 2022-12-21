import React from 'react'
import copyIcon from '../Assets/Images/copyIcon.svg'
import checkIcon from '../Assets/Images/checkIcon.svg'


export default function CopiableText({ text }) {

    const [copied, setCopied] = React.useState(false)

    const copyLink = () => {
        navigator.clipboard.writeText(text)
        setCopied(prev => !prev)
    }

    return (
        <div className='copy-child-link-icon'>
            <img
                src={copied ? checkIcon : copyIcon}
                alt='copy link'
                onClick={copyLink}
            />
        </div>
    )
}
