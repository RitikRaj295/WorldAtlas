import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import style from '../../css/CountryCard.module.css'
import {NavLink} from 'react-router-dom';

const CountryCard = ({country}) => {
 const {flags,name,population,region,capital}=country;
  return (
    <li className={style.cards}>
        <div className={style.card}>
            <div className={style.images}>
                            <img src={flags.svg} alt={flags.alt} />

            </div>
            <div className={style.cardInfo}>
                <h1>{name.common.slice(0,10)+"..."}</h1>
                <ul>
                    <li><span>Population:</span> {population}</li>
                    <li><span>Region:</span> {region}</li>
                    <li><span>Capital:</span> {capital}</li>
                </ul>
                <div className={style.buttons}>
                <NavLink className={(active)=> active? style.active:style.deactivate} to={`/country/${name.common}`}>
                    <button>Read more <span><FaArrowUpRightFromSquare style={{ fontSize: "clamp(.3rem,3vw,.6rem)" }}/></span></button>
                </NavLink></div>
            </div>
        </div>
    </li>
  )
}

export default CountryCard
