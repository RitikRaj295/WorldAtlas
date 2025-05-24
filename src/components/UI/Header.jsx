import { useEffect, useState } from 'react'
import style from '../../css/Header.module.css'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const[show,setShow]=useState(false);

const handleToggle=()=>{
  return setShow(!show);

}


  return (
    <header >
      <div className={style.container}>
      <div className={style.grid}>
        <div className={style.Logo}>
          <img src="/images/img5.png" alt="logo" />

          <NavLink to='/'>
         <p><span>W</span>orld
         <span>A</span>tlas</p> </NavLink>
        </div>
        <nav className={show? style.mobMenu : style.webMenu}>
          <ul>
            <li><NavLink className={({isActive}) => isActive ? style.activeLink:""} to='/'>Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? style.activeLink:""} to='/about'>About</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? style.activeLink:""} to='/country'>Country</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? style.activeLink:""} to='/contact'>Contact</NavLink></li>

          </ul>
       </nav>
         <div className={style.hamMenu}>
          <button onClick={handleToggle}>
          <GiHamburgerMenu style={{fontSize:"1.2rem"}}/>
          </button>
         </div>
        
      </div>
  </div>
    </header>
  )
}

export default Header
