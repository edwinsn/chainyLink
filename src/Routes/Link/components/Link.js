import React from 'react'
import copyIcon from '../../../Assets/Images/copyIcon.svg'
import checkIcon from '../../../Assets/Images/checkIcon.svg'

export default function Link({ id, content, backgroundColor }) {

    const style = { backgroundColor }
    const [copied, setCopied] = React.useState(false)

    const copyLink = () => {
        navigator.clipboard.writeText(content)
        setCopied(prev => !prev)
    }

    return (
        <div
            className='link-container centered'
            style={style}
        >
            <a href={content}>
                {content}
            </a>
            <div className='copy-child-link-icon'>
                <img
                    src={copied ? checkIcon : copyIcon}
                    alt='copy link'
                    onClick={copyLink} />
            </div>
        </div>
    )

}