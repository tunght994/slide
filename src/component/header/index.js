import React from 'react'
import { WrapHeader } from './index.styled'
import logoBank from '../../images/img/logo.png'

const Header = ({ timeTransaction, nameOffice }) => {
  return (
    <WrapHeader>
      <div className='header-left'>
        <span className='name-office'>{nameOffice}</span>
        <span className='time'>{timeTransaction}</span>
      </div>
      <div className='header-right'>
        <img src={logoBank} alt="logo" />
        <span className='name-bank'>AGRIBANK</span>
      </div>
    </WrapHeader>
  )
}

export default Header