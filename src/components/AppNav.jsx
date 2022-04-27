import React from 'react'
import { NavLink } from 'react-router-dom'

export const AppNav = () => {
  return (
    <>
      <nav>
        <NavLink activeClassName='active' to='/home'>
          <button>
            <i className='fa-solid fa-house'></i>
          </button>
        </NavLink>
        <NavLink activeClassName='active' to='/about'>
          <button>About</button>
        </NavLink>
        <NavLink activeClassName='active' to='/code'>
          <button>
            <i className='fa-solid fa-code'></i>
          </button>
        </NavLink>
      </nav>
    </>
  )
}
