import React, { useState } from 'react'
import { storage } from '../../../fire'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import useFromLocalStorage from '../../../hooks/useFromLocalStorage'
import updateLink from '../services/updateLink'
import LogToSaveImageModalAndButton from './LogToSaveImageModalAndButton'

export default function LinkImage({ parentLink }) {

    const userId = useFromLocalStorage('user')?.uid
    const [progress, setProgress] = useState(0)
    const [err, setErr] = useState(false)
    const userIsLogged = localStorage.getItem('user')
    const [image, setImage] = useState()

    const uploadImage = (image) => {

        if (!image) return
        const storageRef = ref(storage, `/links/${userId}/images/${image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setImage('loading')
            setProgress(progress)
        }, (err) => {
            setErr(JSON.stringify(err))
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then((url) => {

                    //Remove progress after 800ms
                    setTimeout(() => {
                        setProgress(false)
                    }, 800)

                    setImage(url)
                    updateLink({ parentLink, newImage: url })
                        .catch(() => setErr(true))

                })

        })

    }

    const removeImage = (ev) => {

        ev.stopPropagation()
        ev.preventDefault()

        setImage(false)
        updateLink({ parentLink, newImage: false })
            .catch(() => setErr(true))
    }

    const handleChange = (ev) => {

        const file = ev.target.files[0]
        uploadImage(file)

    }

    if (!userIsLogged) return (<LogToSaveImageModalAndButton />)

    return (
        <label className='w-100 flex centered my-2 '>

            {image || progress ?
                <div
                    className='relative flex-column centered'
                    id='link-image-container'>
                    <img
                        src={image}
                        id='link-image'
                        className='my-1 flex centered bg-white pointer'
                        alt='link' />
                    {
                        !Boolean(progress) && <div
                            id='remove-link-image'
                            className='p-1 bg-white rounded small gray pointer'
                            onClick={removeImage}
                        >
                            Remove
                        </div>
                    }

                    {Boolean(progress) && <span
                        id='image-progress'
                        className='rounded p-1 bg-gray'>
                        {progress}%
                    </span>}
                </div>
                :
                <div className='bg-white rounded p-1 small gray pointer'>
                    Add an image
                </div>
            }


            <input
                type='file'
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleChange}
            />
            {err}
        </label>
    )
}