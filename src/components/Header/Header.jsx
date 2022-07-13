import React from 'react'
import "./Header.css"
import CoPresentIcon from '@mui/icons-material/CoPresent';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='header__game'>
        <h1 className='header__game__title'>Metacritic</h1>
        <Link to='/'>
        <CoPresentIcon/></Link>
    </div>
  )
}

export default Header