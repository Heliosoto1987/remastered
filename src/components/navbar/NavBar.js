import React from 'react'

// styles
import '../../styles/navBar.css'
import { NavBarContainer } from './NavBarContainer'

export const NavBar = ({ isOpen, initialMount, setMenuIsVisible }) => {
  if (initialMount) {
    return null
  }

  return (
    <div
      onClick={ () => setMenuIsVisible((prevState) => !prevState) }
      className={`menu__container ${
        isOpen ? 'menu__container--open' : 'menu__container--close'
      }`}
    >
      <NavBarContainer />
    </div>
  )
}


