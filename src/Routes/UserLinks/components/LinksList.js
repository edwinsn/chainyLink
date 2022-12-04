import React from 'react'

export default function LinksList({ links }) {
    return (

        links?.map(link => (
            <p>{link.parentLink}</p>
        ))

    )
}
