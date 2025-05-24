import { NavLink, useParams } from "react-router-dom";
import {CountryIndvData} from "../api/CountryData";
import { useEffect, useState, useTransition } from "react";
import Loader from "../components/UI/Loader";
import style from '../css/CountryDetails.module.css'

const CountryDetails = () => {
    const {id}=useParams();
    const [isPending,startTransition]=useTransition();
    const [country,setCountry]= useState();

    useEffect(()=>{
             startTransition( async ()=>{
              const result= await CountryIndvData(id);
              if(result.status===200){
              setCountry(result.data[0])
              }
             })
    },[])

   
 if(isPending) return (<div className={style.loader}> <Loader/></div>)
  console.log(country)
  return (

   <div className={style.details}>
    {country && (
    <div className={style.grid}>
      <div className={style.imageBox}>
        <img src={country.flags.svg} alt={country.flags.alt} />
      </div>

      <div className={style.data}>
        <h1>{country.name.official}</h1>
       <p className={style.cardDescription}><span>Native Names :</span>
           {Object.keys(country.name.nativeName).map((key)=>
            country.name.nativeName[key].common
           ).join(", ")}
       </p>
       <p className={style.cardDescription}><span>Population :</span> {country.population}</p>
       <p className={style.cardDescription}><span>Region :</span>{country.region}</p>
       <p className={style.cardDescription}><span>Sub Region :</span>{country.subregion}</p>
       <p className={style.cardDescription}><span>Capital :</span>{country.capital}</p>
       <p className={style.cardDescription}><span>Top Level Domain :</span>{country.tld[0]}</p>
       <p className={style.cardDescription}><span>Currencies :</span>
      {Object.keys(country.currencies).map((key)=>
            country.currencies[key].name
           ).join(", ")}
       </p>
       <p className={style.cardDescription}><span>Languages:</span>
       {
        Object.keys(country.languages).map((key)=>
          country.languages[key]
        ).join(", ")
}</p>
       
       <div className={style.buttons}>
        <NavLink to="/country"><button className={style.button}>Go Back</button></NavLink>
</div>
      </div>

    </div>
    )}

   </div>
  )
}

export default CountryDetails
