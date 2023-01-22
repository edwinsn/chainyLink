import React from 'react'
import './index.css'
import './main-card.css'
import './second-card.css'
import './third-card.css'

export default function index() {
    return (
        <div id='hero-animation'>
            <div id='aboutFirstCard' className='card flex-column centered '>
                <div></div>
                <div className='link text-center' >Link 1</div>
                <div className='link text-center'>Link 2</div>
            </div>
            <div
                className='w-100'
                id='hero-animation__second-cards'
            >
                <div className='card bg-green'>

                </div>
                <div className='card bg-blue'>

                </div>
            </div>
        </div>
    )
}
