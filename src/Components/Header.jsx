import { Modal } from '@mui/material'
import React, { useState } from 'react'
import AccountIcon from './AccountIcon'

const Header = () => {

    

  return (
    <div className='header'>
        <div className="logo">
        🕸
        </div>
        <div className='title'>
        SpiderType
        </div>

        <div className="icons">
            <AccountIcon/>

        </div>

    </div>
  )
}

export default Header