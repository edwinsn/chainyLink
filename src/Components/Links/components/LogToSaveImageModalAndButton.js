import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import { Link } from 'react-router-dom'

export default function LogToSaveImageModalAndButton() {

    const [open, setOpen] = useState(false)

    return (
        <div
            className='w-100 flex centered my-2'
        >
            <button
                className='bg-white rounded p-1 small gray'
                onClick={() => setOpen(true)}
            >
                Add an image
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className='p-4'>
                    <h2>Log in to save image</h2>
                    <Link to='/login' className='w-100 flex centered mt-2'>
                        <button>
                            Login
                        </button>
                    </Link>
                </div>
            </Modal>
        </div>
    )
}
