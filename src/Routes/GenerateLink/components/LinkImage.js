import React, { useState } from 'react'
import { storage } from '../../../fire'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import useFromLocalStorage from '../../../hooks/useFromLocalStorage'
import updateLink from '../services/updateLink'

export default function LinkImage({ parentLink }) {

    const userId = useFromLocalStorage('user')?.uid
    const [progress, setProgress] = useState(0)
    const [err, setErr] = useState(false)
    const userIsLogged = localStorage.getItem('user')

    const uploadImage = (image) => {

        if (!image) return
        const storageRef = ref(storage, `/links/${userId}/images/${image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(progress)
        }, (err) => {
            setErr(JSON.stringify(err))
        }, (res) => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then((url) => {

                    updateLink({ parentLink, newImage: url })
                        .then(() => setProgress(0))
                        .catch(() => setErr(true))

                })

        })

    }

    const handleChange = (ev) => {

        const file = ev.target.files[0]
        uploadImage(file)

    }

    if (!userIsLogged) return null

    return (

        <label className='w-100 centered my-2'>
            Add an image {progress}
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