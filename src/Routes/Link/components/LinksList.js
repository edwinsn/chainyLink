import React from 'react'

export default function LinksList({ links }) {

    return (
        <div>
            {
                links?.map((link, index) => (
                    <div
                        key={`link-${index}`}
                    >
                        {link}
                    </div>
                ))
            }
        </div>
    )
}