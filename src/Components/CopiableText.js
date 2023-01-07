import React from 'react'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function CopiableText({ text, putAtSide = true }) {

    const [copied, setCopied] = React.useState(false)

    const copyLink = () => {
        navigator.clipboard.writeText(text)
        setCopied(prev => !prev)
    }

    return (
        <div
            className={(putAtSide && 'copy-child-link-icon') + 'mx-1'}
            onClick={copyLink}
        >
            <FontAwesomeIcon
                icon={copied ? faCheck : faCopy}
                className="mr-1" />
        </div>
    )
}
