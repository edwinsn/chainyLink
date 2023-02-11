import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';


export default function EditLink({parentLink}) {
    return (
        <div className='flex justify-center my-2'>
            <div className='w-80 flex justify-end'>
                <a href={`/link/${parentLink}/edit`}
                    className='p-1 bg-white circle-rounded text-center'
                >
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        className='mx-1'
                    />
                </a>
            </div>
        </div>
    )
}