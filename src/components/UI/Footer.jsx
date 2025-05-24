import React from 'react'
import footerData from '../../../public/footerApi.json'
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import {NavLink} from 'react-router-dom';
import style from '../../css/Footer.module.css';

const Footer = () => {
 const footerIcons={
  MdPlace:<MdPlace/>,
  IoCallSharp:<IoCallSharp/>,
  TbMailPlus:<TbMailPlus/>
 }  

  return (
   <footer>
    <div className={style.container}>
    <div className={style.nextContainer}>
      {footerData.map((val,idx)=>{
        const {icon,title,details}=val;
        return(
        <div className={style.footerContact} key={idx}>
      <div className={style.icon}>{footerIcons[icon]}</div>
      <div className={style.details}>
        <p className={style.title}>{title}</p>
        <p className={style.info}>{details}</p>
      </div> 
        </div>
        )
      })}
      </div>
    </div>


    <div className={style.copyrightArea}>
      <div className={style.innerContainer}>
        <div className={style.copyright}>
          <p>
            Copyright ~ 2025. All Right Reserved 
          </p>
        </div>

        <div className={style.footerMenu}>
         <ul>
          <li><NavLink className={style.navLink} to='/'>Home</NavLink></li>
          <li><NavLink className={style.navLink} to='https://www.linkedin.com/in/ritik-raj-1040b5276/' target='_blank'>Social</NavLink></li>
          <li><NavLink className={style.navLink} to='/contact'>Contact</NavLink></li>

         </ul>
        </div>
      </div>
    </div>
        
   </footer>
  )
}

export default Footer
