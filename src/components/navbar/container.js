// @vendor
import React, { useState, useEffect, useRef } from 'react'


// components
import { NavBar } from '../navbar/NavBar'
// styles
import '../../styles/container.css'

export const Container = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(null)

  const initialMount = useRef(true)

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false
    }
  }, [])

  const classButtonClose = initialMount.current ? '' : 'button__close'

  return (
    <div className="visual__container">

        <div className="background__container">

          {menuIsVisible && <div className="background__opacity" />}

        </div>

        <div className="fixed">

          <NavBar 
          setMenuIsVisible={setMenuIsVisible} 
          isOpen={ menuIsVisible } 
          initialMount={initialMount.current} 
          menuIsVisible={ menuIsVisible }
          />

            <button
              className={`button__container ${
                menuIsVisible ? 'button__open' : classButtonClose
              }`}
              onClick={() => setMenuIsVisible((prevState) => !prevState)}
            >
              { menuIsVisible ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i> }

          </button>

        </div>

    </div>
  )
}


