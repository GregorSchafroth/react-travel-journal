import React from 'react'
import globeIcon from '../assets/planet-earth.png'

const Header = () => {
  return (
    <div className='header-container'>
      <img className='header-logo'  src={globeIcon} alt="" />
      <p className='header-text'>my China travel journal</p>
    </div>
  )
}

export default Header