import React from 'react'
import './index.css'
import './main-card.css'
import './second-card.css'
import './third-card.css'
import shareIcon from './share.svg'
import settingsIon from './settings.svg'
import like from './like.svg'

export default function index() {
    return (
        <div id='hero-animation'>
            <div id='aboutFirstCard' className='card flex-column centered '>
                <div></div>
                <div className='link text-center' >Songs</div>
                <div className='link text-center'>My net</div>
            </div>
            <div
                className='w-100'
                id='hero-animation__second-cards'
            >
                <div className='card light'>
                    <div>
                        <div></div>
                        <div>
                            <img src={like} alt='' />
                            <img src={shareIcon} alt='' />
                            <img src={settingsIon} alt='' />
                        </div>
                    </div>

                </div>
                <div className='card dark'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
