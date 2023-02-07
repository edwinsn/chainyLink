import React from 'react'
import anvil from './anvil.svg'
import hammer from './hammer.svg'
import link from './link.svg'
import './index.css'

export default function loading() {
  return (
    <div id='chainy-loading'>
      <img src={hammer} alt='hammer' />
      <div id='loading-chain'>
        <img src={link} alt='link' />
        <img src={link} alt='link' />
      </div>
      <img src={anvil} alt='anvil' />
    </div>
  )
}
