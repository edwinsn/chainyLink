import React from 'react'
import Link from './Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@cseitz/icons-duotone';

export default function LinksList({ links, loading }) {

    if (loading) return (
        <div className='centered flex-column'>
            <Link loading={true} />
            <Link loading={true} />
        </div>
    )

    return (
        <div className='centered flex-column'>
            {
                links?.length ? links?.map((link, index) => (
                    <Link
                        content={link?.url}
                        id={`link-${index}`}
                        key={`link-${index}`}
                        backgroundColor={link?.background || "#ffffff"}
                    />
                )) : (
                    <p className='gray my-3 bg-gray px-2 py-1 circle-rounded'>
                        <FontAwesomeIcon
                            icon={faLink}
                            className="mr-1" />
                        No links
                    </p>
                )
            }
        </div>
    )
}